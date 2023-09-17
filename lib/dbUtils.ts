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

async function createPlaylist(playlistName: string) {
  const emptyPlaylistObject = {
    name: playlistName,
    owner: '81f07a37-d25d-474c-b029-e71e2fefc85b',
    contents: [],
  }
  const playlistDocRef = await addDoc(
    collection(db, 'playlists'),
    emptyPlaylistObject
  )
  return playlistDocRef.id
}

async function addToPlaylist(playlistId: string, whatToAdd?: any) {
  const playlistDocRef = doc(db, 'playlists', playlistId)
  await updateDoc(playlistDocRef, {
    contents: arrayUnion({ name: 'Pablo', artist: 'king', image: 'tasd' }),
  })
}

async function removeFromPlaylist(playlistId: string, whatToRemove?: any) {
  const playlistDocRef = doc(db, 'playlists', playlistId)
  await updateDoc(playlistDocRef, {
    contents: arrayRemove({ name: 'Pablo', artist: 'king', image: 'tasd' }),
  })
}

async function deletePlaylist(playlistId: string) {
  await deleteDoc(doc(db, 'playlists', playlistId))
}

export { createPlaylist, addToPlaylist, removeFromPlaylist, deletePlaylist }
