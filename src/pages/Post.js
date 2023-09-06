import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogCard from '../components/BlogCard';
const Post = (props) => {

    const [blogs , setBlogs] = useState([]);
    useEffect(()=>{

        const url = 'http://localhost:5000/blog'

        axios.get(url)
        .then((result) => {
            console.log(result);
            setBlogs(result.data);
        }).catch((err) => {
            console.log(err);
        });
    },[])


  return (
    <section  id={props.id}> 
        <h1>Posts</h1>

        { blogs.length === 0 ? <p>No Posts Yet</p> : blogs.map((blog)=>{
            return <BlogCard key={blog._id} blog={blog}/>
        })}

<button className='btn add-btn'><i class="fa-solid fa-plus" style={{color: "#ffffff"}}></i></button>
    </section>
  )
}

export default Post
