import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.in';

const auth = getAuth(app)
const RequirAuth = ({children}) => {
 
    const [user] = useAuthState(auth)
    let location = useLocation()
    if(!user){
           return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return (
        children
    );
};

export default RequirAuth;