import React from 'react'
import './profile.css'
import { ShareIconDesktop, ShareIconMobile } from '../Icons/Icon'
import IMG from '../../assets/Me.jpg'

const Profile = () => {
  return (
    <section className="profile__section">

      <div className="profile__icon">
        <div>
          <ShareIconMobile/>
          <ShareIconDesktop/>
        </div>
        <span id='icon__label'>Share Link</span>
      </div>

      <div className="profile__img-div">
        <img src={IMG} alt="Profile picture" id="profile__img"/>
      </div>

      <h3 id="profile__name">Jamiu Salaudeen</h3>

    </section>
  )
}

export default Profile