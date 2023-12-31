import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../../components/BlogCard";
import { useUser } from "../../contexts/userContext";
import NoPost from "./NoPost";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const Post = (props) => {
  const cookies = new Cookies();

  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogDescription, setNewBlogDescription] = useState("");

  const [user, setUser] = useState(cookies.get("user"));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const { blogs, setBlogs } = useUser();

  useEffect(() => {
    const url = "https://blog-068m.onrender.com/blog/";

    axios
      .get(url)
      .then((result) => {
        setBlogs(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [blogs , user?.liked]);

  const add = (e) => {
    const url = `https://blog-068m.onrender.com/blog/${user?.username}/${newBlogTitle}`;

    const data = {
      blogBody: newBlogDescription,
      blogTitle: newBlogTitle,
      userid: user?.username,
    };
    axios
      .post(url, data)
      .then((result) => {
        console.log(result);
        setBlogs([...blogs, data]);
        setNewBlogDescription("");
        setNewBlogTitle("");
        setShow(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <section id={props.id}>
      <h1 className="center">Posts</h1>

      {blogs.length === 0 ? (
        <NoPost />
      ) : (
        blogs.map((blog) => {
          return <BlogCard key={blog._id} liked={user?.liked} blog={blog} currentUser={user?.userid} />;
        })
      )}

      {user?.username && (
        <button onClick={handleShow} className="btn add-btn">
          <i className="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
        </button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="add-form-modal">
          You can make new contents here!
          <form onSubmit={(e) => add(e)} method="post">
            <div className="form-group">
              <label htmlFor="newblogtitle">New Title : </label>
              <input
                name="userid"
                onChange={(e) => setNewBlogTitle(e.target.value)}
                type="email"
                className="form-control"
                id="newblogtitle"
                aria-describedby="emailHelp"
                placeholder="Enter new titile..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Blog : </label>
              <textarea
                onChange={(e) => setNewBlogDescription(e.target.value)}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>
            </div>
            <Button variant="primary" onClick={(e) => add(e)}>
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Post;
