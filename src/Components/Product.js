import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../Shoes.json';
function Product() {
  console.log(Shoes)  
  console.log(Object.values(Shoes));
  return (
      <div className="product-Container" >
        <h1>Welcome To Products</h1>
        <div>
          {Object.keys(Shoes).map((Keyname,index)=> {
            return(
              <div key={index} >
                <Link key={Keyname} to={`/product/${Keyname}`}>
                <h3>{Shoes[Keyname].name}</h3>
                <img src={Shoes[Keyname].img} height='180' width='180'></img>
                </Link>
              </div>
            )
          })}
        </div>

      </div>
    );
  }
  
  export default Product;