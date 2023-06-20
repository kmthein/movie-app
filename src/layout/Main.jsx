import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Outlet />
    </>
  )
}

export default Main