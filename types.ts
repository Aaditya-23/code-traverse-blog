import { type Post } from '@prisma/client'

export type MatchedPosts = Pick<Post, 'slug' | 'title'> & {
  _count: { likes: number }
}
