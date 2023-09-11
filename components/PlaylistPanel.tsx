import { FC } from 'react'

interface PlaylistPanelsProps {
  name: string
  image: string
}

const PlaylistPanels: FC<PlaylistPanelsProps> = ({ name, image }) => {
  return (
    <div className='flex h-12 bg-light text-left text-xs align-middle items-center overflow-hidden rounded-md'>
      <img
        src={image}
        className='flex-none aspect-square h-full w-auto'
      />
      <h1 className='flex-1 font-semibold text-white ml-2'>{name}</h1>
    </div>
  )
}

export default PlaylistPanels
