import React, { useState } from 'react';

import ProductDate from './ProductDate';
import './ProductItem.css';

const ProductItem = (props) => {  

  const [title, setTitle] = useState(props.title);
  // let title = props.title;


  function clickHandler() {
    // title = "Popcorn";
    setTitle("Popcorn");
    console.log("Button Clicked");
  }

  return (
    <div className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;