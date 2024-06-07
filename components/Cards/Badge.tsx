import { FC } from 'react'
import { Text, View } from 'react-native'

// interface BadgeProps {}
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  textColor: string
  backgroundColor: string
}

const Badge: FC<BadgeProps> = ({ className, children, ...props }) => {
  return (
    <View
      className={`inline-flex items-center rounded-full transition-all mr-2 px-1.5 py-0.5 ${props.backgroundColor} ${className}`}
    >
      <Text
        className={`flex mx-1 align-middle text-xs font-medium ${props.textColor}`}
      >
        {children}
      </Text>
    </View>
  )
}

export default Badge
