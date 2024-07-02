import React, { useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const { setToken, token, setShowLogin } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setShowLogin(true);
    setToken("");
    navigate("/");
  }

  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      <div className="navbar-profile">
        <img className='profile' src={assets.profile_image} alt="" />
        <ul className="nav-profile-dropdown">
          <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
