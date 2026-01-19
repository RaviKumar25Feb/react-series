import React from 'react'
import  {AppContext}  from '../context/AppContext';
import { useContext } from 'react';
import Spinner from './Spinner';

const Blogs = () => {
    // consuming the data
    const {posts, loading} = useContext(AppContext);

  return (
    <div>
        {
            loading ? 

            (<Spinner />) : 

            (
                posts.length === 0 ? 
                (
                    <div>
                        <p>No Post Found</p>
                    </div>
                ) : 
                (
                    posts.map((post) => (
                        <div>
                            <p className='text-red-500 text-xl'>{post.title}</p>
                            <p>
                                By <span>{post.author}</span> on <span>{post.category}</span>
                            </p>
                            <p>Posted on {post.date}</p>
                            <p>{post.content}</p>
                            <div>
                                {
                                    post.tags.map((tag) => {
                                        return <span >{`#${tag} `}</span>
                                    })
                                }
                            </div>
                        </div>
                    ))
                )
            )
        }


    </div>
  )
}

export default Blogs;
