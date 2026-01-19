import { useState } from 'react';
import './Product.css';

function Product() {

    const [value, changeValue] = useState(0);

    function minusHandler() {
        changeValue(value => value = value - 1);
    }

    function plusHandler() {
        changeValue(value => value = value + 1);
    }

    function resetHandler() {
        changeValue(value => value = 0)
    }

    return(<div className='product'>
        <div className='counter-app'>Counter Application</div>
        <div className='main-box'>
            <div className='minus' onClick={minusHandler}>-</div>
            <div className='number'>{value}</div>
            <div className='plus' onClick={plusHandler}>+</div>
        </div>
        <button className='resetBtn' onClick={resetHandler}>Reset</button>
    </div>)
}

export default Product;