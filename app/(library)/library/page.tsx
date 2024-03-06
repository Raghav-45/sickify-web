import { getUserPlaylists } from '@/lib/dbUtils'
import { FC } from 'react'
import Playlist from '@/components/Playlist'

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const userPlaylists = await getUserPlaylists()
  return (
    <div>
      {userPlaylists &&
        userPlaylists.map((elem) => (
          <Playlist
            key={elem.name}
            name={elem.name}
            image='/icon-192x192.png'
            id={elem.id}
          />
        ))}
    </div>
  )
}

export default page
