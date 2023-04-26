import { ArtistCard } from '../../components/ArtistCard'
import { TrackList } from '../../components/TrackList'
import { PlayerContext } from '../../contexts/ContextApi'
import { useRouter } from 'next/router'

export default function SearchPage() {
  const { setTrackData, setIsPlaying, SearchQuery, setSearchQuery, SearchResults, setMusicName, setArtistName, setMusicSourceURL } = PlayerContext()
  const router = useRouter()

  return (
    <>
      <div className='flex text-white h-auto w-full px-2 pt-2 pb-2 bg-gradient-to-b from-white/10 to-dark'>
        <input className='flex-auto h-8 rounded-full pl-4 text-black' value={SearchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} placeholder='Search...'/>
      </div>

      {!SearchResults.Artists?.length == 0 && 
        <>
          <div className='flex items-center justify-between'>
            <h1 className='pl-2 text-2xl font-semibold text-white tracking-wider'>Top Results</h1>
            <h2 className='pr-4 pt-4 text-xs text-lightest uppercase tracking-wider mb-3'>See All</h2>
          </div>
          
          <div className="flex flex-row w-full overflow-x-scroll">
            {SearchResults.Artists.map((elem) => (
              <ArtistCard Name={elem.artist} Artist='{elem.title}' Image={elem.thumbnails[elem.thumbnails.length - 1].url} onPlayButton={() => router.push(`/artist/${elem.browseId}`)} />
            ))}
          </div>
        </>
      }

      {!SearchResults.Tracks?.length == 0 && 
        <div>
          {SearchResults.Tracks.map((elem) => (
            <TrackList Name={elem.title} Artist={elem.artists} Image={elem.thumbnails[elem.thumbnails.length - 1].url} onPlayButton={() => {setTrackData({TrackName: elem.title, ArtistName: elem.artists[0].name, Poster: elem.thumbnails[0].url, YTid: elem.videoId}); setIsPlaying(true);}} />
          ))}
        </div>
      }
    </>
  )
}