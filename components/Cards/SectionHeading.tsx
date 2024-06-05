import { FC } from 'react'
import { Text, View } from 'react-native'

interface SectionHeadingProps {
  name: string
}

const SectionHeading: FC<SectionHeadingProps> = ({ name }) => {
  return (
    <View className="px-2 flex-row flex justify-between">
      <Text className="text-white text-2xl font-bold items-center tracking-wide capitalize">
        {name}
      </Text>
      <Text className="text-[#B3B3B3] text-xs items-center tracking-wider pr-1 pt-3 mb-1 uppercase">
        See all
      </Text>
    </View>
  )
}

export default SectionHeading
