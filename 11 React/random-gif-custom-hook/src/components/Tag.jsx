import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../Hook/useGif';

// it is a process of api key ko lane ka from .env file
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Tag = () => {
    const [tag, setTag] = useState('');

    const {gif, loading, fetchData} = useGif(tag);

    function changeHandler(event) {
      setTag(event.target.value);
    }

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5'>

        <h1 className='mt-[15px] text-xl underline uppercase font-bold'>Random Gif</h1>

        {
            loading ? (<Spinner />) : (<img src={gif} width="450"/>)
        }

        <input 
          className='w-10/12 text-lg py-1 rounded-lg mb-[5px] flex justify-center text-center items-center p-2'
          onChange={changeHandler}
          value={tag}
        />

        <button  onClick={()=> fetchData()} className='mb-[15px] w-10/12 bg-blue-300 opacity-70 text-lg py-1 rounded-lg'>
            Generate
        </button>
        
    </div>
  )
}

export default Tag;