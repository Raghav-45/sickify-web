import { PlayerContext } from '../../contexts/ContextApi'
import { FiSearch } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { BadgeButton } from '../../components/BadgeButton'

export default function LibraryPage() {
  return (
    <>
      <div className='px-3 py-2'>
        <div className='flex justify-items-end text-white items-center'>
          <div className='flex-none relative z-10 border border-[#FCFCFD]/50 rounded-full mr-[16px] h-[36px] w-[36px]'>
            <div className='flex focus:outline-none rounded-full h-full w-full items-center'>
              <img className='h-full w-full rounded-full' src={'https://lh3.googleusercontent.com/a/AEdFTp7pvJ8QlLi9q9I_lHMylrsWyDuaZODMG6i2hKdH=s83-c-mo'} alt=''></img>
            </div>
          </div>
          <div className='flex-auto align-bottom my-auto mr-[8px] w-auto'>
            <h1 className='text-[26px] font-semibold'>Your Library</h1>
          </div>
          <div className='flex-none relative z-10 rounded-full ml-[8px] h-[36px] w-[36px]'>
            <button className='flex focus:outline-none rounded-full h-full w-full items-center justify-center'>
              <FiSearch className='flex-none h-[22px] w-[22px]' />
            </button>
          </div>
          <div className='flex-none relative z-10 rounded-full ml-[8px] h-[36px] w-[36px]'>
            <button className='flex focus:outline-none rounded-full h-full w-full items-center justify-center'>
              <AiOutlinePlus className='flex-none h-[22px] w-[22px]' />
            </button>
          </div>
        </div>
      </div>

      <div className='HideScrollbar pl-3 pr-2 overflow-x-scroll'>
        <div className='h-full w-max'>
          {/* <span class="inline-block items-center text-xs font-medium w-auto mr-2 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">Default</span> */}
          {/* <span class="inline-block items-center text-xs font-medium w-auto mr-2 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800">Playlists</span> */}
          {/* <span class="inline-block items-center text-xs font-medium w-auto mr-2 px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">Artists</span> */}
          {/* <span class="inline-block items-center text-xs font-medium w-auto mr-2 px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">Albums</span> */}
          {/* <span class="inline-block items-center text-xs font-medium w-auto mr-2 px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800">Podcasts & Shows</span> */}
          {/* <span class="inline-block items-center text-xs font-medium w-auto mr-2 px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">Indigo</span> */}
          {/* <span class="inline-block items-center text-xs font-medium w-auto mr-2 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">Purple</span> */}
          {/* <span class="inline-block items-center text-xs font-medium w-auto mr-2 px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800">Pink</span> */}
          <BadgeButton name={'Default'} />
          <BadgeButton name={'Playlists'} colour={{text: 'text-gray-800', bg: 'bg-gray-100'}} />
          <BadgeButton name={'Artists'} colour={{text: 'text-red-800', bg: 'bg-red-100'}} />
          <BadgeButton name={'Albums'} colour={{text: 'text-green-800', bg: 'bg-green-100'}} />
          <BadgeButton name={'Podcasts & Shows'} colour={{text: 'text-yellow-800', bg: 'bg-yellow-100'}} />
          <BadgeButton name={'Indigo'} colour={{text: 'text-indigo-800', bg: 'bg-indigo-100'}} />
          <BadgeButton name={'Purple'} colour={{text: 'text-purple-800', bg: 'bg-purple-100'}} />
          <BadgeButton name={'Pink'} colour={{text: 'text-pink-800', bg: 'bg-pink-100'}} />
        </div>
      </div>
    </>
  )
}
