import { Subscribe } from '@/components/ui'
import { Footer, Navbar } from '@/layouts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='mb-5 mt-10 flex flex-col gap-3 lg:mt-14'>
        {children}
      </main>

      <Footer />
    </>
  )
}
