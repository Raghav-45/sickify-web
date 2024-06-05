import { FontAwesome6 } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { FC, useState } from 'react'
import { Text, View } from 'react-native'

interface PlayerProps {
  image?: string
  name?: string
  extra?: string
}

const Player: FC<PlayerProps> = ({ name, image, extra }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <View className="px-2 pt-2">
      <View className="relative flex flex-row h-14 w-full p-2 bg-white/10 align-middle items-center overflow-hidden rounded-xl backdrop-blur-lg transition-all">
        <Image
          className="flex-none aspect-square h-full w-auto shadow-[0_4px_24px_rgb(0,0,0,50%)] overflow-hidden"
          source={image ?? 'https://sickify-web.vercel.app/icon-192x192.png'}
          contentFit="cover"
        />
        <View className="flex flex-1 flex-col ml-2 text-left align-middle">
          <Text className="text-white text-sm font-semibold">
            {name ?? 'Sickify'}
          </Text>
          <Text className="text-white text-xs">
            {extra ? extra : 'By - @raghav_aditya_45'}
          </Text>
        </View>
        <View className="flex flex-none flex-col order-last h-full justify-center items-center aspect-square">
          {true ? (
            // <Icons.Pause
            //   className="text-white h-5 w-5"
            //   onClick={() => {
            //     setIsPlaying(false)
            //   }}
            // />
            <FontAwesome6 size={18} name="bookmark" color="white" />
          ) : (
            // <Icons.Play
            //   className="text-white h-5 w-5"
            //   onClick={() => {
            //     setIsPlaying(true)
            //   }}
            // />
            <FontAwesome6 size={18} name="house" color="white" />
          )}
        </View>

        {/* <View
          className="absolute h-[3px] bottom-0 left-0 mx-1 z-10 rounded-full bg-white/20 w-[0%] transition-all delay-0 duration-300 ease-in-out"
          style={{ width: `${(currentloaded / trackLength) * 100}%` }}
        ></View>
        <View
          className="absolute h-[3px] bottom-0 left-0 mx-1 z-20 rounded-full bg-green-500 w-[0%] transition-all delay-0 duration-300 ease-in-out"
          style={{ width: `${(currentPlayed / trackLength) * 100}%` }}
        ></View> */}
      </View>
    </View>
  )
}

export default Player
