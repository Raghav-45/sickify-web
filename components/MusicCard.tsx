import { Play } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

interface MusicCardProps {
  name: string
  artist: string | ArtistType[]
  image: string
  onPlayButton?: any
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

const MusicCard: FC<MusicCardProps> = ({
  name,
  artist,
  image,
  onPlayButton,
}) => {
  return (
    <div className='relative flex-none group p-2 w-48'>
      <div className='bg-light w-full h-auto p-4 rounded-xl shadow-md'>
        <div className='relative aspect-square w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 overflow-hidden rounded-lg'>
          <div className='absolute playButton bg-green-500 rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0'>
            <button onClick={onPlayButton}>
              <Play className='text-white text-1xl' />
            </button>
          </div>
          <Image
            height={136}
            width={136}
            className='h-full w-full'
            src={image}
            alt={name}
          />
        </div>
        <h1 className='text-sm text-white font-semibold tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis text-left'>
          {name}
        </h1>
        <h2 className='text-xs text-lightest tracking-wide whitespace-nowrap overflow-x-hidden text-ellipsis pb-0'>
          {ArrayToStr(artist)}
        </h2>
      </div>
    </div>
  )
}

export default MusicCard
