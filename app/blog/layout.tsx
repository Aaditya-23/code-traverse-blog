import { Subscribe } from '@/components/ui'
import { Navbar } from '@/layouts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='mb-5 mt-10 flex flex-col gap-3 lg:mt-14'>
        {children}

        {/* <div className='my-10 flex flex-col items-center gap-3'>
          <Subscribe />
          <p className='text-xs font-medium text-police-blue capitalize'>
            subscribe to our news letter
          </p>
        </div> */}
      </main>
    </>
  )
}
