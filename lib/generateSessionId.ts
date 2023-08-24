import { headers } from 'next/headers'
import { createHash } from 'crypto'

export function generateSessionId(slug: string) {
  const ip = headers().get('x-forwarded-for') || '0.0.0.0'

  const userId = createHash('sha256')
    .update(ip + process.env.IP_ADDRESS_SALT)
    .digest('hex')

  const sessionId = userId + '___' + slug

  return sessionId
}
