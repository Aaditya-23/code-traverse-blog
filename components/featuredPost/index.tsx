import { allPosts } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import Image from 'next/image'
import Link from 'next/link'
import featuredPostImage from '@/public/featuredPostImage.png'

async function fetchFeaturedPost() {
  const post = allPosts.filter((post) => post.slug === 'next')[0]
  return post
}

export default async function Index() {
  const featuredPost = await fetchFeaturedPost()

  return (
    <Link
      href={`/blog/${featuredPost.slug}`}
      className='group mx-auto flex aspect-square w-full max-w-[400px] flex-col justify-between rounded-xl bg-gradient-to-t from-[#09203f] to-[#537895] p-3 text-white shadow-elevation dark:shadow-darkElevation sm:aspect-[3/2]'
    >
      <p className='text-lg font-semibold capitalize'>featured post</p>

      <div className='flex flex-col gap-4'>
        <p className='text-2xl font-medium underline-offset-1 group-hover:underline'>
          {featuredPost.title}
        </p>
        <div className='flex justify-between text-sm'>
          <p>2.3k 💖</p>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  )
}
