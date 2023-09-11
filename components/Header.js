import React from 'react'
import { AvatarIcon } from './Avatar'

export const Header = () => {
  const greetByTime = () => {
    const d = new Date()
    const hour = d.getHours()
    if (hour < 12) { return 'Morning' }
    if (hour < 18) { return 'afternoon' }
    return 'Evening'
  }
  return (
    <div className='flex text-white h-auto w-full px-2 pt-2 pb-2 bg-gradient-to-b from-[#272727] to-dark/80 sticky top-0'>
      <div className='flex-1 text-2xl font-bold align-middle items-center tracking-wide'>
        <h1>Good {greetByTime()}!</h1>
      </div>
      <AvatarIcon/>
}