import './App.css';
import Header from './header/Header'
import Home from './home/Home';
import {BrowserRouter,Routes , Route} from 'react-router-dom'
import Checkout from "./checkout/Checkout"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
  <Routes>
      <Route path='/' element={(<Header/>,<Home/>)}/>
      <Route path='/checkout' element={<Checkout/>}/>
  </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
