'use client'

import { useState, useRef, useEffect } from 'react'
import { LuCopy } from 'react-icons/lu'
import { FiCheck } from 'react-icons/fi'

type CodeBlockProps = {
  title: string
  children?: React.ReactNode
}

export default function CodeBlock({ title, children }: CodeBlockProps) {
  const [state, setState] = useState<'copy' | 'copied'>('copy')
  const timeOutRef = useRef<NodeJS.Timeout | null>(null)
  const codeBlockWrapperRef = useRef<HTMLDivElement>(null)

  function copyCodeToClipboard() {
    const wrapper = codeBlockWrapperRef.current
    if (!wrapper) return

    const content = wrapper.children[0].textContent
    if (content) navigator.clipboard.writeText(content)
  }

  function handleClick() {
    setState('copied')
    copyCodeToClipboard()
    timeOutRef.current = setTimeout(() => setState('copy'), 1200)
  }

  useEffect(() => {
    return () => {
      if (timeOutRef.current) clearTimeout(timeOutRef.current)
    }
  }, [])

  return (
    <div className='max-w-full self-center rounded-md border text-sm text-gray-400 dark:border-white/10'>
      <div className='flex border-b p-2 text-xs font-medium dark:border-white/10 '>
        {title}

        <button
          className='ml-auto text-black dark:text-zinc-200'
          disabled={state === 'copied'}
          onClick={handleClick}
        >
          {state === 'copy' ? (
            <LuCopy size='1.2em' />
          ) : (
            <FiCheck size='1.2em' />
          )}
        </button>
      </div>

      <div ref={codeBlockWrapperRef}>{children}</div>
    </div>
  )
}
