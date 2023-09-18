import { PlaylistType } from '@/lib/dbUtils'
import { FC } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/lib/firebaseClient'
import Playlist from '@/components/Playlist'

interface pageProps {}

type PlaylistTypeWithId = PlaylistType & { id: string }

async function getUserPlaylists() {
  const data: PlaylistTypeWithId[] = []
  const q = query(
    collection(db, 'playlists'),
    where('owner', '==', '81f07a37-d25d-474c-b029-e71e2fefc85b')
  )
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as PlaylistTypeWithId)
  })
  return data
}

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
