import React from 'react'
import './footer.css'
import { ZuriLogo } from '../Icons/Icon'
import I4GLogo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer__control">
        <div className="zuri__logo">
          <ZuriLogo />
        </div>
        <p className="footer__text">HNG Internship 9 Frontend Task</p>
        <div className="i4g__logo">
          <img src={I4GLogo}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer