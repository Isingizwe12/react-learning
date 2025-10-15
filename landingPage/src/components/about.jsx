import React from 'react'
import { Link } from 'react-router-dom'
// import Navbar from './navbar'

export default function About() {
  return (
    <div>
      {/* <Navbar/> */}

      <section>
        <h1 className=''>About Us</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis itaque pariatur assumenda in, quod molestias placeat iste porro explicabo magni 
            et beatae quas perspiciatis excepturi cupiditate eum natus ducimus aut.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt unde illo quibusdam ipsum fuga cum libero porro laborum, 
            modi deserunt aperiam velit quas magnam. Natus consequatur impedit veniam minima ipsa?</p>
            <button className='bg-blue-500 text-white py-2 px-2 cursor-pointer rounded mt-4'><Link to="/">Home</Link></button>
      </section>
    </div>
  )
}
