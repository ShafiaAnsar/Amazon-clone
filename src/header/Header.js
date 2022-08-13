import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div>
       <div className='header'>
      <Link to= '/'>
      <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' className='header_logo'/></Link>
    <div className='header_search'>
         <input type='text' className='header_searchInput' />
         <SearchIcon className='header_searchIcon'/>
        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLineOne'>Hello </span>
                <span className='header_optionLine'>Sign In
                </span>

            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>Returns </span>
                    <span className='header_optionLineTwo'> & Orders</span>
                    
            </div>   <div className='header_option'>
                <span className='header_optionLineOne'>Your </span>
                    <span className='header_optionLineTwo'> Prime</span>
            </div>
        </div>
        <Link to='/checkout'>
        <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'> 0
            </span>
        </div>
        </Link>
    </div>
    </div>
    </div>
  )
}

export default Header
