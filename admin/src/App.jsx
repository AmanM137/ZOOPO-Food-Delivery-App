import React, { useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home'
import { StoreContext } from './context/StoreContext'

const App = () => {

  const url = "https://zoopo-server.onrender.com";
  const { token } = useContext(StoreContext);

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          {/*<Route path="/" element={<Navigate to="/orders" />} />*/}
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={token ? <Orders />:<Navigate to="/" /> } />
          <Route path="/list" element={token ? <List />:<Navigate to="/" /> } />
          <Route path="/add" element={token ? <Add />:<Navigate to="/" /> } />
        </Routes>
      </div>
    </div>
  )
}

export default App
