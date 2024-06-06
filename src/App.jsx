import React from 'react';
import CartCard from './Components/CartCard';
import Products from './Pages/Products';


const App = () => {
  return (
    <Products>
      <div className="container my-5">
        <CartCard/>
      </div>
    </Products>
  );
};

export default App;