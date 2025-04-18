import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from "react-router";
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <div className=''>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout;