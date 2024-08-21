import React from 'react'
import Navber from './Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Home/Footer'
import Navbar from './Component/Navbar/Navbar'


const App = () => {
    return (
        <div>
        


             <Navbar></Navbar>
             <Outlet></Outlet>
             <Footer></Footer>
             
        </div>
    )
}

export default App;
