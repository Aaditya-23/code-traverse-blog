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
  const { _count, publishedAt, updatedAt, views } =
    await prisma.post.findUniqueOrThrow({
      where: { slug },
      select: {
        _count: { select: { likes: true } },
        views: true,
        publishedAt: true,
        updatedAt: true,
      },
    })

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
  return <div className='h-2 w-1/3 animate-pulse rounded bg-gray-200'></div>
}
