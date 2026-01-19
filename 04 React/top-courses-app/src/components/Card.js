import React from 'react'
import { FcLike } from "react-icons/fc";

export const Card = (props) => {

  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler(id) {
    //logic
    if(likedCourses.includes(course.id)) {
      //phle se liked hua pda tha
      setLikedCourses((prev) => prev.filter(id !== course.id))
    }
  }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden '>

      <div className='relative '>
        <img src={course.image.url} />

        <div className='flex items-center justify-center absolute right-0 bottom-0 w-[40px] h-[40px] rounded-full bg-white'>
          <button onClick={clickHandler}>
            <FcLike fontSize={"1.5rem"}/>
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>{course.description}</p>
      </div>

    </div>
  )
}

export default Card;