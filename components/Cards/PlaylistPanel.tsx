import { Image } from 'expo-image'
import { FC } from 'react'
import { Text, View } from 'react-native'

interface PlaylistPanelProps {
  name: string
  image: string
}

const PlaylistPanel: FC<PlaylistPanelProps> = ({ name, image }) => {
  return (
    <View className="flex flex-row h-10 bg-[#282828] align-middle items-center overflow-hidden rounded-md">
      <Image
        style={{ width: 'auto', height: '100%' }}
        className="flex-none aspect-square"
        source={image}
        alt={name}
      />
      <Text
        numberOfLines={1}
        className="flex-1 text-xs font-semibold text-white ml-2"
      >
        {name}
      </Text>
    </View>
  )
}

export default PlaylistPanel
