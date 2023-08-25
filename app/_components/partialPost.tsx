import { type Posts } from 'contentlayer/generated'
import Link from 'next/link'
import StreamMetrics from './streamMetrics'

export default function PartialPost(props: Posts) {
  const { slug, title, description } = props

  return (
    <Link
      href={`/blog/${slug}`}
      key={slug}
      className='group flex flex-col gap-4 rounded-xl px-2 py-3 text-police-blue dark:text-zinc-200 '
    >
      <div className='space-y-2'>
        <p className='text-2xl font-bold underline-offset-2 group-hover:underline'>
          {title}
        </p>

        <StreamMetrics slug={slug} />
      </div>

      <p className='text-justify text-sm'>{description}</p>
    </Link>
  )
}
