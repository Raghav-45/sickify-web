'use client'

import MusicCard from '@/components/MusicCard'
import SearchBar from '@/components/SearchBar'
import { FC, useEffect, useState } from 'react'

interface pageProps {}

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

const searchSong = async (q: string) => {
  if (q.length == 0) return
  const res = await fetch(
    `https://sickify-web-api.vercel.app/search/songs?query=${q}`
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Page: FC<pageProps> = ({}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Song[] | null>()

  useEffect(() => {
    let timerOut = setTimeout(() => {
      searchSong(searchQuery).then((e) => {
        setSearchResults(e)
      })
    }, 450)
    return () => clearTimeout(timerOut)
  }, [searchQuery])

  return <SearchBar />
}

export default Page
