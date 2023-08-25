import { FeaturedPost, Search } from '@/components'
import { Footer, Navbar } from '@/layouts'
import { AllPosts } from './_components'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className='mt-14 flex flex-col gap-8 p-2'>
        <FeaturedPost />

        <div>
          <Search />
        </div>

        <div className='max-w-[450px] self-center sm:w-8/12 sm:max-w-none'>
          <AllPosts />
        </div>
      </main>
      <div className='fixed left-1/2 top-1/2 -z-10 aspect-square h-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#f4a385] via-[#bf5187] to-[#9291bd] blur-[55px] md:h-44 md:blur-3xl' />
      <Footer />
    </>
  )
}
