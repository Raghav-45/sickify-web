import { useState } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import Music from '@/components/Cards/Music'
import PlaylistPanel from '@/components/Cards/PlaylistPanel'
import { LinearGradient } from 'expo-linear-gradient'
import SectionHeading from '@/components/Cards/SectionHeading'
import Player from '@/components/Cards/Player'

export default function Tab() {
  const insets = useSafeAreaInsets()
  const [showDropdown, setShowDropdown] = useState(false)
  function greetByTime() {
    const hour = new Date().getHours()
    const timeOfDay =
      hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening'
    return timeOfDay
  }

  return (
    <View style={{ flex: 1, paddingTop: insets.top }} className="bg-[#272727]">
      <LinearGradient colors={['#272727', '#121212']}>
        <View className="px-2 flex-row flex justify-between p-2">
          <Text className="text-white text-2xl font-bold align-middle items-center tracking-wide capitalize">
            Good {greetByTime()}!
          </Text>

          <View className="flex-none h-full w-auto">
            <View className="relative">
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => setShowDropdown(!showDropdown)}
                className="flex flex-row focus:outline-none bg-[#282828] rounded-full h-auto p-1 w-auto items-center"
              >
                <>
                  <Image
                    source="https://lh3.googleusercontent.com/a/AEdFTp7pvJ8QlLi9q9I_lHMylrsWyDuaZODMG6i2hKdH=s83-c-mo"
                    className="h-6 w-6 mr-2 rounded-full"
                    contentFit="cover"
                  />
                  <Text className="text-white font-semibold text-xs mr-1.5">
                    Raghav
                  </Text>
                  {/* <FontAwesome
                  // size={12}
                  name="chevron-down"
                  className="text-gray-900 dark:text-white transition-all mb-4"
                /> */}
                </>
              </TouchableHighlight>

              {showDropdown && (
                <View
                  // onClick={() => setShowDropdown(false)}
                  className="bg-[#282828] w-full rounded mt-1 flex items-center"
                >
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#00000000"
                    onPress={() => setShowDropdown(false)}
                  >
                    <Text className="focus:outline-none w-full text-center my-1 text-xs hover text-white">
                      Account
                    </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#00000000"
                    onPress={() => setShowDropdown(false)}
                  >
                    <Text className="focus:outline-none w-full text-center my-1 text-xs hover text-white">
                      Log Out
                    </Text>
                  </TouchableHighlight>
                </View>
              )}
            </View>
          </View>
        </View>
      </LinearGradient>

      <ScrollView className="bg-[#121212]">
        <View className="mb-4 pt-1 mx-2 gap-y-1.5">
          <View style={styles.row}>
            <View style={styles['2col']}>
              <PlaylistPanel
                name="Discover"
                image="https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj"
              />
            </View>
            <View style={styles['2col']}>
              <PlaylistPanel
                name="Zombie"
                image="https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj"
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles['2col']}>
              <PlaylistPanel
                name="Happy Mix"
                image="https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj"
              />
            </View>
            <View style={styles['2col']}>
              <PlaylistPanel
                name="Run This Town"
                image="https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj"
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles['2col']}>
              <PlaylistPanel
                name="Skull Box"
                image="https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj"
              />
            </View>
            <View style={styles['2col']}>
              <PlaylistPanel
                name="Rock n Roll"
                image="https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj"
              />
            </View>
          </View>
        </View>

        <SectionHeading name="Player Design" />
        <Player />

        <SectionHeading name="Made for Raghav" />
        <ScrollView horizontal>
          {[...Array(8)].map((elem, index) => (
            <Music
              key={index}
              image="https://picsum.photos/seed/696/3000/2000"
              name="Test"
              extra="testing"
            />
          ))}
        </ScrollView>

        <SectionHeading name="Trending" />
        <ScrollView horizontal>
          {[...Array(5)].map((elem, index) => (
            <Music
              key={index}
              image="https://picsum.photos/seed/696/3000/2000"
              name="Test"
              extra="testing"
            />
          ))}
        </ScrollView>

        <SectionHeading name="Trending" />
        <ScrollView horizontal>
          {[...Array(13)].map((elem, index) => (
            <Music
              key={index}
              image="https://picsum.photos/seed/696/3000/2000"
              name="Test"
              extra="testing"
            />
          ))}
        </ScrollView>
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
