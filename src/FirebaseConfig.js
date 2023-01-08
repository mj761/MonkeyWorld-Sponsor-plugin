import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore';
import { addDoc, deleteDoc, doc, onSnapshot} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW_G-jejfonYzlq55INxgB2Yqpfm7m8gE",
  authDomain: "react-plugin.firebaseapp.com",
  projectId: "react-plugin",
  storageBucket: "react-plugin.appspot.com",
  messagingSenderId: "999826645646",
  appId: "1:999826645646:web:17a6add0d5bc7374e2dfdf",
  measurementId: "G-69VRBHJTYG"
};
// initializing firebase
  initializeApp(firebaseConfig);

// init services
const db = getFirestore(initializeApp);



// collection ref
const colRef = collection(db, 'sponsors');
     

// realtime get collection data
onSnapshot(colRef, (snapshot) => {
  let sponsors = []
  snapshot.docs.forEach(doc => {
    sponsors.push({ ...doc.data(), id: doc.id })
  })
  console.log(sponsors)
})



// adding docs
const addSponsorForm = document.querySelector('.add')
addSponsorForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    sponImg: addSponsorForm.sponImg.value,
    titel: addSponsorForm.titel.value,
    description: addSponsorForm.description.value,
  })
  .then(() => {
    addSponsorForm.reset()
  })
})

// deleting docs
const deleteSponsorForm = document.querySelector('.delete')
deleteSponsorForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'sponsors', deleteSponsorForm.id.value)

  deleteDoc(docRef)
    .then(() => {
      deleteSponsorForm.reset()
    })
})
