import TrackList from '@/components/TrackList'
import { FC } from 'react'

interface pageProps {}

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

const getData = async () => {
  const res = await fetch(
    'https://sickify-web-api.vercel.app/search/songs?query=arijit singh songs'
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const page: FC<pageProps> = async ({}) => {
  const data: SongData[] = await getData()
  return (
    <div>
      {data &&
        data.map((elem) => (
          <TrackList
            key={elem.title}
            name={elem.title}
            artist={elem.artists}
            image={elem.thumbnails[elem.thumbnails.length - 1].url}
          />
        ))}
    </div>
  )
}

export default page
