import MusicCard from '@/components/MusicCard'
import PlaylistPanel from '@/components/PlaylistPanel'
import SectionHeading from '@/components/SectionHeading'
import { FC } from 'react'
import {YTMUSIC as ytmusicapi} from 'ytmusic'

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

const cookieyt = "YSC=rmtvUrAmk_s; VISITOR_INFO1_LIVE=A_qcuGtsSNQ; _gcl_au=1.1.284001967.1669825108; SID=RAiX890yck2ZvWf_PD69wG8vk63byHsiQiwa5DDP6SDFi9aWvA1sjw7M_JdXVxPh7iu7qA.; __Secure-1PSID=RAiX890yck2ZvWf_PD69wG8vk63byHsiQiwa5DDP6SDFi9aWToVgWw-qx7WzWTJ5OsqNhg.; __Secure-3PSID=RAiX890yck2ZvWf_PD69wG8vk63byHsiQiwa5DDP6SDFi9aWRYaM8QJUOkC8IV69vg1piA.; HSID=A0BzevEYY6d2ID_PP; SSID=A-qbFazKkieXx1sI2; APISID=r0dfpVeTcMC2cizH/ARoFJKXxYaKBtljSQ; SAPISID=laOXdKGfNe1SPpMK/Az0MU8uoc1fVSj4ur; __Secure-1PAPISID=laOXdKGfNe1SPpMK/Az0MU8uoc1fVSj4ur; __Secure-3PAPISID=laOXdKGfNe1SPpMK/Az0MU8uoc1fVSj4ur; LOGIN_INFO=AFmmF2swRAIgGfIY7SSA-INu9iV5nzdKhN69hT_iBcagiEFI5xcVwUUCIAQjcHE2VbNu4Xc9AoHdYRE3BBZjiMH8WqX3Hk3G0o5z:QUQ3MjNmeWxQWGFmTTJRbU1NbU80TG9feDBwRmZEaTVCTE9wZi1OZ3k4NjZRc3ZNM2xOOTktS3R0aFcyeGJIUmtSM05WTE1kSWFfcGNHOE5ONWFfX2tVVE9UYnZPZWdNa0t6YnF0S0R0N0J5bUhxazZFYlhQXzJVM3VLVW5qdmpSaUFZX1JyNVVmNTZZWEpDYngxUEQ2Zm54eXFpa1VXSUp3; SIDCC=AIKkIs1SmNiNq17VNfN5DXdAIrudOYX5EwbF5AeezUWUm7yH7jvQKGooWQ_L2JwG6Jdq3GA8ZQ; __Secure-1PSIDCC=AIKkIs0J71EStz4HIZCbIX59l_PLwRRqQwdePhcEhv6p6TL6SXSBts_O0V3dVZw9Vo8ybHgJPw; __Secure-3PSIDCC=AIKkIs0PpzxlZ5qsFXz0-M_gokno-g65cpnooCc2ZsDOa-2FIvZpN3QLC2El0zvw0QnNuIoQ; ST-jo7n95=csn=MC4xMzA4ODQwODQ0ODEyMzU5&itct=CA0QwJ4JGAAiEwjVhMzap9b7AhUIjtgFHfEWDDg%3D"

const api = new ytmusicapi(cookieyt)

const page: FC<pageProps> = async ({}) => {
  // const data: Song[] = await getData()
  // const homepageData: Homepage[] = await getHomePage()
  const songs = await api.search('Hot stuff')
  console.log(songs)
  return (
    <>
      <div className='gap-2 grid grid-cols-2 mb-4 px-2 pt-2 w-full'>
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

      {/* <SectionHeading name='Made for You' />
      <div className='flex w-full overflow-x-scroll hide-scrollbar'>
        {data &&
          data.map((elem) => (
            <MusicCard
              key={elem.title}
              name={elem.title}
              artist={ArrayToStr(elem.artists)}
              image={elem.thumbnails[elem.thumbnails.length - 1].url}
              videoId={elem.videoId}
            />
          ))}
      </div> */}
      {/* {homepageData &&
        homepageData.map((section) => (
          <>
            <SectionHeading name={section.title} />
            <div className='flex w-full overflow-x-scroll hide-scrollbar'>
              {section.contents.map((elem) => (
                <MusicCard
                  key={elem.title}
                  name={elem.title}
                  artist={ArrayToStr(elem.artists)}
                  image={elem.thumbnails[elem.thumbnails.length - 1].url}
                  videoId={elem.videoId}
                />
              ))}
            </div>
          </>
        ))} */}
    </>
  )
}

export default page
