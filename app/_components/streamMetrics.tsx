import { prisma } from '@/lib/prisma'
import { formatPostMetric } from '@/utils/format'
import { Suspense } from 'react'

export default function StreamMetrics({ slug }: { slug: string }) {
  return (
    <Suspense fallback={<Loading />}>
      <Metrics slug={slug} />
    </Suspense>
  )
}

async function Metrics({ slug }: { slug: string }) {
  const [{ _count, publishedAt, updatedAt, views }, p] = await Promise.all([
    prisma.post.findUniqueOrThrow({
      where: { slug },
      select: {
        _count: { select: { likes: true } },
        views: true,
        publishedAt: true,
        updatedAt: true,
      },
    }),
    new Promise((resolve) => setTimeout(resolve, 5000)),
  ])

  return (
    <div className='flex gap-1 text-sm font-medium'>
      <p>{formatPostMetric({ publishedAt, updatedAt })}</p>
      &middot;
      <p>{formatPostMetric({ likes: _count.likes })} </p>
      &middot;
      <p>{formatPostMetric({ views })} </p>
    </div>
  )
}

function Loading() {
  return (
    <span className='relative flex h-3 w-3'>
      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75'></span>
      <span className='relative inline-flex h-3 w-3 rounded-full bg-sky-500'></span>
    </span>
  )
}
