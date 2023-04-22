import '../Styles/Register.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'

const Login = ({toggleModal, modal}) => {

    return (
        <div className='login'>
        <div className='signup-container'>
        <div className='signup'>
          <h1>Log in</h1>
          <form className='signupForm'>
            <label htmlFor='username'>Username:</label>
            <input 
               type='text'
               id='username'
               autoComplete='off'
            />
            <label htmlFor='password'>Password:</label>
            <input 
               type='password'
               id='password'
            />
            <button className='btn'>Log in</button>
          </form>
          <Link to="#" className='password'>Forget Password?</Link>

        <p>
            Don't have an account?<Link to="" className='link' 
            onClick={toggleModal}>
            Sign up
            </Link>
        </p>
        </div>

        <Link to="/Ecommerce-store" className='btn back'>Back</Link>
        </div>

  {modal &&(
    <div className='modal'>
            <div className='overlay'></div>
              <div className='modal-content'>
                <Register />
                <button className='close-modal' onClick={toggleModal}>Close</button>
            </div>
          </div>
        )}

        </div>
      )
    }
    
export default Login