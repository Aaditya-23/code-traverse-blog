import { LikeButton } from '@/components/ui'

type SidebarProps = {
  isPostLiked: boolean
  children: React.ReactNode
}

export default function Sidebar({ isPostLiked, children }: SidebarProps) {
  return (
    <div className='hidden w-1/5 min-w-[20%] pr-1 md:block'>
      <aside className='sticky top-5 flex-col gap-4 md:flex'>
        <p className='text-lg font-semibold  uppercase text-police-blue'>
          On this page
        </p>

        <div className='flex flex-col gap-2'>{children}</div>

        <div className='h-px w-full bg-police-blue/20' />

        <LikeButton isPostLiked={isPostLiked} />
      </aside>
    </div>
  )
}
