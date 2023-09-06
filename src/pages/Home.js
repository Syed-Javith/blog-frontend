import React from 'react'

const Home = (props) => {
  return (
    <section id={props.id}>
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

          
         <h2>Let's Go , <br></br> create and <br/> share ideas</h2>
          <p>innovate with us</p>
         </div>
        </div>
      </div>

      <div className='col-lg-6' >
        <div className='d-flex flex-row-reverse'>
        <a className='btn btn-outline-light home-btns'>Login</a>
        <a className='btn btn-outline-light home-btns'>Regiter</a>
        </div>
        <div className='d-flex flex-row-reverse'>
        
        <a className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover home-links' href='#about-us'>About Us</a>
        <a className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover home-links' href='#posts'>Posts</a>
        <a className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover home-links'>Home</a>
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
