import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import './navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
    const [userId, setUserId]= useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.clear()
        dispatch(logout());
        navigate('/login');
        window.location.reload()

    };
    useEffect(() => {
        let loginUserId = localStorage.getItem("loginId")
        console.log("userId,", loginUserId);
        if(loginUserId){
            setUserId(loginUserId)
        }else{
            setUserId("")
        }
        
    }, []);
console.log(userId,"userIduserId");

    return (
        <div className='navbarDiv'>
            <nav>
                <Link to='/dashboard'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/cart'>Cart</Link>
                {userId ? (
                    <>
                        <Link to='/dashboard'>Dashboard</Link>
                        <button style={{ marginLeft: "40px" }} onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
                )}
            </nav>

        </div>
    );
};

export default Navbar;