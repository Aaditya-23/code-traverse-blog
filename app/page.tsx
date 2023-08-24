import { FeaturedPost, Search } from '@/components'
import { Footer, Navbar } from '@/layouts'
import { AllPosts, PopularPosts } from './_components'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className='mt-14 flex p-2'>
        <div className='flex flex-[3] flex-col gap-8'>
          <FeaturedPost />

          <div>
            <Search />
          </div>

          <AllPosts />
        </div>

        <PopularPosts />
      </main>

      <Footer />
    </>
  )
}
