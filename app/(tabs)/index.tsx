import { useState } from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Image } from 'expo-image'

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
    <View style={{ flex: 1, paddingTop: insets.top }} className="bg-green-500">
      <View className="px-2 flex-row flex justify-between">
        <Text className="text-2xl font-bold align-middle items-center tracking-wide capitalize">
          Good {greetByTime()}!
        </Text>

        <View className="flex-none h-full w-auto">
          <View className="relative">
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => setShowDropdown(!showDropdown)}
              className="flex flex-row focus:outline-none bg-gray-100 dark:bg-light rounded-full h-auto py-1 px-1 w-auto items-center"
            >
              <>
                <Image
                  source="https://picsum.photos/seed/696/3000/2000"
                  className="h-6 w-6 mr-2 rounded-full"
                  contentFit="cover"
                />
                <Text className="text-gray-900 dark:text-white font-semibold text-xs mr-1.5">
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
                className="bg-gray-100 w-full dark:bg-light rounded mt-1 flex items-center"
              >
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="#00000000"
                  onPress={() => setShowDropdown(false)}
                >
                  <Text className="focus:outline-none w-full text-center my-1 text-xs hover text-gray-900 dark:text-white">
                    Account
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="#00000000"
                  onPress={() => setShowDropdown(false)}
                >
                  <Text className="focus:outline-none w-full text-center my-1 text-xs hover text-gray-900 dark:text-white">
                    Log Out
                  </Text>
                </TouchableHighlight>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  )
}
