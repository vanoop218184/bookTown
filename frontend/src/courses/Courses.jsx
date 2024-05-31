import React from 'react'
import Course from '../components/Course.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'


function Courses() {
  return (
   <>
    <Navbar></Navbar>
   <div className='min-h-screen'><Course></Course></div>
    
    <Footer></Footer>
   </>
  )
}

export default Courses
