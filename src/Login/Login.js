import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
  return (
    <div className='login'>
    <Link to= '/'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''
      className='login_logo' />
    </Link>
    <div className='login_container'>
      <h1>Sign-In</h1>
      <form>
    <h5>Email</h5>
    <input type='email' placeholder='Email'/>
    <h5>Password</h5>
    <input type='password' placeholder='Password'/>
    <button className='login_signInButton'>SignIn</button>
      </form>
      <p>By signing-in you agree to  Amazon Condition of use &Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.</p>
      <button className='login_registerButton'>Create Your Amazon account</button>
    </div>

    </div>
  )
}

export default Login
