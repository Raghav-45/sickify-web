import { FontAwesome6 } from '@expo/vector-icons'
import { FC } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

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
              color: isFocused ? 'black' : 'gray',
            })}
            {/* <Text style={{ color: isFocused ? 'black' : '#222' }}>{label}</Text> */}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TabBar
