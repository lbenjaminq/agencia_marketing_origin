import Footer from 'components/navigation/Footer/Footer'
import Navbar from 'components/navigation/Navbar/Navbar'
import React from 'react'
import { Outlet } from "react-router-dom"

export const RouterLayout: React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
