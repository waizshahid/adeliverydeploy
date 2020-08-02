import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCMytkWsbO4vqT_A-__W8qv4PC6pOWqVdA",
    authDomain: "adeliveryimage.firebaseapp.com",
    databaseURL: "https://adeliveryimage.firebaseio.com",
    projectId: "adeliveryimage",
    storageBucket: "adeliveryimage.appspot.com",
    messagingSenderId: "1053941153019",
    appId: "1:1053941153019:web:7eb4fc3db22bfb44e6045e"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage, firebase as default }