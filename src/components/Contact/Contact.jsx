import React, { useState, createRef } from 'react'
import './contact.css'
import useInput from '../hooks/useInput'


const Contact = () => {
  
  const user = "dEx"
  const errorDisplay = "Field cannot be empty!"

  const [firstNameState, setFirstNameValue] = useInput("text")
  const [lastNameState, setlastNameValue] = useInput("text")
  const [emailState, setEmailValue] = useInput("email")
  const [messageState, setMessageValue] = useInput("")

  const [successMsg, setSuccessMsg] = useState(false)

  const init = ''
  const [errorState, setErrorState] = useState({
    firstName: init, lastName: init, email: init, message: init,
  })

  const firstNameRef = createRef()
  const lastNameRef = createRef()
  const emailRef = createRef()
  const messageRef = createRef()

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!firstNameState.value.length) {
      firstNameRef.current.focus()
      setErrorState({...errorState, firstName: errorDisplay})
      return

    } else {
      setErrorState({
        firstName: init, lastName: init, email: init, message: init,
      })
    }

    if (!lastNameState.value.length) {
      lastNameRef.current.focus()
      setErrorState({...errorState, lastName: errorDisplay})
      return

    } else setErrorState({
      firstName: init, lastName: init, email: init, message: init,
    })

    if (!emailState.value.length) {
      emailRef.current.focus()
      setErrorState({...errorState, email: errorDisplay})
      return

    } else setErrorState({
      firstName: init, lastName: init, email: init, message: init,
    })
    
    if (!messageState.value.length) {
      messageRef.current.focus()
      messageRef.current.classList.add("invalid")
      
      setErrorState({...errorState, message: errorDisplay})
      return
    } else  {
      setErrorState({
        firstName: init, lastName: init, email: init, message: init,
      })
      messageRef.current.classList.remove("invalid")
    }
    
    console.log(errorState)
    setSuccessMsg(true)

    setErrorState({
      firstName: init, lastName: init, email: init, message: init,
    })
    
    setTimeout(() => {
      setSuccessMsg(false)
      setFirstNameValue("")
      setlastNameValue("")
      setEmailValue("")
      setMessageValue("")
    }, 2000)
  }
  
  return (
    <div className=" contact__base">
       
      <div style={{transform: successMsg ? "translateX(0%)" : "translateX(150%)"}} id="submit__alert">Submission recorded successfully!</div> 
      
      <div className=" form__heading">
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="form__control">
          <section className=" form__proper">
            <div className=" form__field">
              <label htmlFor="first-name">First name</label>
              <input ref={firstNameRef}  className=" field" {...firstNameState} noValidate placeholder="Enter your first name" id="first_name" />
              <span className="errorMsg">{errorState.firstName}</span>
              
            </div>
            <div className=" form__field">
              <label htmlFor="last_name">Last name</label>
              <input ref={lastNameRef}  className=" field" {...lastNameState} noValidate placeholder="Enter your last name" id="last_name" />
              <span className="errorMsg">{errorState.lastName}</span>
              
            </div>
            <div className=" form__field">
              <label htmlFor=" email">Email</label>
              <input ref={emailRef}  className=" field" {...emailState} noValidate placeholder="yourname@email.com" id="email" />
              <span className="errorMsg">{errorState.email}</span>
              
            </div>
            <div className=" form__field">
              <label htmlFor="message">Message</label>
              <textarea ref={messageRef} className=" field" {...messageState}  noValidate placeholder="Send me a message and I'll reply you as soon as possible..." id="message"></textarea>
              <span className="errorMsg">{errorState.message}</span>
            </div>
          </section>
          <section className=" supporting__text">
            <label htmlFor="checkbox">
              <input id="checkbox" name="_checkbox" type="checkbox" noValidate />
              <span id="custom"></span>
              <span>You agree to providing your data to {user} who may contact you.</span>
            </label>
          </section>
          <button id="button__submit" type="submit">Send message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact