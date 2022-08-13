import React from 'react'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
function Checkout() {
  const [{basket} , dispatch] =useStateValue()
  return (
    <div className='checkout'>
      
    <div className='checkout_left'>
      <img className='checkout_ad' src='https://m.media-amazon.com/images/G/01/AmazonGo/Engagment/2021/NewLP2021/LPRound3August/Header_TakeIt_1500x300.jpg' alt='checkout_ad'/>
      <div>
        <h2 className='check_title'>
          Your Shopping Basket
        </h2>
        {basket.map(item => <CheckoutProduct 
        id={item.id}
        image={item.image}
        title={ item.title}
        price={item.price}
        rating ={item.rating}

        />)}
       
        {/* checkout product */}
        {/* checkout product */}

      </div>
    </div>
    <div className='checkout_right'>
      <Subtotal/>
      
    </div>
    </div>
  )
}

export default Checkout
