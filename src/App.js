import './App.css';
import Header from './header/Header'
import Home from './home/Home';
import {BrowserRouter,Routes , Route} from 'react-router-dom'
import Login from './Login/Login'
import Checkout from "./checkout/Checkout"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
  
  <Routes>
    <Route path='/login' 
    element ={<Login/>}
    />
      <Route path='/' element={<><Header/>,<Home/></>}/>

      <Route path='/checkout' element={<><Header />,<Checkout/></>  }/>
  </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
