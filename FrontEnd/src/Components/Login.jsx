import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Login.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AppContext } from './context'
import { motion } from 'framer-motion'


const Login = () => {
    const { setIsLoggedIn, setUserName, setIsAdmin, setUserId } = useContext(AppContext)
    const [Value, setValues] = useState([])
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({
            ...Value,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        axios.defaults.baseURL = "http://localhost:5000";
        e.preventDefault()
        try {
            const resp = await axios.post("/login", Value)
            if (resp.status === 200) {
                setIsLoggedIn(true);
                setUserName(resp.data.user.FirstName)
                setUserId(resp.data.user._id)
                const isAdmin = resp.data.user.IsAdmin === true ? true : false;
                setIsAdmin(isAdmin);
                setIsAdmin(resp.data.user.IsAdmin)
                // console.log(resp.data.username)
                localStorage.setItem('authtoken', resp.data.token);
                // sessionStorage.setItem('authtoken', resp.data.token); 
                localStorage.setItem('IsLoggedIn', true);
                localStorage.setItem('IsAdmin', isAdmin);
                localStorage.setItem('UserName', resp.data.user.FirstName);
                localStorage.setItem('UserId', resp.data.user._id);
                // toast.error(resp.data.user._id)
                // console.log(resp.data.user.username)
                navigate('/')


                toast.success("LoggedIn Successfully ")

            }
        }
        catch (error) {
            setIsLoggedIn(false);
            toast.error("Invalid Credentials")
        }

    }

    return (
   <motion.div
   initial={{x:'-100vw'}}
   animate={{x:0}}
   transition={{duration:1,type:"spring"}}>

        <Container maxWidth='sm' className='p-5 mt-5 mb-2' style={{ margin: "auto", backgroundColor: "#101E2B", boxShadow: "0 15px 25px rgba(0,0,0,.6)", borderRadius: "10px" }}>
        <Box className='p-5 login-box'>
    
            <Typography variant='h4' className='py-2 text-center' style={{ color: '#fff' }}>Login</Typography>
            <div class="user-box m-2">
                     <div className='form-group'>
                         <span className='text-light'>Email</span>
                         <TextField  type="text" onChange={(e) => handleChange(e)} className='form-control mt-2' name='email' />
                     </div>
                 </div>
                 <div class="user-box m-2">
                     <span className='text-light' >Password</span>
                     <TextField  type="password" className='form-control mt-2' onChange={(e) => handleChange(e)} name='password' />
                 </div>
            <Button type="submit" onClick={(e) => handleSubmit(e)} variant="contained" className='m-3' style={{ backgroundColor: "#149686" }} color="primary">
                Submit
            </Button>
    
            <Typography variant='body1' style={{ color: '#fff' }}>Don't have an account? <Link to="/Register" style={{ textDecoration: "none", color: "#fff" }}>Sign up!</Link></Typography>
        </Box>
    </Container>
    
   </motion.div>

    )
}

export default Login
