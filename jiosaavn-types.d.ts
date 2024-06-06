interface Image {
  quality: string
  url: string
}

interface Album {
  id: string
  title: string
  image: Image[]
  artist: string
  url: string
  type: string
  description: string
  year: string
  language: string
  songIds: string
}

interface Song {
  id: string
  title: string
  image: Image[]
  album: string
  url: string
  type: string
  description: string
  primaryArtists: string
  singers: string
  language: string
}

interface Artist {
  id: string
  title: string
  image: Image[]
  type: string
  description: string
  position: number
}

interface Playlist {
  id: string
  title: string
  image: Image[]
  url: string
  language: string
  type: string
  description: string
}

interface TopQuery {
  id: string
  title: string
  image: Image[]
  album: string
  url: string
  type: string
  description: string
  primaryArtists: string
  singers: string
  language: string
}

interface SearchResults {
  albums: {
    results: Album[]
    position: number
  }
  songs: {
    results: Song[]
    position: number
  }
  artists: {
    results: Artist[]
    position: number
  }
  playlists: {
    results: Playlist[]
    position: number
  }
  topQuery: {
    results: TopQuery[]
    position: number
  }
}

interface SearchResponse {
  success: boolean
  data: SearchResults
}
