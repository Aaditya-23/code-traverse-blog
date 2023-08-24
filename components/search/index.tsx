'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { fetchPosts } from './actions'
import type { MatchedPosts } from '@/types'

const wrapperVariants: Variants = {
  closed: {
    backgroundColor: '#2a4663',
    color: '#ffffff',
    transition: {
      when: 'afterChildren',
      delay: 0.2,
    },
  },

  open: {
    backgroundColor: '#ffffff',
    color: '#000000',
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.2,
    },
  },
}

const inputVariants: Variants = {
  closed: {
    width: 0,
    opacity: 0,
  },
  open: {
    width: 'auto',
    opacity: 1,
  },
}

export default function Index() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Array<MatchedPosts>>([])

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value
    setQuery(query)
  }

  function openSearchbar() {
    setIsOpen(true)
  }

  function closeSearchbar() {
    setIsOpen(false)
  }

  // TODO: turn effect to a custom hook.
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.trim()) {
        const posts = await fetchPosts(query)
        setResults(posts)
      }
    }, 500)

    return () => {
      clearTimeout(delayDebounceFn)
    }
  }, [query])

  return (
    <motion.div
      variants={wrapperVariants}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={`flex rounded-xl shadow-elevation`}
    >
      <button className='p-3' tabIndex={-1} onClick={openSearchbar}>
        <BiSearch size='1.3em' />
      </button>

      <motion.div
        variants={inputVariants}
        className='flex items-center overflow-hidden'
      >
        <input
          tabIndex={-1}
          type='text'
          className='w-[250px] pl-2 text-sm text-black outline-none placeholder:text-sm sm:w-[300px] lg:w-[350px]'
          placeholder='Search...'
          onChange={handleQueryChange}
          disabled={!isOpen}
        />
        <button className='mr-2' tabIndex={-1} onClick={closeSearchbar}>
          <AiOutlineClose size='1.3em' />
        </button>
      </motion.div>
    </motion.div>
  )
}
