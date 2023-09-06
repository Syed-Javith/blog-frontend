import React from 'react'

const AboutUs = (props) => {
  return (
    <section id={props.id} >
        <div className='container-fluid'>
          <div className='row'>
            <div className='col about-us-col'>
                <h1 className='center'>About Us</h1>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutUs
