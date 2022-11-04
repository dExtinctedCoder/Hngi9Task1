import React, { useState, useEffect, useReducer, createRef } from 'react'
import './contact.css'
import useInput from '../hooks/useInput'


const initError = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
}

const reducer = (currentState, action) => {
  switch (action.type) {
    case "SET__FIRSTNAME":
      return {
        ...currentState,
          firstName: action.payload,
      }

    case "SET__LASTNAME":
      return {
        ...currentState,
        lastName: action.payload,
      }

    case "SET__EMAIL":
      return {
        ...currentState,
        email: action.payload,
      };

    case "SET__MESSAGE":
      return {
        ...currentState,
        message: action.payload,
      }
    
    case "RESET":
      return initError

    default:
      return currentState
  }
}


const Contact = () => {
  
  const user = "dEx"

  const [firstNameState, setFirstNameValue] = useInput("text")
  const [lastNameState, setlastNameValue] = useInput("text")
  const [emailState, setEmailValue] = useInput("email")
  const [messageState, setMessageValue] = useInput("")

  const [successMsg, setSuccessMsg] = useState(false)
  const [checkbox, setCheckbox] = useState(true)
  const [errorState, dispatch] = useReducer(reducer, initError)
  
  
  function handleInput(elem, val, dispatchVal) {
    let setTargetState;

    switch(val) {
      case "FIRSTNAME":
        setTargetState = setFirstNameValue;
        break;
        
      case "LASTNAME":
        setTargetState = setlastNameValue;
        break;
      case "EMAIL":
        setTargetState = setEmailValue;
        break;
      case "MESSAGE":
        setTargetState = setMessageValue;
        messageRef.current.classList.remove("invalid")

        break;

      }
      
      setTargetState(elem.target.value)
      if (elem.target.value.length) {
        dispatch({type: dispatchVal, payload: ""})
      }

   }
          
  const firstNameRef = createRef()
  const lastNameRef = createRef()
  const emailRef = createRef()
  const messageRef = createRef()
  const checkboxRef = createRef()
  const successRef = createRef()

  
  // useEffect(() => {
  //   setCheckbox(true)
  //   checkboxRef.current.classList.add("show")

  // }, [checkbox])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const errorDisplay = "Please enter "
    
    if (!firstNameState.value.length) {
      firstNameRef.current.focus()
      dispatch({type: "SET__FIRSTNAME", payload: `${errorDisplay}your name`})
      return

    } else dispatch({type: "SET__FIRSTNAME", payload: ""})

    if (!lastNameState.value.length) {
      lastNameRef.current.focus()
      dispatch({type: "SET__LASTNAME", payload: `${errorDisplay}your name`})
      return

    } else dispatch({type: "SET__LASTNAME", payload: ""})

    if (!emailState.value.length) {
      emailRef.current.focus()
      dispatch({type: "SET__EMAIL", payload: `${errorDisplay}your email`})

      return

    } else dispatch({type: "SET__EMAIL", payload: ""})
    
    if (!messageState.value.length) {
      messageRef.current.focus()
      messageRef.current.classList.add("invalid")
      dispatch({type: "SET__MESSAGE", payload: `${errorDisplay}a message`})

      return

    } else  {
      dispatch({type: "SET__MESSAGE", payload: ""})
      messageRef.current.classList.remove("invalid")
    }
    
    setSuccessMsg(true)
    dispatch({type: "RESET"})
    // console.log(checkboxRef.current.checked)
    firstNameRef.current.blur()
    lastNameRef.current.blur()
    emailRef.current.blur()
    messageRef.current.blur()
    
    setTimeout(() => {
      successRef.current.focus()
    }, 300)
    setTimeout(() => {
      setSuccessMsg(false)
      setFirstNameValue("")
      setlastNameValue("")
      setEmailValue("")
      setMessageValue("")
      document.getElementById("checkbox").checked = false;
    }, 2000)
  }

  return (
    <div className=" contact__base">
       
      <input ref={successRef} type="text" readOnly style={{transform: successMsg ? "translateX(0%)" : "translateX(150%)"}} id="submit__alert" value="Submission recorded successfully!"/> 
      
      <div className=" form__heading">
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="form__control">
          <section className=" form__proper">
            <div className=" form__field">
              <label htmlFor="first-name">First name</label>
              <input ref={firstNameRef}  className=" field" {...firstNameState} onChange={e => handleInput(e, "FIRSTNAME", "SET__FIRSTNAME")} noValidate placeholder="Enter your first name" id="first_name" />
              <span className="errorMsg">{errorState.firstName}</span>
              
            </div>
            <div className=" form__field">
              <label htmlFor="last_name">Last name</label>
              <input ref={lastNameRef}  className=" field" {...lastNameState} onChange={e => handleInput(e, "LASTNAME", "SET__LASTNAME")} noValidate placeholder="Enter your last name" id="last_name" />
              <span className="errorMsg">{errorState.lastName}</span>
              
            </div>
            <div className=" form__field">
              <label htmlFor=" email">Email</label>
              <input ref={emailRef}  className=" field" {...emailState} onChange={e => handleInput(e, "EMAIL", "SET__EMAIL")} noValidate placeholder="yourname@email.com" id="email" />
              <span className="errorMsg">{errorState.email}</span>
              
            </div>
            <div className=" form__field">
              <label htmlFor="message">Message</label>
              <textarea ref={messageRef} className=" field" {...messageState} onChange={e => handleInput(e, "MESSAGE", "SET__MESSAGE")}  noValidate placeholder="Send me a message and I'll reply you as soon as possible..." id="message"></textarea>
              <span className="errorMsg">{errorState.message}</span>
            </div>
          </section>
          <section className=" supporting__text">
            <label htmlFor="checkbox">
              <input id="checkbox" name="_checkbox" type="checkbox" noValidate />
              <span ref={checkboxRef} id="custom"></span>
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