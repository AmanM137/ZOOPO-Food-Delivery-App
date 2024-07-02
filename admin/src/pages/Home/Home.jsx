import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import LoginPopup from '../../components/LoginPopup/LoginPopup'
import { StoreContext } from '../../context/StoreContext'

const Home = () => {

    const { showLogin } = useContext(StoreContext);

    return (
        <>
            {showLogin
                ? <LoginPopup />
                : <div className="welcome-container">
                    <h1 className="welcome-message">Welcome to the Admin Panel!</h1>
                    <p className='emoji'>💻</p>
                </div>
            }
        </>
    )
}

export default Home;
