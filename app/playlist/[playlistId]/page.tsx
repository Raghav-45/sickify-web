import { ytmusicapi } from '@/components/GenerationStore'
import TrackList from '@/components/TrackList'
import { FC } from 'react'

interface pageProps {
  params: { playlistId: string }
}

const page: FC<pageProps> = async ({ params }) => {
  const playlist = await ytmusicapi.getPlaylist(params.playlistId)

  const MusicList = ({ array }: { array: typeof playlist.content }) => {
    return array.map((elem) => (
      <TrackList
        // @ts-ignore
        key={elem.title.text}
        // @ts-ignore
        name={elem.title.text}
        artist={elem.author.map((obj, i) => ({
          name: obj.text,
          id: String(i + 1),
        }))}
        image={elem.thumbnail[elem.thumbnail.length - 1].url}
        videoId={elem.id}
      />
    ))
  }
  return (
    <div>
      {playlist && (
        // @ts-ignore
        <p className='text-white'>{playlist.title.text}</p>
      )}
      {playlist && <MusicList array={playlist.content} />}
    </div>
  )
}

export default page
