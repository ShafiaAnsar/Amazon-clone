import React,{useState,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';import CheckoutProduct from '../checkout/CheckoutProduct'
import './Orders.css'
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer';

function Orders() {
  const [{basket , user},dispatch] = useStateValue()
  const navigate = useNavigate()
const Done =()=>{
  dispatch({
    type: "EMPTY_BASKET"
  })
  navigate ("/")
}
  return (
    <div  className='order'>
      
    <h1> Your Order has been placed!</h1>   
          {basket?.map(item => (
              <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  hideButton
              />
              
          ))}
          <div className='order_price'> 
          <CurrencyFormat
                    renderText={(value)=>(
                         <h3>Order Total: {value}</h3> 

                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                /></div>
           <button onClick={Done}>Buy Again</button> 

  </div>
  )
}

export default Orders
