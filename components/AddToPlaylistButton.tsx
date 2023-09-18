'use client'

import { addToPlaylist, playlistContentType } from '@/lib/dbUtils'
import { MoreVerticalIcon } from 'lucide-react'
import { FC } from 'react'

const AddToPlaylistButton: FC<playlistContentType> = ({
  name,
  artist,
  image,
  videoId,
}) => {
  return (
    <MoreVerticalIcon
      className='h-5 w-5'
      onClick={() => {
        addToPlaylist('Zc1NENwJPxLFd9CoAJTP', {
          name: name,
          artist: artist,
          image: image,
          videoId: videoId,
        })
      }}
    />
  )
}

export default AddToPlaylistButton
