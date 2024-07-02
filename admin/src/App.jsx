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

  const url = "http://localhost:4000";
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
          <Route path="/orders" element={token ? <Navigate to="/" /> : <Orders />} />
          <Route path="/list" element={token ? <Navigate to="/" /> : <List />} />
          <Route path="/add" element={token ? <Navigate to="/" /> : <Add />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
