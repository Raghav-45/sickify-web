import Image from 'next/image'
import { FC } from 'react'
import OverlayPlayButton from './OverlayPlayButton'
import { MoreVerticalIcon } from 'lucide-react'
import { addToPlaylist } from '@/lib/dbUtils'
import AddToPlaylistButton from './AddToPlaylistButton'

interface TrackListProps {
  name: string
  artist: string
  image: string
  videoId: string
}

const TrackList: FC<TrackListProps> = ({ name, artist, image, videoId }) => {
  return (
    <div className='px-2 first:pt-0 pt-2'>
      <div className='relative flex flex-row h-14 w-full p-2 bg-white/10 align-middle items-center overflow-hidden rounded-xl backdrop-blur-lg transition-all'>
        <OverlayPlayButton
          name={name}
          artist={artist}
          image={image}
          videoId={videoId}
        />
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
          <h2 className='text-xs text-white truncate'>{artist}</h2>
        </div>
        <div className='flex flex-none mr-2 text-white align-middle justify-center'>
          {/* <AddToPlaylistButton
            name={name}
            artists={ArrayToStr(artist)}
            image={image}
            videoId={videoId}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default TrackList
