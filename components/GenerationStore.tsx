import { create } from 'zustand'

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
}))
