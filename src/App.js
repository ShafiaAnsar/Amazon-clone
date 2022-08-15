import React, { useEffect } from 'react';
import './App.css';
import Header from './header/Header'
import Home from './home/Home';
import {BrowserRouter,Routes , Route} from 'react-router-dom'
import Login from './Login/Login'
import Payment from "./checkout/Payment"
import Checkout from "./checkout/Checkout"
import {auth } from './firebase'
import { useStateValue } from './StateProvider';
import Footer from './Footer/Footer';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Navbar from './Navbar/Navbar';

const promise = loadStripe('pk_test_51LX8IGAfIMT7qjMAbOV4NGLH9SUPOhpUrTvHW1fQeXdxppW8R9q1on2YLzsLk9vLitqz2jLupdu0IsuQFP0whlYb00JHAiDKCE')
function App() {
  const [{},dispatch] =useStateValue()
   useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser)
      if(authUser){
        dispatch({
          type:"SET_USER",
          user: authUser 
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user: null 
        })
      }
    })
   }, []);
  return (
    <BrowserRouter>
    <div className="App">
  
  <Routes>
    <Route path='/login' 
    element ={<Login/>}
    />
      <Route path='/' element={<><Header/><Navbar/><Home/> <Footer/></>}/>

      <Route path='/checkout' element={<><Header /><Checkout/></>  }/>
    <Route path='/payment' element={<><Header />
    <Elements stripe={promise}>
      <Payment />
    </Elements>
    </>}/>
  </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
