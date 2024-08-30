import { auth, onAuthStateChanged } from "../utils/firebase.js";

//document.querySelector("#editBtn").addEventListener('click',(event)=>{
//    event.preventDefault();
  //  close.log("chal raha honn")
//})

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid,"===> uid");
    // ...
  } else {
    // User is signed out
    // ...
  }
});