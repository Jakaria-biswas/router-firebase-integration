import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import app from '../../firebase.in';
import useFirebase from '../hooks/useFirebase';
import './Header.css';
const auth = getAuth(app)
const Header = () => {
        // through custom hooks
       const {handleGoogleSignOut} = useFirebase()
      const [user] = useAuthState(auth)
    return (
        <div className='header-container'>
                <nav>
                      <ul>
                        <li><NavLink end activeClassName="active" to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" to="/product">Product</NavLink></li>
                        <li><NavLink activeClassName="active" to="/register">Register</NavLink></li>
                        <li><NavLink activeClassName="active" to="/order">Order</NavLink></li>
                         <span style={{marginRight:"10px"}}>{user?.displayName && user.displayName}</span>
                        {
                             user?.uid ? <button onClick={handleGoogleSignOut} >sign out</button> :
                             <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
                        }
                      </ul>
                </nav>
        </div>
    );
};

export default Header;