import React from 'react'
import AvatarBadge from './AvatarBadge'

export const HomePageGreeting = () => {
  const greetByTime = () => {
    const hour = new Date().getHours()
    return hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening'
  }
  return (
    // <div className='flex text-white h-auto w-full p-2 bg-gradient-to-b from-[#272727] to-dark/80 sticky top-0'>
    <div className='flex text-white h-auto w-full p-2 bg-gradient-to-b from-[#272727] to-black/80 sticky inset-x-0 top-0 z-10'>
      <div className='flex-1 text-2xl font-bold align-middle items-center tracking-wide'>
        <h1>Good {greetByTime()}!</h1>
      </div>
      <AvatarBadge image='/icon-192x192.png' name='Raghav' />
    </div>
  )
}
