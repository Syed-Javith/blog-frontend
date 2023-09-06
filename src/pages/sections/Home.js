import React, { useEffect } from 'react'
import HomeLink from '../../components/HomeLink'
import { Link } from 'react-router-dom'
import { useUser } from '../../contexts/userContext'
import axios from 'axios'

const Home = (props) => {

  const { user  , setUser } = useUser();

  // useEffect(()=>{
  //   user = useUser();
  // },[user]);

  const logout = ()=>{
    const url = "http://localhost:5000/auth/logout/"

    axios.post(url)
    .then((result) => {
      alert("logged out successfully");
      setUser(null);
    }).catch((err) => {
      console.log(err);
    });
  }

  

  return (
    <section id={props.id}>
      {/* <h1>{ user && user.username }</h1> */}
        <div className='home'>
      <div className='container-fluid'>
      <div className='row d-flex flex-row'>
      <div className='col-lg-6 mr-auto'>
      
        <div className='container head-container'>
        <h1>RSJ Blogss</h1>
        <hr className='hr'/>
         <div >
         <h2>Let's Go , <br></br> create and <br/> share ideas</h2>
          <p>innovate with us</p>

        <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sed mollitia quam magnam aspernatur dolore fugit rem quae, pariatur iure sapiente earum, eveniet nobis reprehenderit ratione repellendus. Culpa, facere accusantium!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sed mollitia quam magnam aspernatur dolore fugit rem quae, pariatur iure sapiente earum, eveniet nobis reprehenderit ratione repellendus. Culpa, facere accusantium!
Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          
         {/* <h2>Let's Go , <br></br> create and <br/> share ideas</h2>
          <p>innovate with us</p> */}
         </div>
        </div>
      </div>

      <div className='col-lg-6' >
        <div className='d-flex flex-row-reverse'>
        { user == null || user?.username == null ? 
        <>
        <Link to='/login' className='btn btn-outline-light home-btns'>Login</Link>
        <Link className='btn btn-outline-light home-btns'>Regiter</Link>
        </> : 
        <>
        <p className='username'>{user?.username}</p>
        <a onClick={logout} className='btn btn-outline-light home-btns'>logout</a>  
        </>
        }
        </div>
        <div className='d-flex flex-row-reverse'>
        <HomeLink refer="#about-us" title="About Us"/>
        <HomeLink refer="#posts" title="Posts"/>
        <HomeLink refer="#" title="Home"/>
        </div>
        <div className='right-home'>

        </div>
      </div>
    </div>
    </div>
   </div>
    </section>
  )
}

export default Home
