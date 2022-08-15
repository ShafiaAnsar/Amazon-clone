import React from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
function Payment() {
    const [{basket,user}, dispatch ] = useStateValue() 
  return (
    <div className='payment'>
      <div className='payment_container'>
        {/* payment section delivery section */}
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Delivery Adress</h3>
            </div>
            <div className='payment_adress'>
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Sargodha Punjab,Pakistan </p>
            </div>   
        </div>
        {/* payment section Review section */}
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Review items and delivery</h3>
            </div>

            <div className='payment_items'>
            {basket.map(item => <CheckoutProduct 
                id={item.id}
                image={item.image}
                title={ item.title}
                price={item.price}
                rating ={item.rating}/>
                )}
            </div>
        </div>
        {/* payment section Payment  section */}
        <div className='payment_section'>
            <div className='payment_items'>
            <h3>Payment Method</h3>
            </div>
            <div className='payment_details'>
                {/* stripe magic will go here */}
                
            </div>

        </div>


      </div>
    </div>
  )
}

export default Payment
