import { allPosts } from 'contentlayer/generated'
import PartialPost from './partialPost'

export default function AllPosts() {
  return (
    <div className='flex flex-col gap-10'>
      {allPosts.map((post) => (
        <PartialPost key={post.slug} {...post} />
      ))}
    </div>
  )
}
