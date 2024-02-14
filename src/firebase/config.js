import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBXOdEWSOzjRUmsF9WzOepKB-P8EKmmXwc',
  authDomain: 'partofme-979c0.firebaseapp.com',
  databaseURL: 'https://partofme-979c0-default-rtdb.firebaseio.com',
  projectId: 'partofme-979c0',
  storageBucket: 'partofme-979c0.appspot.com',
  messagingSenderId: '476952946404',
  appId: '1:476952946404:web:ab345c1e988061c6b0eef1'
}

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }
