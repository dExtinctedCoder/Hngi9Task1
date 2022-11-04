import {useState} from 'react'

function useInput(type) {
  const [value, setValue] = useState('')
  // const [password, setPassword] = useState('')

  const stateControl = {
    type: type,
    value: value,
    onChange: e => setValue(e.target.value),
    // password: password,
    // setPassword: setPassword,
  }

  return [stateControl, setValue]
}

export default useInput