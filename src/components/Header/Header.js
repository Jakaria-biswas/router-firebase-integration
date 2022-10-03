import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Header.css';
const Header = () => {

       const {user} = useFirebase()
    return (
        <div className='header-container'>
                <nav>
                      <ul>
                        <li><NavLink end activeClassName="active" to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" to="/product">Product</NavLink></li>
                        <li><NavLink activeClassName="active" to="/register">Register</NavLink></li>
                        {
                             user.uid ? <button>sign out</button> :
                             <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
                        }
                      </ul>
                </nav>
        </div>
    );
};

export default Header;