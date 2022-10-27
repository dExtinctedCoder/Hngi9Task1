import React from 'react'
import Profile from './Profile/Profile'
import Links from './Links/Links'
import Socials from './Socials/Socials'
import Footer from './Footer/Footer'
import './base.css'

const Container = () => {
  return (
    <>
      <div className="page__control">
        <Profile/>
        <Links />
        <Socials />
      </div>
      <Footer />
    </>
  )
}

export default Container