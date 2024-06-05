import { Stack } from 'expo-router/stack'
import * as NavigationBar from 'expo-navigation-bar'

export default function Layout() {
  NavigationBar.setBackgroundColorAsync('white')
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}
