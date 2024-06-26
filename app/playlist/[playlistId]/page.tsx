import FourImageGrid from '@/components/FourImageGrid'
import TrackList from '@/components/TrackList'
import { PlaylistType } from '@/lib/dbUtils'
import { db } from '@/lib/firebaseClient'
import { doc, getDoc } from 'firebase/firestore'
import Image from 'next/image'
import { FC } from 'react'

interface pageProps {
  params: { playlistId: string }
}

const page: FC<pageProps> = async ({ params }) => {
  const playlistSnap = await getDoc(doc(db, 'playlists', params.playlistId))
  const playlist = playlistSnap.data() as PlaylistType

  return (
    <div>
      {playlist && (
        <div className='flex flex-col h-auto w-full px-10 pt-6 mx-auto'>
          {playlist.contents.length < 4 && (
            <Image
              height={100}
              width={100}
              className='h-full w-full overflow-hidden rounded-xl'
              src={
                playlist.contents.length == 0
                  ? '/icon-192x192.png'
                  : playlist.contents[0].image
              }
              alt='PlaylistImage'
            />
          )}
          {playlist.contents.length >= 4 && (
            <FourImageGrid
              topleft={playlist.contents[0].image}
              topright={playlist.contents[1].image}
              bottomleft={playlist.contents[2].image}
              bottomright={playlist.contents[3].image}
              quality={100}
            />
          )}
          <h1 className='text-white text-xl font-semibold text-center px-1 py-2 truncate'>
            {playlist.name}
          </h1>
        </div>
      )}
      {playlist &&
        playlist.contents.map((elem) => (
          <TrackList
            key={elem.name}
            name={elem.name}
            artist={elem.artist}
            image={elem.image}
            videoId={elem.videoId}
          />
        ))}
    </div>
  )
}

export default page
