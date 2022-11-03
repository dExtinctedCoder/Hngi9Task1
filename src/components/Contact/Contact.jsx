import React from 'react'

const Contact = () => {

  return (
    <div>
      <div className=" form-heading">
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form>
        <section className=" form__proper">
          <div className=" form__fields">
            <label htmlFor="first-name"></label>
            <input id="first_name" />
          </div>
          <div className=" form__fields">
            <label htmlFor="last_name"></label>
            <input  id="last_name" />
          </div>
          <div className=" form__fields">
            <label htmlFor=" email"></label>
            <input id="email" />
          </div>
          <div className=" form__fields">
            <label htmlFor="message"></label>
            <textarea id="message"></textarea>
          </div>
        </section>
        <section className=" supporting__text">
          <label htmlFor="checkbox">You agree to providing your data to {"dEx"} who may contact you.</label>
          <input id="checkbox" type="checkbox" />
        </section>
        <button id="button__submit" type="submit">Send message</button>
      </form>
    </div>
  )
}

export default Contact