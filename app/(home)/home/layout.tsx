import { HomePageGreeting } from '@/components/HomePageGreeting'
import Player from '@/components/Player'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <div className='px-3 py-2'>
    <div className=''>
      <HomePageGreeting />
      {children}
    </div>
  )
}
