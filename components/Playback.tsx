'use client'

import { FC } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useGenerationStore } from './GenerationStore'

interface PlaybackProps {}

const Playback: FC<PlaybackProps> = ({}) => {
  const {
    videoId,
    isPlaying,
    setIsPlaying,
    setIsLoading,
    setTrackLength,
    setCurrentPlayed,
    setCurrentloaded,
  } = useGenerationStore()
  // const {
  //   TrackData,
  //   MusicSourceURL,
  //   isPlaying,
  //   setIsPlaying,
  //   setMusicDuration,
  //   setMusicCurrentTime,
  //   setBufferDuration,
  //   IsBuffering,
  //   setIsBuffering,
  // } = PlayerContext()

  const opts = {
    height: '24px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  if (typeof window !== undefined) {
    return (
      // Load the YouTube player
      <ReactPlayer
        style={{ display: 'none' }}
        url={`https://music.youtube.com/watch?v=${videoId ?? 'dQw4w9WgXcQ'}`}
        height={opts.height}
        width={opts.width}
        playing={isPlaying ?? false}
        controls={false}
        muted={false}
        loop={false}
        volume={1}
        onBuffer={() => setIsLoading(true)}
        onBufferEnd={() => setIsLoading(false)}
        onDuration={(e) => setTrackLength(e)}
        onProgress={(e) => {
          setCurrentPlayed(e.playedSeconds)
          setCurrentloaded(e.loadedSeconds)
        }}
        onReady={() => {
          console.log('Song is ready')
          setIsPlaying(true)
        }}
        onStart={() => {
          console.log('started')
          setIsPlaying(true)
        }}
        onPlay={() => {
          console.log('played')
          setIsPlaying(true)
        }}
        onPause={() => {
          console.log('paused')
          setIsPlaying(false)
        }}
        onEnded={() => {
          console.log('ended')
          setIsPlaying(false)
        }}
      />
    )
  } else {
    null
  }
}

export default Playback
