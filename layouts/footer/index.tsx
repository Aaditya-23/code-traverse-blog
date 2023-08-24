import { Subscribe } from '@/components/ui'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mt-10 flex h-[200px] flex-wrap items-center justify-around border-t py-3 text-police-blue'>
      <div className='flex flex-col gap-7'>
        <div className='flex gap-3 font-semibold'>
          <Link
            href='#'
            className='capitalize underline-offset-1 hover:text-blue-500 hover:underline'
          >
            tests
          </Link>
          <Link
            href='#'
            className='capitalize underline-offset-1 hover:text-blue-500 hover:underline'
          >
            blog
          </Link>
        </div>

        <div className='space-y-1'>
          <div className='text-sm'>
            <span>Built with</span>&nbsp;
            <Link
              href='https://nextjs.org/'
              target='_blank'
              className='capitalize underline-offset-1 hover:text-blue-500 hover:underline'
            >
              next
            </Link>
            ,&nbsp;
            <Link
              href='https://tailwindcss.com/'
              target='_blank'
              className='capitalize underline-offset-1 hover:text-blue-500 hover:underline'
            >
              tailwind
            </Link>
            ,&nbsp;
            <Link
              href='https://mdxjs.com/'
              target='_blank'
              className='capitalize underline-offset-1 hover:text-blue-500 hover:underline'
            >
              MDX
            </Link>
            ,&nbsp;
            <span>and</span>&nbsp;
            <Link
              href='https://contentlayer.dev/'
              target='_blank'
              className='capitalize underline-offset-1 hover:text-blue-500 hover:underline'
            >
              contentlayer
            </Link>
            .
          </div>

          <p className='text-xs font-medium capitalize'>
            powered by&nbsp;
            <Link
              href='https://vercel.com/home'
              className='text-base underline-offset-1 hover:text-blue-500 hover:underline'
            >
              Vercel
            </Link>
          </p>
        </div>
      </div>

      <div>
        <Subscribe />
      </div>
    </footer>
  )
}
