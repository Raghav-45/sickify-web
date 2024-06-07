import Music from '@/components/Cards/Music'
import PlaylistPanel from '@/components/Cards/PlaylistPanel'
import SectionHeading from '@/components/Cards/SectionHeading'
import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const arr = [
  'Animal',
  'Arijit Singh',
  'Kabir Singh',
  'Maroon 5',
  'King',
  'Marshmello',
  'Vishal Mishra',
]

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

shuffleArray(arr)

export default function Tab() {
  const insets = useSafeAreaInsets()
  const [searchInput, setSearchInput] = useState<string>(arr[0])
  function greetByTime() {
    const hour = new Date().getHours()
    const timeOfDay =
      hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening'
    return timeOfDay
  }

  class MusicApi {
    private baseUrl: string

    constructor() {
      this.baseUrl = 'https://saavn.dev/api'
    }

    private async fetchData(endpoint: string, query: string) {
      try {
        const response = await axios.get(
          `${this.baseUrl}/${endpoint}?query=${query}`
        )
        return response.data
      } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error)
        throw error
      }
    }

    public async searchGlobal(query: string) {
      return await this.fetchData('search', query)
    }

    public async searchSong(query: string) {
      return await this.fetchData('search/songs', query)
    }

    public async searchArtist(query: string) {
      return await this.fetchData('search/artists', query)
    }

    public async searchAlbum(query: string) {
      return await this.fetchData('search/albums', query)
    }

    public async searchPlaylist(query: string) {
      return await this.fetchData('search/playlists', query)
    }
  }

  const [data, setData] = useState<SearchResponse>()
  const searchSongs = async (query: string) => {
    try {
      const response = await axios.get(
        `https://saavn.dev/api/search?query=${query}`
      )
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    searchSongs(searchInput ?? arr[0])
  }, [searchInput])
  return (
    <View style={{ flex: 1, paddingTop: insets.top }} className="bg-[#272727]">
      <LinearGradient colors={['#272727', '#121212']}>
        <View className="px-2 flex-row flex justify-between p-2">
          <Text className="text-white text-2xl font-bold align-middle items-center tracking-wide capitalize">
            Search
          </Text>
        </View>
        <View className="flex text-white h-auto w-full p-2 pt-0">
          <TextInput
            placeholder="Search..."
            placeholderTextColor="white"
            className="w-full flex-auto h-10 rounded-2xl pl-4 text-white bg-white/20 outline-none"
            value={searchInput}
            // onChange={(value) => setSearchInput(value as string)}
            onChangeText={(value) => setSearchInput(value)}
            keyboardType="web-search"
          />
        </View>
      </LinearGradient>
      <ScrollView className="bg-[#121212]">
        {data?.data && (
          <>
            <SectionHeading name="Top Query" />
            <ScrollView horizontal>
              {data.data.topQuery.results.map((elem, index) => (
                <Music
                  key={index}
                  image={elem.image[elem.image.length - 1].url}
                  name={elem.title}
                  extra={elem.type}
                />
              ))}
            </ScrollView>
          </>
        )}

        {data?.data && (
          <>
            <SectionHeading name="songs" />
            <ScrollView horizontal>
              {data.data.songs.results.map((elem, index) => (
                <Music
                  key={index}
                  image={elem.image[elem.image.length - 1].url}
                  name={elem.title}
                  extra={elem.primaryArtists}
                />
              ))}
            </ScrollView>
          </>
        )}

        {data?.data && (
          <>
            <SectionHeading name="Albums" />
            <ScrollView horizontal>
              {data.data.albums.results.map((elem, index) => (
                <Music
                  key={index}
                  image={elem.image[elem.image.length - 1].url}
                  name={elem.title}
                  extra={elem.artist}
                />
              ))}
            </ScrollView>
          </>
        )}

        {data?.data && (
          <>
            <SectionHeading name="Artists" />
            <ScrollView horizontal>
              {data.data.artists.results.map((elem, index) => (
                <Music
                  key={index}
                  image={elem.image[elem.image.length - 1].url}
                  name={elem.title}
                  extra={elem.description}
                />
              ))}
            </ScrollView>
          </>
        )}
        <View className="h-32"></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    columnGap: 6,
  },
  '1col': {
    flex: 1,
  },
  '2col': {
    flex: 2,
  },
  '3col': {
    flex: 3,
  },
  '4col': {
    flex: 4,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
