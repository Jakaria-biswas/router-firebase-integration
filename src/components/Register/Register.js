import React from 'react';


import useFirebase from '../hooks/useFirebase';

const Register = () => {
    const {googleSignIn} = useFirebase()
    return (
        <div>
                <h2>Please register</h2>
                <button style={{margin:"10px"}} onClick={googleSignIn} >Google sign in</button>
                <form action="">
                      <input type="text" placeholder='Your name' />
                      <br/>
                      <br/>
                      <input type="email" placeholder='Your email' />
                      <br/>
                      <br/>
                      <input type="password" placeholder='password' />
                      <br/>
                      <br/>
                      <input type="submit" value="Register" />
                </form>
        </div>
    );
};

export default Register;