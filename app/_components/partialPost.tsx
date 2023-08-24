import { type Posts } from 'contentlayer/generated'
import Link from 'next/link'
import StreamMetrics from './streamMetrics'

export default function PartialPost(props: Posts) {
  const { slug, title, description } = props

  return (
    <Link
      href={`/blog/${slug}`}
      key={slug}
      className='flex flex-col gap-4 rounded-xl px-2 py-3 text-police-blue transition-colors hover:bg-black/5'
    >
      <div className='space-y-2'>
        <p className='text-2xl font-bold'>{title}</p>

        <StreamMetrics slug={slug} />
      </div>

      <p className='text-justify text-sm'>{description}</p>
    </Link>
  )
}
