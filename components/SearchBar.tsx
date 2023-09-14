'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FC, useCallback, useState } from 'react'
import { debounce } from 'lodash'
import TrackList from './TrackList'
import SectionHeading from './SectionHeading'

interface SearchBarProps {}

interface Album {
  id: string
  name: string
}

interface Artist {
  id: string
  name: string
}

interface Thumbnail {
  height: number
  url: string
  width: number
}

interface Video {
  id: string
  videoType: string
}

interface FeedbackTokens {
  add: null | any
  remove: null | any
}

interface Song {
  album: Album
  artists: Artist[]
  category: string
  duration: string
  duration_seconds: number
  feedbackTokens: FeedbackTokens
  isExplicit: boolean
  resultType: string
  thumbnails: Thumbnail[]
  title: string
  videoId: string
  videoType: string
  year: null | number
}

interface SongData {
  album: Album
  artists: Artist[]
  isExplicit: boolean
  thumbnails: Thumbnail[]
  title: string
  videoId: string
}

interface Content {
  album?: Album
  artists?: Album[]
  isExplicit?: boolean
  thumbnails: Thumbnail[]
  title: string
  videoID?: string
  description?: string
  playlistID?: string
  views?: string
  browseID?: string
  year?: string
}

interface Homepage {
  contents: SongData[]
  title: string
}

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

const SearchBar: FC<SearchBarProps> = ({}) => {
  const [input, setInput] = useState<string>()

  const {
    data: queryResults,
    refetch,
    isFetched,
    isFetching,
  } = useQuery({
    queryFn: async () => {
      if (!input) return []
      const { data }: { data: Song[] } = await axios.get(
        `https://sickify-web-api.vercel.app/search/songs?query=${input}`
      )
      return data
    },
    queryKey: ['search-query'],
    enabled: false,
  })

  const request = debounce(async () => {
    refetch()
  }, 350)

  const debounceRequest = useCallback(() => {
    request()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const MusicList = ({ array }: { array: Song[] }) => {
    return array.map((elem) => (
      <TrackList
        key={elem.title}
        name={elem.title}
        artist={elem.artists}
        image={elem.thumbnails[elem.thumbnails.length - 1].url}
      />
    ))
  }

  return (
    <>
      <div className='flex text-white h-auto w-full p-2 bg-gradient-to-b from-white/10 to-dark'>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            debounceRequest()
          }}
          className='flex-auto h-8 rounded-full pl-4 text-white bg-white/20 outline-none'
          placeholder={getRandomPlaceholderText() || 'Search...'}
        />
      </div>

      {input && queryResults && (
        <>
          <SectionHeading name='Top Results' />

          {/* <div className='flex flex-row w-full overflow-x-auto text-white'> */}
          <div className='flex flex-col w-full overflow-y-auto text-white pt-2'>
            {isFetching ? (
              <p>Searching...</p>
            ) : (
              <MusicList array={queryResults} />
            )}
          </div>
        </>
      )}
    </>
  )
}

export default SearchBar