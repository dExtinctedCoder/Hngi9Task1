import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Profile from './Profile/Profile'
import Links from './Links/Links'
import Socials from './Socials/Socials'
import Footer from './Footer/Footer'
import Contact from './Contact/Contact'
import './base.css'

const Container = () => {
  return (
    <>

      <Routes>
        <Route path="/Hngi9Task1/" element={
          [
          <div className="page__control">
            <Profile />, 
            <Links />, 
            <Socials />
          </div>
        ]}
        >
        </Route>

        <Route path="/Hngi9Task1/contact" element={<Contact />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default Container