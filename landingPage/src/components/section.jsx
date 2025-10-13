import React from 'react'
import './section.css'
import Image from '../assets/images/aboutImg.jpg'

function Section() {
  return (
    <div>
        <div className='content'>
      <div className='imageContainer'>
        <img src={Image}alt="tailwind logo" />
      </div>
      <div className='textContainer'>
        <h1>About Tailwind</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus vero, ad,
             enim ex aut quibusdam amet quaerat sint maxime, 
            dolorem a saepe eum! Voluptas pariatur maxime porro. Aliquid, deleniti?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda animi 
                necessitatibus et doloribus ea magnam ipsam reprehenderit esse, similique aspernatur in sint facere,   
         blanditiis sequi eum vitae voluptate perspiciatis.</p>
      </div>
      </div>
    </div>
  )
}

export default Section
