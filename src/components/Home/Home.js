import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Home = () => {
   
       const {user} = useFirebase()

    return (
        <div>
                <h2>this home page</h2>
                <h4>Name : {user? user.displayName : "  "}</h4>

        </div>
    );
};

export default Home;