import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {


  const [user, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering , setIRegistering] = useState(false)

  const navigate = useNavigate();

  const reset = () => {
    setUserName('')
    setPassword('')
  }

  const login = (e) => {
    e.preventDefault();
    setIRegistering(true)

    const url = "https://blog-068m.onrender.com/auth/register";
    const data = {
      username: user,
      password: password,
    };
    axios
      .post(url, data)
      .then((result) => {
        setIRegistering(false)
        if (result.data?.UserAlreadyFound === true) {
          alert('user already found')
          reset()
          navigate('/login')
        } else {
          alert('registration successful')
          reset()
        }
      })
      .catch((err) => {
        alert('oops something went wrong')
        setIRegistering(false)
        reset()
      });
  };

  

  return (
    <div className="login-main">
      <div className="container">
        <div className="row d-flex flex-row justify-content-center">
          <div className="col-lg-6">
            <img
              height={400}
              width={400}
              src={require("../images/peernet.png")}
            />
          </div>
          <div className="col-lg-6 ">
            <h1 style={{ color: "white" }}>Register Here</h1>
            <form onSubmit={(e) => login(e)} method="post">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  name="userid"
                  onChange={(e) => setUserName(e.target.value)}
                  value={user}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
               {isRegistering ? "Registration begins..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
