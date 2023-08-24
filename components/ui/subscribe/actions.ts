'use server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

export async function subscribeToMailList(formData: FormData) {
  const parsedData = z
    .string({
      invalid_type_error: 'email should be a string',
      required_error: 'email is required',
    })
    .email('please provide a valid email')
    .safeParse(formData.get('email'))

  if (parsedData.success) {
    const email = parsedData.data

    const subscriber = await prisma.subscriber.findUnique({
      where: { email },
      select: { email: true },
    })

    if (!subscriber) {
      await prisma.subscriber.create({ data: { email } })
      return {
        success: true,
        message: 'thanks for subscribing to our mail list',
      }
    }

    return { success: true, message: 'you have subscribed already' }
  }

  const error = parsedData.error.errors[0].message
  return { error }
}
