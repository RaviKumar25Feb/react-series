import React, { useState } from 'react';
import Card from './Card';

const Testimonial = (props) => {
    let data = props.data;
    const [index, setIndex] = useState(0);

    function leftHandler() {
      if(index <= 0) {
        setIndex(data.length - 1)
      }
      else{
        setIndex(index - 1)
      }
    }

    function rightHandler() {
      if(index >= data.length-1) {
        setIndex(0)
      }
      else{
        setIndex(index + 1)
      }
    }

    function randomHandler() {
      let index = Math.floor(Math.random() * 10)
      setIndex(index)
    }

  return (
    <div>
        <Card data = {data[index]} rightHandler = {rightHandler} leftHandler = {leftHandler} randomHandler = {randomHandler} />
    </div>
  )
}

export default Testimonial;