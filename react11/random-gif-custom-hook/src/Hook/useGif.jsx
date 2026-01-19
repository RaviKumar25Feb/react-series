import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`


export const useGif = (tag) => {

  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(null);

  async function fetchData() {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
      const output = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
      // using destructuring method
      const {data} = output;
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false)
  }
  
  useEffect(() => {
      fetchData();
  }, [])

  return {gif, loading, fetchData};

}

export default useGif;