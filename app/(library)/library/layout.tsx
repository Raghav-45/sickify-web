import Image from 'next/image'
import { Search, Plus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='px-3 py-2'>
        <div className='flex justify-items-end text-white items-center'>
          <div className='flex-none relative border border-[#FCFCFD]/50 rounded-full mr-4 h-9 w-9'>
            <div className='flex focus:outline-none rounded-full h-full w-full items-center'>
              <Image
                height={36}
                width={36}
                className='aspect-square h-full w-full rounded-full'
                src={
                  'https://lh3.googleusercontent.com/a/AEdFTp7pvJ8QlLi9q9I_lHMylrsWyDuaZODMG6i2hKdH=s83-c-mo'
                }
                alt=''
              />
            </div>
          </div>
          <div className='flex-auto align-bottom my-auto mr-[8px] w-auto'>
            <h1 className='text-[26px] font-semibold'>Your Library</h1>
          </div>
          <div className='flex gap-5 mr-2'>
            <Search className='h-6 w-6' />
            <Plus className='h-6 w-6' />
          </div>
        </div>
      </div>
      <div className='hide-scrollbar pl-3 pr-2 overflow-x-scroll'>
        <div className='h-full w-max'>
          <Badge variant="secondary" className='items-center text-xs font-medium mr-2 px-2.5 py-0.5 bg-blue-100 text-blue-800'>Default</Badge>
          <Badge variant="secondary" className='items-center text-xs font-medium mr-2 px-2.5 py-0.5 bg-gray-100 text-gray-800'>Playlists</Badge>
          <Badge variant="secondary" className='items-center text-xs font-medium mr-2 px-2.5 py-0.5 bg-red-100 text-red-800'>Artists</Badge>
          <Badge variant="secondary" className='items-center text-xs font-medium mr-2 px-2.5 py-0.5 bg-green-100 text-green-800'>Albums</Badge>
          <Badge variant="secondary" className='items-center text-xs font-medium mr-2 px-2.5 py-0.5 bg-yellow-100 text-yellow-800'>Podcasts & Shows</Badge>
          <Badge variant="secondary" className='items-center text-xs font-medium mr-2 px-2.5 py-0.5 bg-indigo-100 text-indigo-800'>Indigo</Badge>
          <Badge variant="secondary" className='items-center text-xs font-medium mr-2 px-2.5 py-0.5 bg-purple-100 text-purple-800'>Purple</Badge>
          <Badge variant="secondary" className='items-center text-xs font-medium mr-2 px-2.5 py-0.5 bg-pink-100 text-pink-800'>Pink</Badge>
        </div>
      </div>
      {children}
    </>
  )
}
