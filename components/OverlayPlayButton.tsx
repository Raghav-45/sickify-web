'use client'

import { FC } from 'react'
import { useGenerationStore } from './GenerationStore'

interface OverlayPlayButtonProps {
  name: string
  artist: string
  image: string
  videoId: string
}

const OverlayPlayButton: FC<OverlayPlayButtonProps> = ({
  name,
  artist,
  image,
  videoId,
}) => {
  const { setName, setArtist, setImage, setVideoId } = useGenerationStore()
  return (
    <div
      onClick={() => {
        setName(name)
        setArtist(artist)
        setImage(image)
        setVideoId(videoId)
      }}
      className='absolute h-full w-full top-0 inset-x-0'
    ></div>
  )
}

export default OverlayPlayButton
