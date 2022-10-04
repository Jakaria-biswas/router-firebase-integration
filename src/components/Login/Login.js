import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

import app from '../../firebase.in';
const auth = getAuth(app)

const Login = () => {
    // custom hook 
    // const {googleSignIn} = useFirebase();
    
     const [signInWithGoogle, user] = useSignInWithGoogle(auth)
     const location = useLocation();
     const navigate = useNavigate();
     const from = location?.state?.from.pathname || '/'


     const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() => {
           navigate(from , {replace:true})
        })
     }



    return (
        <div>
             <h2>Please login</h2>
             <button style={{margin:"10px"}} onClick={handleGoogleSignIn}>Google sign in</button>
                <form action="">
                      <input type="email" placeholder='Your email' />
                      <br/>
                      <br/>
                      <input type="password" placeholder='password' />
                      <br/>
                      <br/>
                      <input type="submit" value="Login" />
                </form>
        </div>
    );
};

export default Login;