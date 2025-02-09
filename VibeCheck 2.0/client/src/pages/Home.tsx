import { useState, useEffect, useLayoutEffect } from "react";
import auth from '../utils/auth';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [loginCheck, setLoginCheck] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
    }, [loginCheck]);

    useLayoutEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };

    return (
        <>
            {
                !loginCheck ? (
                    <div className='login-notice'>
                        <h1>
                            Login to Get Started!
                        </h1>
                    </div>
                ) : (
                    navigate("/explore")
                )}
        </>
    );
};

export default Home;