import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  function clickHanlder() {
    //move to support page
    navigate("/support");
  }


  return (
    <div>
      <div>This is About Page.</div>
      <button onClick={clickHanlder} className='bg-gray-500 p-1 rounded'>Move to support page</button>
    </div>
  )
}

export default About;