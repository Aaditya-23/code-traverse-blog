import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { LikeButton, PostMetrics } from '@/components/ui'
import Sidebar from './sidebar'

function getBlog(slug: string) {
  const blog = allPosts.filter((p) => p.slug === slug)[0]
  if (!blog) notFound()

  return blog
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  const blog = getBlog(slug)

  const MDXContent = useMDXComponent(blog.body.code)
  return (
    <>
      <h1 className='text-center text-4xl font-extrabold text-police-blue sm:text-5xl md:text-6xl'>
        {blog.title}
      </h1>

      <PostMetrics slug={slug} />

      <div className='mt-10 justify-end sm:flex'>
        <div className='px-3'>
          <MDXContent />
        </div>
        <Sidebar />
        <div className='sm:hidden'>
          <LikeButton />
        </div>
      </div>
    </>
  )
}
