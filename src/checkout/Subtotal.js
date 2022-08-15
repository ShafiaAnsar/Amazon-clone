import React from 'react'
import './Subtotal.css'
import { useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../StateProvider'
import { getBasketTotal } from "../reducer";
function Subtotal() {
  const navigate = useNavigate()
  const [{ basket, user }, dispatch] = useStateValue();
  return ( 
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value)=>(
        <>
        <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
        <small className='subtotal_gift'> 
        <input type='checkbox'/>This order contains a gift
        </small>
        </>

      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal

