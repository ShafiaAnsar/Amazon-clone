import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
function Checkout() {
  return (
    <div className='checkout'>
      
    <div className='checkout_left'>
      <img className='checkout_ad' src='https://m.media-amazon.com/images/G/01/AmazonGo/Engagment/2021/NewLP2021/LPRound3August/Header_TakeIt_1500x300.jpg' alt='checkout_ad'/>
      <div>
        <h2 className='check_title'>
          Your Shopping Basket
        </h2>
        {/* BasketIcon */}
      </div>
    </div>
    <div className='checkout_right'>
      <Subtotal/>
      
    </div>
    </div>
  )
}

export default Checkout
