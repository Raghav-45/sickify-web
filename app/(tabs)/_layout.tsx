import TabBar from '@/components/TabBar'
import { FontAwesome6 } from '@expo/vector-icons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ tabBarActiveTintColor: 'black' }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={18} name="house" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={18} name="magnifying-glass" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={18} name="bookmark" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
