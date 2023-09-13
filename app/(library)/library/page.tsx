import TrackList from '@/components/TrackList'
import { FC } from 'react'

interface pageProps {}

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
  const data = await getData()
  return (
    <div>
      {data &&
// @ts-ignore
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
