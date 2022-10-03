import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const {googleSignIn} = useFirebase()
    return (
        <div>
             <h2>Please login</h2>
             <button style={{margin:"10px"}} onClick={googleSignIn}>Google sign in</button>
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