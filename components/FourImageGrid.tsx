import Image from 'next/image'
import { FC } from 'react'

interface FourImageGridProps {
  topleft: string
  topright: string
  bottomleft: string
  bottomright: string
  quality?: number
}

const FourImageGrid: FC<FourImageGridProps> = ({
  topleft,
  topright,
  bottomleft,
  bottomright,
  quality,
}) => {
  return (
    <div className='grid grid-cols-2 gap-0.5 overflow-hidden rounded-xl'>
      <Image
        height={quality || 35}
        width={quality || 35}
        className='h-full w-full'
        src={topleft}
        alt='TopLeft'
      />
      <Image
        height={quality || 35}
        width={quality || 35}
        className='h-full w-full'
        src={topright}
        alt='TopRight'
      />
      <Image
        height={quality || 35}
        width={quality || 35}
        className='h-full w-full'
        src={bottomleft}
        alt='BottomLeft'
      />
      <Image
        height={quality || 35}
        width={quality || 35}
        className='h-full w-full'
        src={bottomright}
        alt='BottomRight'
      />
    </div>
  )
}

export default FourImageGrid
