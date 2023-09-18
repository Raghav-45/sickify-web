import { db } from './firebaseClient'
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'

interface PlaylistType {
  name: string
  owner: string
  image: string | null
  contents: playlistContentType[]
}

interface playlistContentType {
  name: string
  artist: string
  image: string
  videoId: string
}

async function createPlaylist(playlistName: string) {
  const emptyPlaylistObject = {
    name: playlistName,
    owner: '81f07a37-d25d-474c-b029-e71e2fefc85b',
    image: null,
    contents: [],
  }
  const playlistDocRef = await addDoc(
    collection(db, 'playlists'),
    emptyPlaylistObject
  )
  return playlistDocRef.id
}

async function addToPlaylist(
  playlistId: string,
  whatToAdd: playlistContentType
) {
  const playlistDocRef = doc(db, 'playlists', playlistId)
  await updateDoc(playlistDocRef, {
    contents: arrayUnion(whatToAdd),
  })
}

async function removeFromPlaylist(
  playlistId: string,
  whatToRemove: playlistContentType
) {
  const playlistDocRef = doc(db, 'playlists', playlistId)
  await updateDoc(playlistDocRef, {
    contents: arrayRemove(whatToRemove),
  })
}

async function deletePlaylist(playlistId: string) {
  await deleteDoc(doc(db, 'playlists', playlistId))
}

export {
  type PlaylistType,
  type playlistContentType,
  createPlaylist,
  addToPlaylist,
  removeFromPlaylist,
  deletePlaylist,
}
