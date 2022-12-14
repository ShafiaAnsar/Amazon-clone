import React, { useState ,useEffect} from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format';
import {  useNavigate } from 'react-router-dom';
import './Payment.css'
import { db } from '../firebase'

import {Link} from 'react-router-dom'
import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import { getBasketTotal } from '../reducer';
function Payment() {
    const [{basket,user}, dispatch ] = useStateValue()
    const navigate = useNavigate()  
    const [error, setError] = useState(null)
    
    const submit = ()=>{
        db.collection("orders").add({
        basket:basket
          })
        navigate('/orders')
    }
    const handleChange =(e)=>{

        setError(e.error ? e.error.message : "");
    }
     
  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>
            Checkout {<Link to='/checkout'>{basket?.length}items</Link>}

        </h1>


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
                <form onSubmit={submit} >
                    <CardElement onChange={handleChange}/>
                <div className='payment_priceContainer'>
                <CurrencyFormat
                    renderText={(value)=>(
                         <h3>Order Total :{value}</h3> 

                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                />
                  <button onClick={submit}>
                                        <span>Buy Now</span>
                                    </button> 
                </div>
                {error && <div>{error}</div>}


            </form>
            </div>

        </div>


      </div>
    </div>
  )
}

export default Payment
