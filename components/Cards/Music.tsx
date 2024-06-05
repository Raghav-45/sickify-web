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
        <View className="relative aspect-square w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 overflow-hidden rounded-lg">
          {/* <View className="absolute playButton bg-red-500 rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0">
            {videoId && (
              <MusicPlayButton
                name={name}
                artist={artist}
                image={image}
                videoId={videoId}
              />
            )}
          </View> */}
          <Image
            source={image}
            // style={{ width: '100%', height: '100%' }}
            className="h-full w-full"
            contentFit="cover"
          />
        </View>
        <Text className="text-sm text-white font-semibold tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis text-left">
          {name}
        </Text>
        <Text className="text-xs text-[#B3B3B3] tracking-wide whitespace-nowrap overflow-x-hidden text-ellipsis pb-0">
          {extra}
        </Text>
      </View>
    </View>

    // <View>
    //   <Text className="text-sm text-white font-semibold tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis text-left">
    //     {name}
    //   </Text>
    // </View>
  )
}

export default Music
