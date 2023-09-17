// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAmmnwZjM1L2BlVhjZIHncNpiXn4_e_Exs',
  authDomain: 'sickify-web.firebaseapp.com',
  projectId: 'sickify-web',
  storageBucket: 'sickify-web.appspot.com',
  messagingSenderId: '396158823169',
  appId: '1:396158823169:web:788e5e5a3ef4bc4442c900',
  measurementId: 'G-2WKJSD5W1V',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
