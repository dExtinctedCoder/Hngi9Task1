import React from 'react'
import './links.css'
import { linkInfo } from '../../assets/Data'

const Links = () => {

  return (
    <ul className="links__control">
      <li><a id='slack' style={{display: "none",}}>dEx</a></li>
      {
        linkInfo.map(({id, href, subText}) => {
          return <li key={id}><a href={href} target="_blank" id={id}>{subText}</a></li>
        })
      }
    </ul>
  )
}

export default Links