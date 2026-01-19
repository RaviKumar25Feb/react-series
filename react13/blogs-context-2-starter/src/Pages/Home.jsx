import React from 'react'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
        <Header />
        <div>
            <Blogs />
            <Pagination/>
        </div>
    </div>
  )
}

export default Home