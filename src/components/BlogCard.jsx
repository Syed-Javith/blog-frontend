import React, { useState } from "react";
import { useUser } from "../contexts/userContext";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Cookies from "universal-cookie";

const BlogCard = (props) => {
  const cookies = new Cookies();

  const { blogs, setBlogs } = useUser();

  const [user, setUser] = useState(cookies.get("user"));
  const [liked , setLiked] = useState( props?.liked?.indexOf(props.blog._id) > -1 )

  const [newBlogTitle, setNewBlogTitle] = useState(props.blog.blogTitle);
  const [newBlogDescription, setNewBlogDescription] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteBlog = () => {
    const url = `https://blog-068m.onrender.com/blog/${props.blog.userid}/${props.blog.blogTitle}/`;

    axios
      .delete(url)
      .then((result) => {
        console.log(result);
        const newBlog = blogs.filter(
          (blog) => blog.blogTitle !== props.blog.blogTitle
        );
        setBlogs(newBlog);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const edit = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/blog/${props.blog.userid}/${props.blog.blogTitle}`;
    const data = {
      blogBody: newBlogDescription,
      blogTitle: newBlogTitle,
    };
    axios
      .patch(url, data)
      .then((result) => {
        console.log(result);
        setBlogs(blogs);
        setNewBlogTitle(props.blog.blogTitle);
        setNewBlogDescription("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(props.currentUser);

  const unlikeBlog = async () => {
    console.log("unlike");
    const blogid = props.blog._id;
    const userid = props.currentUser;
   
    const url = `http://localhost:5000/dislike/${userid}/${blogid}`;
    // console.log(url);

    await axios
      .post(url)
      .then((result) => {
        console.log(result);
        setLiked(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const likeBlog = async () => {
    console.log("pressed");
    const blogid = props.blog._id;
    const userid = props.currentUser;
   
    const url = `http://localhost:5000/like/${userid}/${blogid}`;
    // console.log(url);

    await axios
      .post(url)
      .then((result) => {
        console.log(result);
        setLiked(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid blog-container" style={{ width: "70%" }}>
      <div className="row">
        <h3>{props.blog.blogTitle}</h3>
        <p>{props.blog.blogBody}</p>
        <p>by {props.blog.userid}</p>
        <div className="d-flex flex-row-reverse edit-delete-btns">
          <button
            onClick={ liked ? unlikeBlog : likeBlog}
            className="btn btn-outline rounded-circle"
            style={{ border: "1px solid #d63384" }}
            disabled={ props.currentUser != null || props.currentUser != undefined ? false : true}
          >
            <i
              className={`fa-regular fa-heart ${liked && 'fa-solid'}`}
              style={{ color: "#ff00ea" }}
            ></i>
          </button>
          <button
            onClick={handleShow}
            disabled={!(user?.username === props.blog.userid)}
            className="btn btn-outline-success rounded-circle"
          >
            <i
              className="fa-solid fa-pen-to-square"
              style={{ color: "#1eff00" }}
            ></i>
          </button>
          <button
            onClick={() => deleteBlog()}
            disabled={!(user?.username === props.blog.userid)}
            className="btn btn-outline-danger rounded-circle"
          >
            <i className="fa-solid fa-trash" style={{ color: "#ff0000" }}></i>
          </button>
        </div>
      </div>

      {/* 
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Changes Here</Modal.Title>
        </Modal.Header>
        <Modal.Body className="edit-form-modal">
          You can change the contents from here!
          <form onSubmit={(e) => edit(e)} method="post">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Change Title : </label>
              <input
                name="userid"
                onChange={(e) => setNewBlogTitle(e.target.value)}
                value={newBlogTitle}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter new title..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Change Description :{" "}
              </label>
              <textarea
                onChange={(e) => setNewBlogDescription(e.target.value)}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>
            </div>
            <Button variant="primary" onClick={(e) => edit(e)}>
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BlogCard;
