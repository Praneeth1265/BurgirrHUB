import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import './App.css'
import Reservation from './Pages/Reservation/Reservation';
import Menu2 from './Pages/Menu/Menu2'
import Manager from './Pages/ManagerLogin/Manager';
import ManagerDashboard from './Pages/ManagerDashboard/ManagerDashboard';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/reservations' element={<Reservation/>}/>
          <Route path='/menu2' element={<Menu2/>}/>
          <Route path="/login" element={<Manager />} />
          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
