import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogCard from '../../components/BlogCard';
import { useUser } from '../../contexts/userContext';
const Post = (props) => {

    // const [blogs , setBlogs] = useState([]);

    

    const {user , blogs , setBlogs} = useUser();
    useEffect(()=>{

        const url = 'http://localhost:5000/blog'

        axios.get(url)
        .then((result) => {
            // console.log(result);
            setBlogs(result.data);
        }).catch((err) => {
            console.log(err);
        });
    },[blogs])


  return (
    <section  id={props.id}> 
        <h1 className='center'>Posts</h1>

        { blogs.length === 0 ? <p>No Posts Yet</p> : blogs.map((blog)=>{
            return <BlogCard key={blog._id} blog={blog}/>
        })}

<button disabled={user?.username === null }  className='btn add-btn'><i className="fa-solid fa-plus" style={{color: "#ffffff" , backgroundColor : user?.username === null && "red"}}></i></button>
    </section>
  )
}

export default Post
