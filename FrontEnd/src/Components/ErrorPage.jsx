import React from 'react'
import Lottie from 'lottie-react'
import PageNoFound from '../Images/404.json'
import { motion } from 'framer-motion'

const ErrorPage = () => {
  return (
    <motion.div
    initial={{x:'-100vw',y:"100vh"}}
  animate={{x:0,y:0}}
  transition={{duration:2,type:"spring"}} className='container-fluid text-center mt-5' style={{margin:"auto",width:"60%"}}>
<div className='row'>
  <div className='col'>
  <Lottie animationData={PageNoFound} loop={true} />

  <h3 className='text-center' style={{color:'#149686'}}>404 Error : Page Not Found</h3>
  
    </div>
    </div>
    </motion.div>
  )
}

export default ErrorPage
