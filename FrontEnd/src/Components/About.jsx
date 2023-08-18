import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{x:'-100vw'}}
  animate={{x:0}}
  transition={{duration:2,type:"spring"}} className='container p-5' style={{ backgroundColor: "#101E2B",color:"white", borderRadius: "10px",margin:"auto" }}>
   
    <div className='row'>
        <div className='col'>
            <h1 className='text-center p-3'>About Us</h1>
        </div>
    </div>
     <motion.div className='row mt-2'>
        <div className='col'>
            <h2 className='px-3'><b>Our Mission</b></h2>
            <h5 className='text px-3 mt-2'>At WinterStore, we aim to provide our customers with a wide range of high-quality winter clothing, footwear and accessories. We strive to offer the latest styles, at competitive prices, with excellent customer service.</h5>
        </div>
    </motion.div>
     <motion.div className='row mt-5'>
        <div className='col'>
            <h2 className='px-3'><b>Our Story</b></h2>
            <h5 className='text px-3 mt-2'>WinterStore was founded in 2022 by a group of winter sports enthusiasts who recognized a need for a dedicated online store for winter clothes. From our humble beginnings, we have grown to become one of the leading e-commerce destinations for winter enthusiasts.</h5>
        </div>
    </motion.div>
    
    </motion.div>
  )
}

export default About
