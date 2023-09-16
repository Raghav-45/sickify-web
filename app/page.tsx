import { default as HomepageLayout } from '../app/(home)/home/layout'
import { default as Homepage } from '../app/(home)/home/page'

export default function Home() {
  return (
    <HomepageLayout>
      <Homepage />
    </HomepageLayout>
  )
}
