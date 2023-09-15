import MusicCard from '@/components/MusicCard'
import PlaylistPanel from '@/components/PlaylistPanel'
import SectionHeading from '@/components/SectionHeading'
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

async function getHomePage() {
  const res = await fetch('https://sickify-web-api.vercel.app/gethome')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const page: FC<pageProps> = async ({}) => {
  const data: Song[] = await getData()
  const homepageData: Homepage[] = await getHomePage()
  return (
    <>
      <div className='grid grid-cols-2 gap-2 w-full px-2 pt-2 mb-4'>
        <PlaylistPanel
          name='Discover'
          image='https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj'
        />
        <PlaylistPanel
          name='Zombie'
          image='https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj'
        />
        <PlaylistPanel
          name='Happy Mix'
          image='https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj'
        />
        <PlaylistPanel
          name='Run This Town'
          image='https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj'
        />
        <PlaylistPanel
          name='Skull Box'
          image='https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj'
        />
        <PlaylistPanel
          name='Rock n Roll'
          image='https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj'
        />
      </div>

      <SectionHeading name='Made for You' />
      <div className='flex w-full hide-scrollbar overflow-x-scroll'>
        {data &&
          data.map((elem) => (
            <MusicCard
              key={elem.title}
              name={elem.title}
              artist={elem.artists}
              image={elem.thumbnails[elem.thumbnails.length - 1].url}
              videoId={elem.videoId}
            />
          ))}
      </div>
      {homepageData &&
        homepageData.map((section) => (
          <>
            <SectionHeading name={section.title} />
            <div className='flex w-full hide-scrollbar overflow-x-scroll'>
              {section.contents.map((elem) => (
                <MusicCard
                  key={elem.title}
                  name={elem.title}
                  artist={elem.artists}
                  image={elem.thumbnails[elem.thumbnails.length - 1].url}
                  videoId={elem.videoId}
                />
              ))}
            </div>
          </>
        ))}
    </>
  )
}

export default page
