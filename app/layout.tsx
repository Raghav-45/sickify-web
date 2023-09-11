import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sickify',
  description: 'Where Music Gets Seriously Sick',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn(
        'text-white bg-black antialiased light',
        inter.className
      )}
    >
      <body className='min-h-screen bg-black antialiased'>
        <div className='container max-w-7xl mx-auto h-full px-0'>
          {children}
        </div>
      </body>
    </html>
  )
}
