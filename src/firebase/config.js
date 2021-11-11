import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDy6ggC15yONWkO-SzFXmxA2_-a8ryA9Q4',
  authDomain: 'the-dojo-site-f9818.firebaseapp.com',
  projectId: 'the-dojo-site-f9818',
  storageBucket: 'the-dojo-site-f9818.appspot.com',
  messagingSenderId: '235105602565',
  appId: '1:235105602565:web:a7e994fc710ce655f2206c',
}

// init firebasae
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
