import { ytmusicapi } from '@/components/GenerationStore'
import TrackList from '@/components/TrackList'
import axios from 'axios'
import Image from 'next/image'
import { FC } from 'react'

interface pageProps {
  params: { playlistId: string }
}

interface Album {
  id: string
  name: string
}

interface Artist {
  id: string
  name: string
}

interface Thumbnail {
  height: number
  url: string
  width: number
}

interface Video {
  id: string
  videoType: string
}

interface FeedbackTokens {
  add: null | any
  remove: null | any
}

interface Song {
  album: Album
  artists: Artist[]
  category: string
  duration: string
  duration_seconds: number
  feedbackTokens: FeedbackTokens
  isExplicit: boolean
  resultType: string
  thumbnails: Thumbnail[]
  title: string
  videoId: string
  videoType: string
  year: null | number
}

interface SongData {
  album: Album
  artists: Artist[]
  isExplicit: boolean
  thumbnails: Thumbnail[]
  title: string
  videoId: string
}

interface Content {
  album?: Album
  artists?: Album[]
  isExplicit?: boolean
  thumbnails: Thumbnail[]
  title: string
  videoID?: string
  description?: string
  playlistID?: string
  views?: string
  browseID?: string
  year?: string
}

interface Homepage {
  contents: SongData[]
  title: string
}

interface ArtistSearch {
  artist: string
  browseID: string
  category: 'Artists'
  radioID: string
  resultType: 'artist'
  shuffleID: string
  thumbnails: Thumbnail[]
}

enum VideoType {
  MusicVideoTypeAtv = 'MUSIC_VIDEO_TYPE_ATV',
  MusicVideoTypeOmv = 'MUSIC_VIDEO_TYPE_OMV',
}

interface Track {
  album?: Album
  artists: Artist[]
  duration?: string
  duration_seconds?: number
  isAvailable: boolean
  isExplicit: boolean
  likeStatus?: string
  thumbnails: Thumbnail[]
  title: string
  videoId?: string
  videoType?: VideoType | string
}

interface PlaylistType {
  author: Artist
  description: any
  duration: string
  duration_seconds: number
  id: string
  privacy: string
  thumbnails: Thumbnail[]
  title: string
  trackCount: number
  tracks: Track[]
  year: string
}

async function getData(q) {
  const res = await fetch(
    `https://sickify-web-api.vercel.app/getartist/songs?query=${q}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const page: FC<pageProps> = async ({ params }) => {
  const playlistData: PlaylistType = await getData(params.playlistId)

  const MusicList = ({ array }: { array: Track[] }) => {
    return array.map(
      (elem) =>
        elem.videoId && (
          <TrackList
            key={elem.title}
            name={elem.title}
            artist={elem.artists}
            image={elem.thumbnails[elem.thumbnails.length - 1].url}
            videoId={elem.videoId}
          />
        )
    )
  }

  return (
    <div>
      {playlistData && (
        <div className='flex flex-col h-auto w-full px-10 pt-6 mx-auto'>
          <Image
            height={136}
            width={136}
            className='h-full w-full rounded-xl'
            src={
              playlistData.thumbnails[playlistData.thumbnails.length - 1].url
            }
            alt={'Playlist Thumbnail'}
          />
          <h1 className='text-white text-xl font-semibold text-center px-1 py-2 truncate'>
            {playlistData.title}
          </h1>
        </div>
      )}
      {playlistData && <MusicList array={playlistData.tracks} />}
    </div>
  )
}

export default page
