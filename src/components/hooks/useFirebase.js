import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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

     useEffect(()=>{
              onAuthStateChanged(auth, user=> {
                   setUser(user)
              })

     },[])

     const handleGoogleSignOut = () => {
             signOut(auth)
             .then(result => {
                  console.log("sign out")
             })
             .catch(error => {
                  console.log(error)
             })
     }
     return{
          handleGoogleSignOut,
            googleSignIn,
            user
     }
}

export default useFirebase;