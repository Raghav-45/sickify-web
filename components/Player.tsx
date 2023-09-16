'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Icons } from './Icons'
import { useGenerationStore } from './GenerationStore'
import { cn } from '@/lib/utils'

interface playerProps {}

interface Artist {
  id: string
  name: string
}

function ArrayToStr(a: string | Artist[]): string {
  if (typeof a === 'string') {
    return a
  }
  if (Array.isArray(a)) {
    const b = a.map((e) => e.name)
    return b.join(', ')
  }
  return ''
}

const Player: FC<playerProps> = ({}) => {
  const {
    name,
    artist,
    image,
    isPlaying,
    setIsPlaying,
    isLoading,
    trackLength,
    currentPlayed,
    currentloaded,
  } = useGenerationStore()
  return (
    <div className='px-2 pt-2'>
      <div className='relative flex flex-row h-14 w-full p-2 bg-white/10 align-middle items-center overflow-hidden rounded-xl backdrop-blur-lg transition-all'>
        <div
          className={cn(
            'flex-none aspect-square h-full shadow-[0_4px_24px_rgb(0,0,0,50%)] overflow-hidden',
            image ? 'rounded-lg' : 'rounded-full'
          )}
        >
          <Image
            height={36}
            width={36}
            className='h-full w-full'
            src={image ?? '/icon-192x192.png'}
            alt=''
          />
        </div>
        <div className='flex flex-1 flex-col ml-2 text-left align-middle'>
          <h1 className='text-sm text-white font-semibold'>
            {name ?? 'Sickify'}
          </h1>
          <h2 className='text-xs text-white'>
            {artist ? ArrayToStr(artist) : 'By - @raghav_aditya_45'}
          </h2>
        </div>
        <div className='flex flex-none flex-col order-last h-full justify-center items-center aspect-square'>
          {isPlaying ? (
            <Icons.Pause
              className='text-white h-5 w-5'
              onClick={() => {
                setIsPlaying(false)
              }}
            />
          ) : (
            <Icons.Play
              className='text-white h-5 w-5'
              onClick={() => {
                setIsPlaying(true)
              }}
            />
          )}
        </div>

        <div
          className='absolute h-[3px] bottom-0 left-0 mx-1 z-10 rounded-full bg-white/20 w-[0%] transition-all delay-0 duration-300 ease-in-out'
          style={{ width: `${(currentloaded / trackLength) * 100}%` }}
        ></div>
        <div
          className='absolute h-[3px] bottom-0 left-0 mx-1 z-20 rounded-full bg-green-500 w-[0%] transition-all delay-0 duration-300 ease-in-out'
          style={{ width: `${(currentPlayed / trackLength) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

export default Player
