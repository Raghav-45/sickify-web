import { FontAwesome6 } from '@expo/vector-icons'
import { FC } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur'
import Player from './Cards/Player'

interface TabBarProps {}

const TabBar: FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  const icons = {
    index: (props: any) => (
      <FontAwesome6 size={18} name="house" color="white" {...props} />
    ),
    search: (props: any) => (
      <FontAwesome6
        size={18}
        name="magnifying-glass"
        color="white"
        {...props}
      />
    ),
    library: (props: any) => (
      <FontAwesome6 size={18} name="bookmark" color="white" {...props} />
    ),
  }
  return (
    <BlurView
      intensity={5}
      experimentalBlurMethod="dimezisBlurView"
      tint="dark"
      style={styles.tabbarmain}
    >
      <Player />
      <View style={styles.tabbar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          if (['_sitemap', '+not-found'].includes(route.name)) return null
          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <TouchableOpacity
              key={route.name}
              style={styles.tabbarItem}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              {icons[route.name]({
                color: isFocused ? 'white' : 'gray',
              })}
              {/* <Text style={{ color: isFocused ? 'black' : '#222' }}>{label}</Text> */}
            </TouchableOpacity>
          )
        })}
      </View>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  tabbarmain: {
    flexDirection: 'column',
    bottom: 0,
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00000040',
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TabBar
