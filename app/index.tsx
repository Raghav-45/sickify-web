import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-3xl">
        Open usp !
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}