import { Search } from '@/components'
import { Navbar } from '@/layouts'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='p-2'>
        <Search />
      </main>
    </>
  )
}
