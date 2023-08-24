import { prisma } from '@/lib/prisma'
import { formatPostMetric } from '@/utils/format'

type Props = {
  slug: string
}

async function fetchPostMetrics(slug: string) {
  const metrics = await prisma.post.findFirst({
    where: {
      slug,
    },
    select: {
      _count: {
        select: { likes: true },
      },
      views: true,
      publishedAt: true,
      updatedAt: true,
    },
  })

  if (!metrics) throw Error('post not found in database')
  return metrics
}

export default async function Index(props: Props) {
  const { slug } = props

  const { _count, views, publishedAt, updatedAt } = await fetchPostMetrics(slug)

  return (
    <div className='flex flex-wrap justify-center gap-3 text-sm font-medium capitalize text-police-blue'>
      <p>{formatPostMetric({ publishedAt, updatedAt })}</p>
      <Separator />
      <p>{formatPostMetric({ likes: _count.likes })}</p>
      <Separator />
      <p>{formatPostMetric({ views })}</p>
    </div>
  )
}

function Separator() {
  return <div className='self-center rounded-full bg-gray-600 p-[2px]' />
}
