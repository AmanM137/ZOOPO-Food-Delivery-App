import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginPopup = () => {

    const { url, setToken, setShowLogin } = useContext(StoreContext);

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        newUrl += "/api/admin/login"

        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setData({
                email: "",
                password: ""
            })
            toast.success(response.data.message);
            setShowLogin(false);
        }
        else {
            toast.error(response.data.message);
        }
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>Login</h2>
                </div>
                <div className="login-popup-inputs">
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPopup;
