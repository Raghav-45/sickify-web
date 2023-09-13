import MusicCard from '@/components/MusicCard'
import PlaylistPanel from '@/components/PlaylistPanel'
import SectionHeading from '@/components/SectionHeading'
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

async function getHomePage() {
  const res = await fetch('https://sickify-web-api.vercel.app/gethome')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const page: FC<pageProps> = async ({}) => {
  const data = await getData()
  const homepageData = await getHomePage()
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
// @ts-ignore
          data.map((elem) => (
            <MusicCard
              key={elem.title}
              name={elem.title}
              artist={elem.title}
              image={elem.thumbnails[elem.thumbnails.length - 1].url}
            />
          ))}
      </div>
      {homepageData &&
// @ts-ignore
        homepageData.map((section) => (
          <>
            <SectionHeading name={section.title} />
            <div className='flex w-full hide-scrollbar overflow-x-scroll'>
              {section.contents.map((elem) => (
                <MusicCard
                  key={elem.title}
                  name={elem.title}
                  artist={elem.title}
                  image={elem.thumbnails[elem.thumbnails.length - 1].url}
                />
              ))}
            </div>
          </>
        ))}
    </>
  )
}

export default page
