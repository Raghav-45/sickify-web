import { PlaylistType } from '@/lib/dbUtils'
import { FC } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/lib/firebaseClient'
import Playlist from '@/components/Playlist'

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

async function getUserPlaylist() {
  const data: (PlaylistType & { id: string })[] = []
  const q = query(
    collection(db, 'playlists'),
    where('owner', '==', '81f07a37-d25d-474c-b029-e71e2fefc85b')
  )
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as PlaylistType & { id: string })
    console.log(doc.id, ' => ', doc.data())
  })
  return data
}

const page: FC<pageProps> = async ({}) => {
  const data: SongData[] = await getData()
  const userPlaylists = await getUserPlaylist()

  return (
    <div>
      {userPlaylists &&
        userPlaylists.map((elem) => (
          <Playlist
            key={elem.name}
            name={elem.name}
            image={
              'https://lh3.googleusercontent.com/BF0qukRO1UhzY0I_0W4SyFUbwi24WaLalgbCSvH1vd1O-SKXZ3xSsNxw0OouObUEuRZ--xXVarYY3k4P=w120-h120-l90-rj'
            }
            id={elem.id}
          />
        ))}
    </div>
  )
}

export default page
