import { create } from 'zustand'
import { YTMUSIC as ytmusic } from 'ytmusic'

export const ytmusicapi = new ytmusic()

interface generationState {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
  name: string | null
  setName: (name: string) => void
  artist: Artist[] | null
  setArtist: (artist: Artist[]) => void
  image: string | null
  setImage: (image: string) => void
  videoId: string | null
  setVideoId: (videoId: string) => void
  trackLength: number
  setTrackLength: (trackLength: number) => void
  currentPlayed: number
  setCurrentPlayed: (currentPlayed: number) => void
  currentloaded: number
  setCurrentloaded: (currentloaded: number) => void
}

interface Artist {
  id: string
  name: string
}

export const useGenerationStore = create<generationState>()((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  isPlaying: false,
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  name: null,
  setName: (name: string) => set({ name }),
  artist: null,
  setArtist: (artist: Artist[]) => set({ artist }),
  image: null,
  setImage: (image: string) => set({ image }),
  videoId: null,
  setVideoId: (videoId: string) => set({ videoId }),
  trackLength: 0,
  setTrackLength: (trackLength: number) => set({ trackLength }),
  currentPlayed: 0,
  setCurrentPlayed: (currentPlayed: number) => set({ currentPlayed }),
  currentloaded: 0,
  setCurrentloaded: (currentloaded: number) => set({ currentloaded }),
}))
