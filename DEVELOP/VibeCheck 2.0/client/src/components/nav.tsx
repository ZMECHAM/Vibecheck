// TODO NEED TO WORK ON NAVBAR CSS

import React from "react";
import { Link } from "react-router-dom"
import "../index.css"
import { useState, useEffect } from 'react';
import auth from '../utils/auth';


// interface NavbarProps {
//     isLoggedIn: boolean;
// }

const Navbar: React.FC = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck]);


    return (
        <nav className="nav">
            <h1 className="nav-title">Vibe Check</h1>
            <div>
                {!loginCheck ? (
                    <button className='btn' type='button'>
                    <Link to='/login'>Login</Link>
                    </button>
                ) : (
                <>
                    <button className='btn' type='button' onClick={() => { auth.logout();}}>Logout
                    </button>

                    <div className="nav-links">
                        <Link to="/explore" className="nav-link">
                        Explore
                        </Link>
                        <Link to="/liked-songs" className="nav-link">
                        Liked Songs
                        </Link>
                    </div>
                </>
                )}
            </div>
        </nav>
    );
};

export default Navbar