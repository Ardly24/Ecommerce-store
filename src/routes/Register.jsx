import '../Styles/Register.css'
import {React, useRef, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const   USER_REGEX = /^[a-zA-A][a-zA-Z0-9-_]{3,23}$/;
const   PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = ({toggleModal}) => {
  const userRef = useRef();
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validName, setValidName ] = useState(false)
const [userFocus, setUserFocus] = useState(false)
  return (
    <div className='signup-container'>
    <div className='signup'>
      <h1>Register</h1>
      <p>Please fill in this form to create an account</p>
      <form className='signupForm'>
        <label htmlFor='username'>Username:</label>
        <input 
           type='text'
           id='username'
           autoComplete='off'
        />

        <label htmlFor='email'>Email:</label>
        <input 
           type='email'
           id='email'
           autoComplete='off'
        />

        <label htmlFor='password'>Password:</label>
        <input 
           type='password'
           id='password'
        />

        <label htmlFor='confirmPwd'>Confirm Password:</label>
        <input 
           type='password'
           id='confirmPwd'
        />
        <button className='btn'>Sign up</button>
      </form>
    </div>
    </div>
  )
}

export default Register