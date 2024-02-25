import {initializeApp} from 'firebase/app'
import {getStorage, ref, listAll, list} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD7zqnc2t3DfS3SwGLIg0u92gpVEuSrmzc",
    authDomain: "collage-67139.firebaseapp.com",
    projectId: "collage-67139",
    storageBucket: "collage-67139.appspot.com",
    messagingSenderId: "764642983581",
    appId: "1:764642983581:web:d45315b04a5e5b04899e74"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const storge = getStorage();
//const refImages = ref(storge, "images");

export function obtenerDirectorios() {
    return listAll(ref(storge, "collage"));    
}

export function obtenerUnaFoto(e){
    return list(ref(storge, `collage/${e}`), {maxResults:1});
}

export function obtenerFotosTodas(e, n){
    return list(ref(storge, `collage/${e}`), {maxResults:n});
}






