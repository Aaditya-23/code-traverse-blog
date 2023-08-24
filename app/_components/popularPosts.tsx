import { prisma } from '@/lib/prisma'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import StreamMetrics from './streamMetrics'

async function fetchPopularPosts() {
  const popularPosts = await prisma.post.findMany({
    orderBy: { likes: { _count: 'desc' } },
    take: 5,
    select: { slug: true },
  })

  return popularPosts
}

export default async function PopularPosts() {
  const posts = await fetchPopularPosts()

  return (
    <div className='ml-4 hidden flex-col gap-6 text-police-blue md:flex md:flex-[2] lg:flex-1'>
      <div className='space-y-2'>
        <p className='text-2xl font-semibold capitalize'>popular posts</p>

        <div className='h-px w-full bg-police-blue/30'></div>
      </div>

      {posts.map(({ slug }) => (
        <Post key={slug} slug={slug} />
      ))}
    </div>
  )
}

function Post({ slug }: { slug: string }) {
  const post = allPosts.filter((post) => post.slug === slug)[0]

  return (
    <Link
      href={`/blog/${slug}`}
      className='flex flex-col gap-2 rounded-lg p-2 transition-colors hover:bg-black/5'
    >
      <p className='font-semibold md:text-lg'>{post.title}</p>

      <StreamMetrics slug={slug} />

      <p className='text-sm'>{post.description}</p>
    </Link>
  )
}
