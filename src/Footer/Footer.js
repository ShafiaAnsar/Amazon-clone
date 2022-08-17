import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-heading'>
       <a href='#navbar'>Back to top</a>
      </div>
      <div className='footer-links'>
        <div className='footer-headings'>
          <h4>Get to Know Us</h4>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Career</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Science</p>
        </div>
        <div className='footer-headings'>
          <h4>Make Money with Us</h4>
          <p>Sell products on Amazon</p>
          <p>Sell on Amazon Business</p>
          <p>Sell apps on Amazon</p>
          <p>Host an Amazon Hub</p>
          <p>Amazon Currency Converter</p> 
          
        </div>
        <div className='footer-headings'>
          <h4>Amazon Payment Products</h4>
          <p>Amazon Business Card</p>
          <p>Reload Your Balance</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  )
}

export default Footer