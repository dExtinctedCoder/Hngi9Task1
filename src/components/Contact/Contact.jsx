import React from 'react'
import './contact.css'

const Contact = () => {

  return (
    <div className=" contact__base">
      <div className=" form__heading">
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form>
        <div className="form__control">
          <section className=" form__proper">
            <div className=" form__field">
              <label htmlFor="first-name">First name</label>
              <input placeholder="Enter your first name" id="first_name" />
              <span className="errorMsg"></span>
            </div>
            <div className=" form__field">
              <label htmlFor="last_name">Last name</label>
              <input placeholder="Enter your last name" id="last_name" />
              <span className="errorMsg"></span>
            </div>
            <div className=" form__field">
              <label htmlFor=" email">Email</label>
              <input placeholder="yourname@email.com" id="email" />
              <span className="errorMsg"></span>
            </div>
            <div className=" form__field">
              <label htmlFor="message">Message</label>
              <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id="message"></textarea>
              <span className="errorMsg"></span>
            </div>
          </section>
          <section className=" supporting__text">
            <label htmlFor="checkbox">
              <input id="checkbox" name="_checkbox" type="checkbox" />
              <span id="custom"></span>
              <span>You agree to providing your data to {"dEx"} who may contact you.</span>
            </label>
          </section>
          <button id="button__submit" type="submit">Send message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact