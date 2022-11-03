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
      <div className="page__control">

      <Routes>
        <Route path="/Hngi9Task1/" element={[<Profile key={1}/>, <Links key={2}/>, <Socials key={3}/>]}>  
          {/* <Profile/>
          <Links />
          <Socials /> */}
        </Route>

        <Route path="/Hngi9Task1/contact" element={<Contact />}/>
      </Routes>

      </div>
      <Footer />
    </>
  )
}

export default Container