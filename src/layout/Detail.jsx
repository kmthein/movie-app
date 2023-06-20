import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Detail = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default Detail