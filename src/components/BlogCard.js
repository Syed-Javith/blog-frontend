import React from 'react'

const BlogCard = (props) => {
    // console.log(props.blog._id);
  return (
    <div className='container-fluid blog-container' style={{ width: "70%"}}>
      <div className='row'>
        <h3>{props.blog.blogTitle}</h3>
        <p>{props.blog.blogBody}</p>
        <p>by {props.blog.userid}</p>
        <div className='d-flex flex-row-reverse edit-delete-btns'><a className='btn btn-outline-success rounded-circle'><i class="fa-solid fa-pen-to-square" style={{color: "#1eff00"}}></i></a>
        <a className='btn btn-outline-danger rounded-circle'><i class="fa-solid fa-trash" style={{color: "#ff0000"}}></i></a>
        </div>
    </div>
    </div>
  )
}

export default BlogCard
