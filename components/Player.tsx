import { FC } from 'react'
import { Play } from 'lucide-react'

interface playerProps {}

const Player: FC<playerProps> = ({}) => {
  return (
    <div className='px-2 pt-2'>
      <div className='relative flex flex-row h-14 w-full p-2 bg-white/10 align-middle items-center overflow-hidden rounded-xl backdrop-blur-lg transition-all'>
        <div className='flex-none aspect-square h-full shadow-[0_4px_24px_rgb(0,0,0,50%)] overflow-hidden rounded-lg'>
          <img src='/icon-192x192.png' className='h-full w-full'/>
        </div>
        <div className='flex flex-1 flex-col ml-2 text-left align-middle'>
          <h1 className='text-sm text-white font-semibold'>Sickify</h1>
          <h2 className='text-xs text-white'>By - @raghav_aditya_45</h2>
        </div>
        <div className='flex flex-none flex-col order-last h-full justify-center items-center aspect-square'>
          <Play className='text-white' />
        </div>

        {/* <div className='absolute h-[3px] bottom-0 left-0 mx-1 z-10 rounded-full bg-white/20 w-[0%] transition-all delay-0 duration-300 ease-in-out' style={{ width: `${((BufferDuration/MusicDuration)*100)}%` }}></div>
        <div className='absolute h-[3px] bottom-0 left-0 mx-1 z-20 rounded-full bg-green-500 w-[0%] transition-all delay-0 duration-300 ease-in-out' style={{ width: `${SeekPos}%` }}></div> */}
        <div className='absolute h-[3px] bottom-0 left-0 mx-1 z-10 rounded-full bg-white/20 w-[0%] transition-all delay-0 duration-300 ease-in-out' style={{ width: `${((50/100)*100)}%` }}></div>
        <div className='absolute h-[3px] bottom-0 left-0 mx-1 z-20 rounded-full bg-green-500 w-[0%] transition-all delay-0 duration-300 ease-in-out' style={{ width: `${65}%` }}></div>
      </div>
    </div>
  )
}

export default Player
