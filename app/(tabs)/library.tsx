import Music from '@/components/Cards/Music'
import PlaylistPanel from '@/components/Cards/PlaylistPanel'
import SectionHeading from '@/components/Cards/SectionHeading'
import { FontAwesome6 } from '@expo/vector-icons'
import axios from 'axios'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
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

  async function fetchData(endpoint: string, query: string) {
    try {
      const response = await axios.get(
        `https://saavn.dev/api/${endpoint}?query=${query}`
      )
      return response.data
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error)
      throw error
    }
  }

  async function searchGlobal(query: string) {
    return await fetchData('search', query)
  }

  async function searchSong(query: string) {
    return await fetchData('search/songs', query)
  }

  async function searchArtist(query: string) {
    return await fetchData('search/artists', query)
  }

  async function searchAlbum(query: string) {
    return await fetchData('search/albums', query)
  }

  async function searchPlaylist(query: string) {
    return await fetchData('search/playlists', query)
  }

  const [data, setData] = useState<SearchResponse>()
  const searchSongs = async (query: string) => {
    try {
      const data = await searchGlobal(query)
      setData(data)
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
        {/* <View className="flex flex-row px-3 py-2">
          <View className="flex-none relative border border-[#FCFCFD]/50 rounded-full mr-3 h-9 w-9">
            <View className="flex focus:outline-none rounded-full h-full w-full items-center">
              <Image
                className="aspect-square h-full w-full rounded-full"
                source={
                  'https://lh3.googleusercontent.com/a/AEdFTp7pvJ8QlLi9q9I_lHMylrsWyDuaZODMG6i2hKdH=s83-c-mo'
                }
                alt="avatar"
              />
            </View>
          </View>
          <Text className="bg-green-400 flex-1 text-white text-2xl font-bold align-middle items-center tracking-wide capitalize">
            Your Library
          </Text>
          <TouchableOpacity
            // style={styles.tabbarItem}
            className="flex-none items-center justify-center"
            accessibilityRole="button"
            // accessibilityState={isFocused ? { selected: true } : {}}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            // onPress={onPress}
            // onLongPress={onLongPress}
          >
            <FontAwesome6 size={18} name="house" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            // style={styles.tabbarItem}
            className="flex-none items-center justify-center"
            accessibilityRole="button"
            // accessibilityState={isFocused ? { selected: true } : {}}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            // onPress={onPress}
            // onLongPress={onLongPress}
          >
            <FontAwesome6 size={18} name="house" color="white" />
          </TouchableOpacity>
        </View> */}

        <View className="flex flex-row px-3 py-2">
          <View className="flex flex-row justify-items-end text-white items-center">
            <View className="flex-none relative border border-[#FCFCFD]/50 rounded-full mr-3 h-9 w-9">
              <View className="flex focus:outline-none rounded-full h-full w-full items-center">
                <Image
                  className="aspect-square h-full w-full rounded-full"
                  source={
                    'https://lh3.googleusercontent.com/a/AEdFTp7pvJ8QlLi9q9I_lHMylrsWyDuaZODMG6i2hKdH=s83-c-mo'
                  }
                  alt=""
                />
              </View>
            </View>
            <View className="flex-auto align-bottom my-auto mr-2 w-auto">
              <Text className="text-2xl font-semibold text-white">
                Your Library
              </Text>
            </View>
            <View className="flex flex-row gap-x-5 ml-auto bg-red-400">
              {/* <Search className='h-6 w-6' />
              <CreatePlaylistDialog /> */}

              <TouchableOpacity
                // style={styles.tabbarItem}
                className="items-center justify-center h-6 w-6"
                accessibilityRole="button"
                // accessibilityState={isFocused ? { selected: true } : {}}
                // accessibilityLabel={options.tabBarAccessibilityLabel}
                // testID={options.tabBarTestID}
                // onPress={onPress}
                // onLongPress={onLongPress}
              >
                <FontAwesome6 size={18} name="magnifying-glass" color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                // style={styles.tabbarItem}
                className="items-center justify-center h-6 w-6"
                accessibilityRole="button"
                // accessibilityState={isFocused ? { selected: true } : {}}
                // accessibilityLabel={options.tabBarAccessibilityLabel}
                // testID={options.tabBarTestID}
                // onPress={onPress}
                // onLongPress={onLongPress}
              >
                <FontAwesome6 size={18} name="plus" color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
      <ScrollView className="bg-[#121212]">
        <View className="h-32"></View>
      </ScrollView>
    </View>
  )
}
