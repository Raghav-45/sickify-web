import { FontAwesome6 } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { FC } from 'react'
import { Text, View } from 'react-native'

interface MusicProps {
  image: string
  name: string
  extra: string
}

const Music: FC<MusicProps> = ({ name, image, extra }) => {
  return (
    <View className="relative flex-none group p-2 w-48">
      <View className="bg-[#282828] w-full h-auto p-3 rounded-xl shadow-md">
        <View
          style={{ position: 'relative' }}
          className="relative aspect-square w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 overflow-hidden rounded-lg"
        >
          {/* <View className="absolute playButton bg-green-500 rounded-full h-9 w-9 m-2 flex right-0 bottom-0 items-center justify-center transition z-10">
            {true && (
              // <MusicPlayButton
              //   name={name}
              //   artist={artist}
              //   image={image}
              //   videoId={videoId}
              // />
              <FontAwesome6 size={14} name="play" color={'white'} />
            )}
          </View> */}
          <Image source={image} className="h-full w-full" contentFit="cover" />
        </View>
        <Text
          numberOfLines={1}
          className="text-xs text-white font-semibold tracking-widest whitespace-nowrap overflow-x-hidden text-ellipsis text-left"
        >
          {name}
        </Text>
        <Text
          numberOfLines={2}
          className="text-xs text-[#B3B3B3] tracking-wide whitespace-nowrap overflow-x-hidden text-ellipsis pb-0 h-7"
        >
          {extra}
        </Text>
      </View>
    </View>
  )
}

export default Music
