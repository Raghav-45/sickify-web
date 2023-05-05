import { PlayerContext } from '../contexts/ContextApi'
import { useState, useEffect } from 'react'

import { FaPlay, FaPause } from "react-icons/fa"
import { BiShuffle } from "react-icons/bi"
import { BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs"
import { FiRepeat } from "react-icons/fi"
import { YTPlayer } from './YTPlayer'

export const Playback = () => {
  const { TrackData, isPlaying, setIsPlaying, MusicDuration, MusicCurrentTime, BufferDuration } = PlayerContext()
  const [ExpandPlayer, setExpandPlayer] = useState(false)
  const [SeekPos, setSeekPos] = useState('0')
  // const [isPlaying, setIsPlaying] = useState(false)

  function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600)
    var mins = ~~((duration % 3600) / 60)
    var secs = ~~duration % 60

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = ""

    if (hrs > 0) {ret += "" + hrs + ":" + (mins < 10 ? "0" : "")}

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }

  useEffect(() => {
    setSeekPos(((MusicCurrentTime/MusicDuration)*100))
    console.log(SeekPos)
  }, [fancyTimeFormat(MusicCurrentTime)])

  // useEffect(() => {
  //   let timerOut = setTimeout(() => { ExpandPlayer ? setExpandPlayer(false) : console.log('SearchQuery') }, 4000)
  //   return () => clearTimeout(timerOut)
  // }, [ExpandPlayer])

  return (
    <div className='px-2 pt-2'>
      <div className={`relative flex flex-row h-14 w-full p-2 bg-white/10 align-middle items-center overflow-hidden rounded-xl backdrop-blur-lg transition-all`}  style={{height: ExpandPlayer ? '22rem' : '3.5rem'}}>
        {/* {!ExpandPlayer && <div onClick={(e) => {setExpandPlayer(!ExpandPlayer)}} className='flex-none aspect-square h-full shadow-[0_4px_24px_rgb(0,0,0,50%)] overflow-hidden rounded-lg' style={{height: ExpandPlayer ? '170px' : '100%'}}>
          <img src={TrackData.Poster} className='h-full w-full'/>
        </div>}
        {!ExpandPlayer && <div onClick={(e) => {setExpandPlayer(!ExpandPlayer)}} className={`flex flex-1 flex-col ml-2 align-middle`} style={{textAlign: ExpandPlayer ? 'center' : 'left'}}>
          <h1 className='text-sm text-white font-semibold'>{TrackData.TrackName}</h1>
          <h2 className='text-xs text-white'>{TrackData.ArtistName}</h2>
        </div>}
        {!ExpandPlayer && <div className='flex flex-none flex-col order-last h-full justify-center items-center aspect-square' onClick={() => setIsPlaying(!isPlaying)}>
          { isPlaying ? <FaPause/> : <FaPlay/> }
        </div>} */}

        <div onClick={(e) => {setExpandPlayer(!ExpandPlayer)}} className='flex-none aspect-square h-full shadow-[0_4px_24px_rgb(0,0,0,50%)] overflow-hidden rounded-lg' style={{height: ExpandPlayer ? '170px' : '100%'}}>
          <img src={TrackData.Poster} className='h-full w-full'/>
        </div>
        <div onClick={(e) => {setExpandPlayer(!ExpandPlayer)}} className={`flex flex-1 flex-col ml-2 align-middle`} style={{textAlign: ExpandPlayer ? 'center' : 'left'}}>
          <h1 className='text-sm text-white font-semibold'>{TrackData.TrackName}</h1>
          <h2 className='text-xs text-white'>{TrackData.ArtistName}</h2>
        </div>
        <div className='flex flex-none flex-col order-last h-full justify-center items-center aspect-square' onClick={() => setIsPlaying(!isPlaying)}>
          { isPlaying ? <FaPause/> : <FaPlay/> }
        </div>

        {/* {ExpandPlayer && <div className='flex flex-col h-full w-full'>
          <div onClick={(e) => {setExpandPlayer(!ExpandPlayer)}} className='h-full w-full px-16 pt-6'>
            <div className='w-full aspect-video'>
              <YTPlayer/>
            </div>
            <div>
              <h1 className='text-sm ml-0.5 text-white font-semibold'>{TrackData.TrackName}</h1>
              <h2 className='text-xs ml-0.5 text-white'>{TrackData.ArtistName}</h2>
            </div>
          </div>
        </div>} */}
        {/* <div className='absolute h-[3px] bottom-0 left-0 mx-1 z-10 rounded-full bg-white/20 w-[0%] transition-all delay-0 duration-300 ease-in-out' style={{ width: `${((BufferDuration/MusicDuration)*100)}%` }}></div> */}
        {/* <div className='absolute h-[3px] bottom-0 left-0 mx-1 z-20 rounded-full bg-green-500 w-[0%] transition-all delay-0 duration-300 ease-in-out' style={{ width: `${SeekPos}%` }}></div> */}
        <div className='absolute h-[3px] bottom-0 left-0 mx-1 z-10 rounded-full bg-white/20 w-[0%] transition-all delay-0 duration-300 ease-in-out' style={{ width: `${((BufferDuration/MusicDuration)*100)}%` }}></div>
        <div className='absolute h-[3px] bottom-0 left-0 mx-1 z-20 rounded-full bg-green-500 w-[0%] transition-all delay-0 duration-300 ease-in-out' style={{ width: `${SeekPos}%` }}></div>
      </div>
    </div>
  )
}