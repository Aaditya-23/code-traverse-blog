'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { fetchPosts } from './actions'
import type { MatchedPosts } from '@/types'
import Link from 'next/link'
import { formatPostMetric } from '@/utils/format'

export default function Index() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Array<MatchedPosts>>([])

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value
    setQuery(query)
  }

  function toggleSearchbar(state: boolean) {
    if (!state) setQuery('')

    setIsOpen(state)
  }

  // TODO: turn effect to a custom hook.
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.trim()) {
        const posts = await fetchPosts(query)
        setResults(posts)
      } else setResults([])
    }, 500)

    return () => {
      clearTimeout(delayDebounceFn)
    }
  }, [query])

  return (
    <AnimatePresence mode='wait' initial={false}>
      {isOpen ? (
        <motion.div
          key={isOpen ? 1 : 2}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ opacity: 0 }}
          className='relative rounded-xl text-police-blue shadow-elevation'
        >
          <div className='flex items-center gap-1 p-3'>
            <BiSearch size='1.2em' />

            <input
              type='text'
              className='w-full pl-2 outline-none'
              placeholder='Search...'
              autoFocus
              onChange={handleQueryChange}
            />

            <button className='' onClick={() => toggleSearchbar(false)}>
              <AiOutlineClose size='1.2em' />
            </button>
          </div>
          {results.length > 0 && (
            <div className='hide-scrollbar absolute z-10 mt-3 flex max-h-[300px] w-full flex-col overflow-hidden overflow-y-auto rounded-xl border bg-white shadow-xl'>
              {results.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className='space-y-2 border-b p-2 last:border-b-0 hover:bg-black/5'
                >
                  <p className='font-semibold'>{post.title}</p>
                  <p className='text-sm font-medium'>
                    {formatPostMetric({ likes: post._count.likes })}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      ) : (
        <motion.button
          key={isOpen ? 1 : 2}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className='mx-auto block rounded-xl bg-[#2a4663] p-3 text-white'
          onClick={() => toggleSearchbar(true)}
        >
          <BiSearch size='1.3em' />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
