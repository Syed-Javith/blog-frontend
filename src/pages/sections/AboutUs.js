import React from 'react'
import javithImage from '../../images/javith.jpg';

const AboutUs = (props) => {
  return (
    <section id={props.id} >
        <div className='container'>
          <div className='row about-us-col'>
            <h1 className='center'>About Us</h1>
            <div className='col-lg-6 '>
                <img src={javithImage} height={200} width={200} className='about-us-pic' alt='rsj'/>
            </div>
            <div className='col-lg-6'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae, sed voluptatem quia veniam aspernatur distinctio omnis nam voluptas. Qui dolor est aliquid fugit assumenda! Et tenetur consequuntur quibusdam harum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae, sed voluptatem quia veniam aspernatur distinctio omnis nam voluptas. Qui dolor est aliquid fugit assumenda! Et tenetur consequuntur quibusdam harum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae, sed voluptatem quia veniam aspernatur distinctio omnis nam voluptas. Qui dolor est aliquid fugit assumenda! Et tenetur consequuntur quibusdam harum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae, sed voluptatem quia veniam aspernatur distinctio omnis nam voluptas. Qui dolor est aliquid fugit assumenda! Et tenetur consequuntur quibusdam harum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae, sed voluptatem quia veniam aspernatur distinctio omnis nam voluptas. Qui dolor est aliquid fugit assumenda! Et tenetur consequuntur quibusdam harum.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutUs
