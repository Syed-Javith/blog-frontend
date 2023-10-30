import React, { useEffect, useState } from "react";
import HomeLink from "../../components/HomeLink";
import { Link } from "react-router-dom";
import axios from "axios";
import HomeCarousel from "../../components/HomeCarousel";
import HomeContent from "../../components/Home/HomeContent";
import Cookies from "universal-cookie";

const Home = (props) => {
  const cookies = new Cookies();

  const [user, setUser] = useState(cookies.get("user"));

  console.log(user?.username);

  const logout = () => {
    const url = "https://blog-068m.onrender.com/auth/logout/";

    axios
      .post(url)
      .then((result) => {
        alert("logged out successfully");
        cookies.remove("user");
        cookies.remove("token");
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section id={props.id}>
      <div className="home">
        <div className="container-fluid">
          <div className="row d-flex flex-row">
            <div className="col-lg-6 mr-auto">
              <div className="container head-container">
                <h1>RSJ Blogss</h1>
                <hr className="hr" />
                <HomeContent />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-flex flex-row-reverse">
                {user == null || user?.username == null ? (
                  <>
                    <Link
                      to="/login"
                      className="btn btn-outline-light home-btns"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="btn btn-outline-light home-btns"
                    >
                      Regiter
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="username">{user?.username}</p>
                    <a
                      onClick={logout}
                      className="btn btn-outline-light home-btns"
                    >
                      logout
                    </a>
                  </>
                )}
              </div>
              <div className="d-flex flex-row-reverse">
                <HomeLink refer="#about-us" title="About Us" />
                <HomeLink refer="#posts" title="Posts" />
                <HomeLink refer="#" title="Home" />
              </div>
              <div className="right-home">
                <HomeCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
