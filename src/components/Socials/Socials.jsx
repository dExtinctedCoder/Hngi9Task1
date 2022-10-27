import React from 'react'
import './socials.css'
import { GithubIcon, SlackIcon } from '../Icons/Icon'


const Socials = () => {
  return (
    <div className="social__icons-div">
      <a href="#"><SlackIcon /></a>
      <a href="#"><GithubIcon /></a>
    </div>
  )
}

export default Socials