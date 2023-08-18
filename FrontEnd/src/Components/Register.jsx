import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../css/Register.css'
import { motion } from 'framer-motion'

const Register = () => {
  const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState(false)
  const [Value, setValues] = useState([])


  const handleChange = (e) => {
    setValues({
      ...Value,
      [e.target.name]: e.target.value,

    });
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      ...Value,
      isAdmin: isAdmin
    };
    try{

      const response = await axios.post('http://localhost:5000/Register',formData)
      if(response.status === 201 ){
        toast.success("successfully registed")
        navigate('/Login')
      }
    }catch(error){
toast.error("Something went wrong")
    }
  }
  return (
    <motion.div
    initial={{x:'-100vw'}}
    animate={{x:0}}
    transition={{duration:1,type:"spring"}} className='container p-5 mt-2 mb-2 box' style={{margin:"auto", backgroundColor: "#101E2B",boxShadow: "0 15px 25px rgba(0,0,0,.6)",borderRadius:"10px"}} >
      <p className='py-2'>Registeration</p>
      <form action='/' method='post'>
        <div className='row'>
          <div className='col-md-6 col-sm-12 col-lg-6 '>
            <div class="user-box m-2">
            <TextField type="text" placeholder='First Name' onChange={handleChange} className='form-control' name='fname' />
            </div>
          </div>
          <div className='col-md-6 col-sm-12 col-lg-6 '>
            <div class="user-box m-2">
            <TextField type="text" placeholder='Last Name' onChange={handleChange} className='form-control' name='lname' />

            </div>

          </div>
        </div>
        
            <div class="user-box m-2">
            
                <TextField type="email" onChange={(e) => handleChange(e)} className='form-control ' placeholder='Email Address' name='email' />
            </div>
            <div class="user-box m-2">
              <TextField  type="password" onChange={(e) => handleChange(e)} className='form-control ' placeholder='Password' name='password' />
            </div> 
            <div class="user-box m-2">
              <TextField  onChange={(e) => handleChange(e)} placeholder="Address line 1" className='form-control' name='address'/>
            </div>
            <div className='row'>
          <div className='col-md-6 col-sm-12 col-lg-6 '>
            <div class="user-box m-2">
                <TextField  type="text" onChange={(e) => handleChange(e)} className='form-control' placeholder='City' name='city' />
            </div>
          </div>
          <div className='col-md-6 col-sm-12 col-lg-6 '>
            <div class="user-box m-2">
              <TextField   onChange={(e) => handleChange(e)} className='form-control ' name='state' placeholder='State' />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-sm-12 col-lg-6 '>
        <div class="user-box m-2">
              <TextField  type="text" onChange={(e) => handleChange(e)} fullWidth placeholder='Zip Code' name='pincode' />
            </div> 
            </div>
            <div className='col-md-6 col-sm-12 col-lg-6 '>
        <div class="user-box m-2">
              <TextField  type="text" onChange={(e) => handleChange(e)} fullWidth  placeholder='Phone Number' name='phone' />
            </div> </div></div>
            <FormGroup>
  <FormControlLabel
    control={<Checkbox checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />}
    label="Register as admin"
  />
</FormGroup>

        <Button type="submit" onClick={(e) => handleSubmit(e)} variant="contained" className='m-3' style={{ backgroundColor: "#149686" }} color="success">
          Submit
        </Button>
      </form>
      <h6 className='text-light'>Already have an account?  <Link to="/Login" style={{ textDecoration: "none", color: "white" }}>Sign In!</Link></h6>
    </motion.div>
  )
}

export default Register
