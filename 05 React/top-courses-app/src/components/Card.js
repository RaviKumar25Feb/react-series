import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';


const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    //logic here
    if(likedCourses.includes(course.id)){
      //phle se liked hua pada hai
      setLikedCourses((prev) => prev.filter( (cid) => cid !== course.id ) );
      //toast here
      toast.error("Removed like")
    }
    else{
      //phle se like nahi hai ye course
      //insert karna hai ye course liked courses me
      if(likedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      else{
        //non empty phle se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked successfully")
    }
  }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>

      <div className='relative '>
        <img src={course.image.url} />

        <div className='flex items-center justify-center absolute right-0 bottom-0 w-[40px] h-[40px] rounded-full bg-white'>
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ? <FcLike fontSize={"1.5rem"}/> : <FcLikePlaceholder fontSize={"1.5rem"} />
            }
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
          {course.description.length>100 ? 
          course.description.substr(0,100) + "..." : 
          course.description}</p>
      </div>

    </div>
  )
}

export default Card;
