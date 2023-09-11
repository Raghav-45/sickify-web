import PlaylistPanel from '@/components/PlaylistPanel'
import SectionHeading from '@/components/SectionHeading'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 w-full px-2 pt-2 mb-4">
        <PlaylistPanel name='Discover' image='https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj' />
        <PlaylistPanel name='Zombie' image='https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj' />
        <PlaylistPanel name='Happy Mix' image='https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj' />
        <PlaylistPanel name='Run This Town' image='https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj' />
        <PlaylistPanel name='Skull Box' image='https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj' />
        <PlaylistPanel name='Rock n Roll' image='https://lh3.googleusercontent.com/PZH8nrSG0_UE9ewl9nxelQn-19-mf6vyU0ddwsPZYJjdE2_05YkkIYfR9FCpzpC-CqTT9fQKtmP0Sw=w544-h544-l90-rj' />
      </div>

      <SectionHeading name='Made for You' />
    </>
  )
}

export default page
