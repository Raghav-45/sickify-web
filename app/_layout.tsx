import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as NavigationBar from 'expo-navigation-bar'
import TabLayout from './(tabs)'
import OnBoarding from './screens/OnBoarding'

const Stack = createNativeStackNavigator()

export default function Layout() {
  NavigationBar.setBackgroundColorAsync('#000000E6')
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
          component={TabLayout}
        />
        <Stack.Screen
          name="OnBoarding"
          options={{ headerShown: false }}
          component={OnBoarding}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <Stack>
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    // </Stack>
  )
}
