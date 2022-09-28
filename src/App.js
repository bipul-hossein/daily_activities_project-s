import logo from './logo.svg';
import './App.css';
import Activities from './Components/Activities/Activities';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  const handleAddToCart = (exerciseTime) => {
    const newCart = [...cart, exerciseTime]
    setCart(newCart)
  }
  return (
    <div className="App">
      <div className='container'>
        <Activities handleCart={handleAddToCart}></Activities>
        <Cart exeTime={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
