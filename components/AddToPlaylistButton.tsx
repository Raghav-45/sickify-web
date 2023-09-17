'use client'

import { addToPlaylist } from '@/lib/dbUtils'
import { MoreVerticalIcon } from 'lucide-react'
import { FC } from 'react'

interface AddToPlaylistButtonProps {
  name: string
  artists: string
  image: string
}

const AddToPlaylistButton: FC<AddToPlaylistButtonProps> = ({
  name,
  artists,
  image,
}) => {
  return (
    <MoreVerticalIcon
      className='h-5 w-5'
      onClick={() => {
        addToPlaylist('Zc1NENwJPxLFd9CoAJTP', {
          name: name,
          artist: artists,
          image: image,
        })
      }}
    />
  )
}

export default AddToPlaylistButton
