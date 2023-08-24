import { MDXComponents } from 'mdx/types'
import CodeBlock from './codeBlock'
import Link from 'next/link'

export const mdxComponents: MDXComponents = {
  h1: () => {
    throw Error('Do not use h1 tag in markdown files.')
  },

  h2: (props) => (
    <h2
      className='break-words text-3xl font-semibold text-police-blue sm:text-4xl'
      {...props}
    />
  ),

  h3: (props) => (
    <h3
      className='break-words text-2xl font-semibold text-police-blue sm:text-3xl'
      {...props}
    />
  ),

  h4: (props) => (
    <h4
      className='break-words text-xl font-semibold text-police-blue sm:text-2xl'
      {...props}
    />
  ),

  h5: (props) => (
    <h5
      className='break-words text-base font-semibold text-police-blue sm:text-xl'
      {...props}
    />
  ),

  a: ({ href = '#', ref: _, ...props }) => (
    <Link
      href={href}
      className='text-sky-500 underline underline-offset-2'
      {...props}
    />
  ),

  p: (props) => (
    <p
      className='break-words text-justify text-sm tracking-wide text-police-blue sm:text-base'
      {...props}
    />
  ),

  CodeBlock,
}
