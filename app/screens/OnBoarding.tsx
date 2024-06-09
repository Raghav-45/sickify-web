import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function OnBoarding() {
  return (
    <View className="flex-1 justify-center items-start bg-black/90 pl-4 gap-y-2">
      <Text className="text-white text-4xl text-left font-bold align-middle items-center tracking-wide">
        Your music app isn't taking care of you?
      </Text>
      <Text className="text-white text-2xl text-left font-bold align-middle items-center tracking-wide">
        We've got you covered!
      </Text>
      <View className="flex text-white h-auto w-full pr-4 pt-4">
        <Text className="text-white text-lg pl-1 mb-1 text-left font-bold align-middle items-center tracking-wide">
          Your Cool Nickname
        </Text>
        <TextInput
          placeholder="Type it here"
          placeholderTextColor="white"
          className="w-full flex-auto h-11 rounded-2xl pl-4 text-white bg-white/20 outline-none"
          //   value={searchInput}
          // onChange={(value) => setSearchInput(value as string)}
          //   onChangeText={(value) => setSearchInput(value)}
          keyboardType="web-search"
        />
        <TouchableOpacity
          className="items-center justify-center h-11 mt-4 w-full bg-green-500 rounded-xl"
          accessibilityRole="button"
          // accessibilityState={isFocused ? { selected: true } : {}}
          // accessibilityLabel={options.tabBarAccessibilityLabel}
          // testID={options.tabBarTestID}
          // onPress={onPress}
          // onLongPress={onLongPress}
        >
          <Text className="text-white text-lg font-bold align-middle items-center tracking-wide">
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
