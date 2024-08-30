import { auth, signInWithEmailAndPassword } from "../utils/firebase.js";

document.querySelector("#submitBtn").addEventListener('click', async (event) => {

    event.preventDefault();

    const userName = document.querySelector("#userName").value;
    const email = document.querySelector("#signinEmail").value;
    const password = document.querySelector("#signinPassword").value;

    try {
        //userCredential.user.uid---> D strcture { user: { uid } } 
        const { user: { uid } } = await signInWithEmailAndPassword(auth, email, password, userName)
        console.log(uid, "===>uid")

        //reirect to log in
        window.location.href = "../profile/profile.html";

    } catch (error) {
        console.log(error.message);
        alert(error.message)
    }
})