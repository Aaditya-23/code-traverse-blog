'use server'

import { generateSessionId } from '@/lib/generateSessionId'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

export async function togglePostLike(input: any) {
  const parsedData = z
    .string({
      invalid_type_error: 'slug should be a string',
      required_error: 'slug is required',
    })
    .safeParse(input)

  if (parsedData.success) {
    const slug = parsedData.data
    const sessionId = generateSessionId(slug)

    const [like, post] = await Promise.all([
      prisma.likes.findUnique({
        where: { id: sessionId },
        select: { id: true },
      }),
      prisma.post.findUnique({
        where: { slug },
        select: { id: true },
      }),
    ])

    if (!post) throw Error('post not found')

    if (like) await prisma.likes.delete({ where: { id: sessionId } })
    else
      await prisma.likes.create({
        data: { id: sessionId, post: { connect: { id: post.id } } },
      })

    return { success: true }
  }

  const error = parsedData.error.errors[0].message
  return { error }
}
