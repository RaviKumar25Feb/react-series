import React, { useState } from 'react'
import Card from "./Card"

export const Cards = ({courses}) => {

  const [likedCourses, setLikedCourses] = useState([]);

  //it returns a list of all courses received from the api response
  function getCourses() {
    let allCourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((course) => {
        allCourses.push(course);
      })
    })
    return allCourses;
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
          getCourses().map( (course) => {
            return <Card course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
          })
        }
    </div>
  )
}

export default Cards;
