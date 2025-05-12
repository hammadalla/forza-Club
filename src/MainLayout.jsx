import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import CustomCursor from './components/CustomCursor/CustomCursor'

export default function MainLayout() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <Outlet />


    </>
  )
}
