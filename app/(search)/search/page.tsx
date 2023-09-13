import Playback from '@/components/Playback'
import { FC } from 'react'

interface pageProps {}

function getRandomPlaceholderText(): string {
  const placeholderTexts = [
    'Search for your favorite songs...',
    "Music is the answer. What's your question?",
    'Find the perfect track...',
    'Discover new music here...',
    'Looking for a specific artist or song?',
    'Explore your musical interests...',
    'Type a song or artist name...',
    "What's on your musical mind?",
    'Search for that catchy tune...',
    'Type a melody, find your symphony...',
    'Your musical journey starts with a single search...',
    "Music is the answer. What's your question?",
  ]
  const randomIndex = Math.floor(Math.random() * placeholderTexts.length)
  return placeholderTexts[randomIndex]
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='flex text-white h-auto w-full p-2 bg-gradient-to-b from-white/10 to-dark'>
      <input
        className='flex-auto h-8 rounded-full pl-4 text-white bg-white/20 outline-none'
        placeholder={getRandomPlaceholderText() || 'Search...'}
      />
      <Playback />
    </div>
  )
}

export default page
