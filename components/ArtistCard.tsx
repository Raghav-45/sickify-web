import Image from 'next/image'
import { FC } from 'react'

interface ArtistCardProps {
  name: string
  image: string
  onClick?: any
}

const ArtistCard: FC<ArtistCardProps> = ({ name, image, onClick }) => {
  return (
    <div onClick={onClick} className='relative flex-none group p-2 w-28'>
      <div className='bg-light w-full h-auto p-3 rounded-xl shadow-md'>
        <div className='relative aspect-square w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 overflow-hidden rounded-full'>
          <Image
            height={136}
            width={136}
            className='h-full w-full'
            src={image}
            alt={name}
          />
        </div>
        <h1 className='text-[0.65rem] leading-4 text-white font-semibold tracking-wide whitespace-nowrap overflow-x-hidden text-ellipsis text-center'>
          {name}
        </h1>
      </div>
    </div>
  )
}

export default ArtistCard
