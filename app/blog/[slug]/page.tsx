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

async function checkPostLike(slug: string, title: string) {
  const sessionId = generateSessionId(slug)
  const like = await prisma.likes.findUnique({
    where: {
      id: sessionId,
    },
  })

  // if (!like)
  //   await prisma.post.create({
  //     data: {
  //       slug,
  //       title,
  //     },
  //   })

  return like ? true : false
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = getBlog(params.slug)
  const isPostLiked = await checkPostLike(params.slug, blog.title)
  const MDXContent = getMDXComponent(blog.body.code)

  return (
    <>
      <h1 className='mx-auto w-11/12 text-center text-4xl font-extrabold text-police-blue sm:text-5xl md:w-3/4 '>
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
    </>
  )
}

function NavLink({ heading }: { heading: any }) {
  return (
    <Link
      href={`#${heading.slug}`}
      className='break-words text-xs font-medium text-slate-600 underline-offset-1 hover:underline'
    >
      {heading.text}
    </Link>
  )
}
