'use client'

import { FC, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createPlaylist } from '@/lib/dbUtils'
import toast from 'react-hot-toast'
import { Loader2Icon } from 'lucide-react'

interface CreatePlaylistDialogProps {}

const CreatePlaylistDialog: FC<CreatePlaylistDialogProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [input, setInput] = useState<string>(`${'Raghav'}'s playlist`)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  async function handleSubmit() {
    setIsLoading(true)
    try {
      const playlistId = await createPlaylist(input)
      if (playlistId) {
        toast.success('Playlist created successfully!')
      }
    } catch (error) {
      // display error message to user
      toast.error('Something went wrong with your login.')
    } finally {
      setIsLoading(false)
      setIsOpen(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button variant='outline'>Create New Playlist</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Give your playlist a name.</DialogTitle>
          {/* <DialogDescription>Give your playlist a name.</DialogDescription> */}
        </DialogHeader>

        <div className='py-2'>
          <Input
            id='playlistName'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='w-full'
          />
        </div>

        <DialogFooter>
          <Button
            disabled={isLoading}
            className='w-full'
            onClick={handleSubmit}
          >
            {isLoading && <Loader2Icon className='mr-2 h-5 w-5 animate-spin' />}
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreatePlaylistDialog
