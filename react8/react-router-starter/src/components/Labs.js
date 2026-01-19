import React from 'react'
import { useNavigate } from 'react-router-dom';

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    //move to about page
    navigate("/about");
  }

  return (
    <div>
      <div>This is Labs Page.</div>
      <button onClick={clickHandler} className='bg-gray-400 rounded p-1'>Move to about page</button>
    </div>
  )
}

export default Labs;