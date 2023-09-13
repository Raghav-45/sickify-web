'use client'

import { FC } from 'react'
import ReactPlayer from 'react-player/youtube'

interface PlaybackProps {}

const Playback: FC<PlaybackProps> = ({}) => {
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
        url={`https://music.youtube.com/watch?v=dQw4w9WgXcQ`}
        height={opts.height}
        width={opts.width}
        // playing={isPlaying}
        controls={false}
        // onBuffer={setIsBuffering(true)}
        // onBufferEnd={setIsBuffering(false)}
        // onDuration={(e) => setMusicDuration(e)}
        muted={false}
        // onProgress={(e) => {
        //   setMusicCurrentTime(e.playedSeconds)
        //   setBufferDuration(e.loadedSeconds)
        // }}
      />
    )
  } else {
    null
  }
}

export default Playback
