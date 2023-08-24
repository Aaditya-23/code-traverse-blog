import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

const ThemeProvider = dynamic(() => import('../lib/context/theme'), {
  ssr: false,
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Code Traverse Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
