import React from 'react'
import { Link } from 'react-router-dom'
import './links.css'
import { linkInfo } from '../../assets/Data'

const Links = () => {

  return (
    <ul className="links__control">
      <li><a id='slack' style={{display: "none",}}>dEx</a></li>
      {
        linkInfo.map(({id, href, subText, asLink, to}) => {

          if (asLink) {
            return <li key={id}><Link to={to ? to : ''} target="_blank" id={id}>{subText}</Link></li>
          }

          return <li key={id}><a href={href ? href : null} target="_blank" id={id}>{subText}</a></li>
        })
      }
    </ul>
  )
}

export default Links