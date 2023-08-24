'use server'

import { prisma } from '@/lib/prisma'
import { redis } from '@/lib/redis'
import { MatchedPosts } from '@/types'

export async function fetchPosts(query: string) {
  const cache = await redis.get<Array<MatchedPosts>>(query)

  if (cache) return cache

  const posts = await prisma.post.findMany({
    where: {
      title: {
        contains: query.toLowerCase().trim(),
      },
    },
    select: {
      _count: { select: { likes: true } },
      slug: true,
      title: true,
    },
  })

  await redis.set(query, JSON.stringify(posts), { ex: 900 })

  return posts
}
