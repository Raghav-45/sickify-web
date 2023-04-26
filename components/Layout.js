import React from 'react'
import Link from 'next/link'
import { Playback } from './Playback'

import { AiFillHome } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { BiLibrary } from 'react-icons/bi'
import { YTPlayer } from './YTPlayer'

export default function Layout({ children }) {
  return (
    <div className='h-full bg-center'>

      {children}

      {/* <div className='h-[350px]'></div> */}

      <footer className='bg-gradient-to-t from-dark backdrop-blur-lg text-white sticky bottom-0'>
        <Playback/>
        <div className='grid grid-cols-3 gap-0 h-14 mx-5 text-xl text-center'>
          <Link href='/home' className='flex h-full w-full align-middle' replace><AiFillHome className='m-auto'/></Link>
          <Link href='/search' className='flex h-full w-full align-middle' replace><FiSearch className='m-auto'/></Link>
          <Link href='/library' className='flex h-full w-full align-middle' replace><BiLibrary className='m-auto'/></Link>
        </div>
        {/* <YTPlayer/> */}
      </footer>
    </div>
  )
}