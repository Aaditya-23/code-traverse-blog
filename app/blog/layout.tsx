import { Navbar } from '@/layouts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='mt-10 flex flex-col gap-3'>{children}</main>
    </>
  )
}
