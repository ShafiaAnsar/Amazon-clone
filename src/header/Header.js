import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../StateProvider'

// function Header() {
//     const [{basket}, dispatch] = useStateValue()
//   return (
//     <div>
//        <div className='header'>
//       <Link to= '/'>
//       <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' className='header_logo'/></Link>
//     <div className='header_search'>
//          <input type='text' className='header_searchInput' />
//          <SearchIcon className='header_searchIcon'/>
//         <div className='header_nav'>
//             <div className='header_option'>
//                 <span className='header_optionLineOne'>Hello </span>
//                 <span className='header_optionLine'>SignIn
//                 </span>

//             </div>
//             <div className='header_option'>
//                 <span className='header_optionLineOne'>Returns </span>
//                     <span className='header_optionLineTwo'>&Orders</span>
                    
//             </div>   <div className='header_option'>
//                 <span className='header_optionLineOne'>Your </span>
//                     <span className='header_optionLineTwo'>Prime</span>
//             </div>
//         </div>
//         <Link to='/checkout'>
//         <div className='header_optionBasket'>
//             <ShoppingBasketIcon />
//             <span className='header_optionLineTwo header_basketCount'> 0{basket?.lenght}
//            </span>
//         </div>
//         </Link>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Header
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
  
    const handleAuthenticaton = () => {
      // if (user) {
      //   auth.signOut();
      // }
    }
  
    return (
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
  
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
  
        <div className="header__nav">
          <Link to={!user && '/login'}>
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
              <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>
  
          <Link to='/orders'>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          
  
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
  
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Header;