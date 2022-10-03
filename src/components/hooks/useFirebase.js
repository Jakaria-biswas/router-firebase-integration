import { useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase.in";


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {

     const [user,setUser] = useState({})


     const googleSignIn = () => {
        

           signInWithPopup(auth, googleProvider)
           .then((result) => {
                  const user = result.user;
                  setUser(user)
                  console.log(user)
           })
           .catch((error) => {
                console.log(error)
           })
     }
     return{
            googleSignIn,
            user
     }
}

export default useFirebase;