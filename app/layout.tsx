import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Home, Search, Library } from 'lucide-react'
import Player from '@/components/Player'
import { Icons } from '@/components/Icons'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sickify',
  description: 'Where Music Gets Seriously Sick',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon-512x512.png',
    shortcut: '/icon-512x512.png',
    apple: [
      { url: '/apple-icon.png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-256x256.png', sizes: '256x256', type: 'image/png' },
      { url: '/icon-384x384.png', sizes: '384x384', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  themeColor: 'black',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    title: 'Sickify',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/icon-512x512.png',
      {
        url: '/icon-512x512.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  category: 'music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn('text-white bg-black antialiased light', inter.className)}
    >
      <body className='min-h-screen bg-black antialiased'>
        <Providers>
          <div className='container max-w-7xl mx-auto h-full px-0 pb-40'>
            {children}
          </div>

          <footer className='bg-gradient-to-t from-dark backdrop-blur-lg text-white fixed inset-x-0 bottom-0'>
            <Player />
            <div className='grid grid-cols-3 gap-0 h-14 mx-5 text-xl text-center'>
              <Link
                href='/home'
                className='flex h-full w-full align-middle'
                replace
              >
                <Icons.Home className='m-auto' />
              </Link>
              <Link
                href='/search'
                className='flex h-full w-full align-middle'
                replace
              >
                <Search className='m-auto' />
              </Link>
              <Link
                href='/library'
                className='flex h-full w-full align-middle'
                replace
              >
                <Library className='m-auto' />
              </Link>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
