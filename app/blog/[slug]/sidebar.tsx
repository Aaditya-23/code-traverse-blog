import { LikeButton } from '@/components/ui'

export default function Sidebar() {
  return (
    <aside className='hidden sm:block sm:px-2'>
      On this page
      <div className='hidden sm:block'>
        <LikeButton />
      </div>
    </aside>
  )
}
