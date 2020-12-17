import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div >
      <Link to="/">Home</Link>  
      <Link to="about">About</Link>
      <Link to="product">Product</Link>
      <Link to="productitem/2">Product Item</Link>
      
    </div>
  );
}

export default Navbar;
