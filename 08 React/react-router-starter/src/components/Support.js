import React from 'react'
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();
  function clickHandler() {
    //move to labs page
    navigate("/labs");
  }

  function backHandler() {
    //move to back
    navigate(-1);
  }

  return (
    <div>
      <div>This is Support Page.</div>
      <button onClick={clickHandler} className='bg-gray-500 p-1 rounded'>Move to labs page</button>
      <br/><br/>
      <button onClick={backHandler} className='bg-gray-500 p-1 rounded'>Go back</button>    </div>
  )
}

export default Support;