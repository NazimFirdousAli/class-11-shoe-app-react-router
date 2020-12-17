import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../Shoes.json';



function ProductItem() {
  const { id } = useParams();    //we use id becaue we use id in router.js for productitem
  console.log(id);
  console.log(Shoes[id])
  if(!Shoes[id] ){
    return(
      <h1>ProductNotFound</h1>
    )
  }
  
    return (
      <div >
        <h1>Your Product details is:</h1>
        <div>
          <h4>{Shoes[id].name}</h4>
          <img src = {Shoes[id].img} height='250' width='250'></img>
        </div>

      </div>
    );
  }
  
  export default ProductItem;