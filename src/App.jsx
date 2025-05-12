import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'
import Home from './ui/Home'

export default function App() {
  return (
    <>


      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path='' element={<Home />} />
       

          </Route>
      </Routes>

    </>
  )
}
