import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <navbar className='navbar'>
      <div className='navbar_option'>
        <h4 className='nav_item'>Todays Deals </h4>
        <h4 className='nav_item'>Customer Service</h4>
        <h4 className='nav_item'>Registry</h4>
        <h4 className='nav_item'>Gift Cards</h4>
        <h4 className='nav_item'>Sell</h4>
      </div>
    </navbar>
  )
}

export default Navbar
