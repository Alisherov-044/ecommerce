import '@/assets/globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components'
import { Inter } from 'next/font/google'
import { IRootLayout } from './__types__'

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Ecommerce website - build with next js',
  icons: {
    icon: '/favicon.svg',
  },
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
