import Music from '@/components/Cards/Music'
import PlaylistPanel from '@/components/Cards/PlaylistPanel'
import SectionHeading from '@/components/Cards/SectionHeading'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Tab() {
  const insets = useSafeAreaInsets()
  const [showDropdown, setShowDropdown] = useState(false)
  function greetByTime() {
    const hour = new Date().getHours()
    const timeOfDay =
      hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening'
    return timeOfDay
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

  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  useEffect(() => {
    const arr = [
      'animal',
      'arijit singh',
      'kabir singh',
      'maroon 5',
      'king',
      'marshmello',
      'vishal mishra',
    ]
    shuffleArray(arr)
    searchSongs(arr[0])
  }, [])
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <ScrollView className="bg-[#121212]">
        <View className="h-16"></View>
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
})
