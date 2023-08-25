import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { LikeButton, PostMetrics } from '@/components/ui'
import { mdxComponents } from '@/components/mdxComponents'
import { prisma } from '@/lib/prisma'
import { generateSessionId } from '@/lib/generateSessionId'
import Link from 'next/link'
import Sidebar from './sidebar'

function getBlog(slug: string) {
  const blog = allPosts.filter((p) => p.slug === slug)[0]
  if (!blog) notFound()

  return blog
}

async function checkPostLike(slug: string) {
  const sessionId = generateSessionId(slug)
  const like = await prisma.likes.findUnique({
    where: {
      id: sessionId,
    },
  })

  return like ? true : false
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = getBlog(params.slug)
  const isPostLiked = await checkPostLike(params.slug)
  const MDXContent = getMDXComponent(blog.body.code)

  return (
    <>
      <h1 className='mx-auto w-11/12 text-center text-4xl font-extrabold text-police-blue dark:text-zinc-300 sm:text-5xl md:w-3/4'>
        {blog.title}
      </h1>

      <PostMetrics slug={params.slug} />

      <div className='mt-10 justify-end md:flex md:gap-3 lg:gap-6'>
        <div className='mx-auto flex w-11/12 flex-col gap-8 px-3 md:w-[70%]'>
          <MDXContent components={mdxComponents} />

          <div className='md:hidden'>
            <LikeButton isPostLiked={isPostLiked} />
          </div>
        </div>

        <Sidebar isPostLiked={isPostLiked}>
          {blog.headings.map((heading: any) => (
            <NavLink key={heading.slug} heading={heading} />
          ))}
        </Sidebar>
      </div>
      <div className='fixed left-1/2 top-1/2 -z-10 aspect-square h-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#f4a385] via-[#bf5187] to-[#9291bd] blur-3xl md:h-44 md:blur-[95px]' />
    </>
  )
}

function NavLink({ heading }: { heading: any }) {
  return (
    <Link
      href={`#${heading.slug}`}
      className='break-words text-xs font-medium text-slate-600 underline-offset-1 hover:underline dark:text-zinc-300'
    >
      {heading.text}
    </Link>
  )
}
