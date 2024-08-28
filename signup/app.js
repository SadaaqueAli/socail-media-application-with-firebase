import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "../utils/firebase.js";

document.querySelector("#submitBtn").addEventListener('click', async (event) => {

    event.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const userName = document.querySelector("#userName").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    console.log(firstName, lastName, userName, email, password, confirmPassword)



    try {
        //userCredential.user.uid---> D strcture { user: { uid } } 
        const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)
        console.log(uid, "===>uid")


        // Add a new document in collection "cities"
        await setDoc(doc(db, "users", uid), {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
        });
        //reirect to log in
        window.location.href = "../signin/signin.html";

    } catch (error) {
        console.log(error.message);
        alert(error.message)
    }
})