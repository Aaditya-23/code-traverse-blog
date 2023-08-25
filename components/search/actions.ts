'use server'

import { prisma } from '@/lib/prisma'
import { redis } from '@/lib/redis'
import { z } from 'zod'

const schema = z
  .object({
    slug: z.string(),
    title: z.string(),
    _count: z.object({
      likes: z.number(),
    }),
  })
  .array()

export async function fetchPosts(query: string) {
  const cache = await redis.get(query)

  const parsedData = schema.safeParse(cache)

  if (parsedData.success) return parsedData.data

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
