import Image from 'next/image'
import { FC } from 'react'
import OverlayPlayButton from './OverlayPlayButton'

interface PlaylistProps {
  name: string
  id: string
  image: string
  onClick?: any
}

interface ArtistType {
  id: string
  name: string
}

function ArrayToStr(a: string | ArtistType[]): string {
  if (typeof a === 'string') {
    return a
  }
  if (Array.isArray(a)) {
    const b = a.map((e) => e.name)
    return b.join(', ')
  }
  return ''
}

const Playlist: FC<PlaylistProps> = ({ name, id, image, onClick }) => {
  return (
    <div className='px-2 first:pt-0 pt-2'>
      <div
        onClick={onClick}
        className='relative flex flex-row h-14 w-full p-2 bg-white/10 align-middle items-center overflow-hidden rounded-xl backdrop-blur-lg transition-all'
      >
        {/* <OverlayPlayButton
          name={name}
          artist={artist}
          image={image}
          videoId={videoId}
        /> */}
        <div className='flex-none aspect-square h-full shadow-[0_4px_24px_rgb(0,0,0,50%)] overflow-hidden rounded-lg transition-all duration-100 delay-200'>
          <Image
            height={36}
            width={36}
            className='h-full w-full'
            src={image}
            alt={name}
          />
        </div>
        <div className='flex flex-1 flex-col ml-2 text-left align-middle transition-all duration-100 delay-200 overflow-hidden'>
          <h1 className='text-sm font-semibold text-white truncate'>{name}</h1>
          <h2 className='text-xs text-white truncate'>{id}</h2>
        </div>
      </div>
    </div>
  )
}

export default Playlist
