import React, { useState, useEffect, createContext, useContext } from 'react'

const Context = createContext()

export const PlayerContext = () => useContext(Context)

export default function ContextProvider({ children }) {
  const [MusicName, setMusicName] = useState('random')
  const [MusicSourceURL, setMusicSourceURL] = useState('_haZC5-EVCc')
  const [ArtistName, setArtistName] = useState('random')

  const [isPlaying, setIsPlaying] = useState(false)
  const [MusicDuration, setMusicDuration] = useState('00:00')
  const [BufferDuration, setBufferDuration] = useState('00:00')
  const [MusicCurrentTime, setMusicCurrentTime] = useState('00:00')
  const [IsBuffering, setIsBuffering] = useState(true)

  const [SearchQuery, setSearchQuery] = useState('')
  const [SearchResults, setSearchResults] = useState({Tracks: [], Artists: [],})

  const [musicData, setMusicData] = useState({})
  const [musicType, setMusicType] = useState('track')

  const [TrackData, setTrackData] = useState({TrackName: 'Sickify Web', ArtistName: 'By - @aditya_raghav_45', Poster: '/icon-192x192.png', YTid: 'dQw4w9WgXcQ',})
  // const [PlayerData, setPlayerData] = useState({IsPlaying: false, TrackDuration: '00:00', TrackCurrentTime: '00:00'},)

  useEffect(() => {
    const MakeData = async () => {
      if (musicData.hasOwnProperty('videoId')) {
        console.log('Music Type - Track', musicData)
        // setTrackData({TrackName: 'Sickify Web', ArtistName: 'track', Poster: '/icon-192x192.png', YTid: 'dQw4w9WgXcQ'})
        setTrackData({TrackName: musicData.title, ArtistName: musicData.artists[0].name, Poster: musicData.thumbnails[0].url, YTid: musicData.videoId});
      }
      if (musicData.hasOwnProperty('browseId')) {
        console.log('Music Type - Album', musicData)
        const d = (await singleToTrack(musicData.browseId))
        // console.log(d)
        setTrackData({TrackName: d.tracks[0].title, ArtistName: d.tracks[0].album, Poster: d.thumbnails[0].url, YTid: d.tracks[0].videoId});
      }
    }
    MakeData()
  }, [musicData, musicType])

  async function singleToTrack(q) {
    const resp = await fetch('https://sickify-web-api.vercel.app/singletotrack?query=' + q)
    const data = await resp.json()
    return data
  }

  const SearchContent = async (q) => {
    const Result = {Tracks: [], Artists: [],}
    try {
      const resp = await fetch('https://sickify-web-api.vercel.app/search/songs?query=' + q)
      const data = await resp.json()
      Result.Tracks = data
      console.log(data)
    } catch (error) {console.log(error)}

    try {
      const resp = await fetch('https://sickify-web-api.vercel.app/search/artists?query=' + q)
      const data = await resp.json()
      Result.Artists = data
      console.log(data)
    } catch (error) {console.log(error)}

    setSearchResults(Result)
    console.log('Search Result: ', SearchResults)
  }

  useEffect(() => {
    let timerOut = setTimeout(() => { SearchQuery.length != 0 ? SearchContent(SearchQuery) : console.log(SearchQuery) }, 500)
    return () => clearTimeout(timerOut)
  }, [SearchQuery])

  const value = {
    MusicName, setMusicName,
    ArtistName, setArtistName,
    MusicSourceURL, setMusicSourceURL,
    isPlaying, setIsPlaying,
    MusicDuration, setMusicDuration,
    MusicCurrentTime, setMusicCurrentTime,
    BufferDuration, setBufferDuration,
    IsBuffering, setIsBuffering,
    SearchQuery, setSearchQuery,
    TrackData, setTrackData,
    musicData, setMusicData,
    musicType, setMusicType,
    SearchResults,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
