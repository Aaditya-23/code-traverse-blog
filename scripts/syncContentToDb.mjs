import { PrismaClient } from '@prisma/client'
import { allPosts } from '../.contentlayer/generated/index.mjs'

const prisma = new PrismaClient()

async function main() {
  try {
    console.log('Syncing content with the database...')

    allPosts.forEach(async ({ slug, title }) => {
      const postInDb = await prisma.post.findUnique({
        where: { slug },
        select: { id: true },
      })

      if (postInDb) return

      await prisma.post.create({
        data: { slug, title },
        select: { id: true },
      })
    })

    console.log('Content Synced with database successfully.')
    await prisma.$disconnect()
  } catch (error) {
    console.log(`Error while syncing the data`, error)
    prisma.$disconnect().then(() => {
      console.error('Terminating the build process.')
      process.exit(1)
    })
  }
}

main()
