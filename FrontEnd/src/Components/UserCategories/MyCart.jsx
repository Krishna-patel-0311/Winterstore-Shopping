import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AppContext } from '../context'
import { motion } from 'framer-motion'

const MyCart = () => {
    const {UserId,IsLoggedIn} = useContext(AppContext)
    const [Value,setValue] = useState([])
    const navigate = useNavigate()
    const token = localStorage.getItem('authtoken')
axios.defaults.headers.common["authorization"] = `Bearer ${token}`
      const handleDelete = async(id)=>{
        try{
          const response = await axios.delete(`http://localhost:5000/cart/item/${id}`);
          if(response.status === 200){
            toast.success("Item Deleted")
            getValues(UserId)
        
          }}
          catch(error){
            toast.error("error while deleting")
          }

      }
      useEffect(() => {
        getValues(UserId);
      }, [UserId])
      const getValues = async (Id) => {
   
       if(IsLoggedIn){
        try{
          const response = await axios.get(`http://localhost:5000/cart/${Id}`);
          if(response.status === 200){
            setValue(response.data)
        
          }}
          catch(error){
            toast.error("error occured")
          }
       }else{
        toast.info("Login First to View")
       }
      }
      const handleBuy = (id,price) => {
        if(IsLoggedIn){
            const data = `${id}&${price}`;
        navigate(`/Products/Checkout/${data}`);
        }else{
            toast.warning("Login First to Buy Item")

        }
    }
      createTheme('custom', {
        text: {
          primary: '#FBFBFB',
          secondary: '#FFFFFF',
        },
        background: {
          default: '#101E2B',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#101E2B',
        },
        action: {
          button: '#FFFFFF',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');
    const columns = [
        {
            name: <h5>#</h5>,
            selector: (row,i) => (<h6>{++i}</h6>),
            sortable: true,
        },
        {
            name: <h5>ProductName</h5>,
            selector: row => (<h6>{row.ProductName}</h6>),
            sortable: true,
        },
        {
            name: <h5>Image</h5>,
            selector: row => (<img src={row.ProductImage} className="m-2" alt="product" height="100px" width="100px" />),

            sortable: true,
        }, {
            name: <h5>Quantity</h5>,
            selector: row => (<h6>{row.Quantity}</h6>),
            sortable: true,
        }, {
            name: <h5>TotalAmount</h5>,
            selector: row => (<h6>{row.Total}</h6>),
            sortable: true,
        }, {
            name: <h5>DateAdded</h5>,
            selector: row => (<h6>{row.date}</h6>),
            sortable: true,
        },{
            name: <h5>Actions</h5>,
            cell: row => (<><Button variant='contained' className='m-1' style={{  backgroundColor: "#149686" }}  onClick={()=>handleDelete(row.Id)} ><i className='bi bi-trash fa fa-2x m-auto'></i></Button>
          <Button variant='contained' className='m-1' style={{  backgroundColor: "#149686" }}  onClick={()=>handleBuy(row.Id,row.Total)} ><i className='bi bi-bag-heart-fill fa fa-2x m-auto'></i></Button>
      
      </> ),
        },
    ];
  return (
    <motion.div
    initial={{x:'-100vw'}}
    animate={{x:0}}
    transition={{duration:2,type:"spring"}} className='container-fluid h-75' style={{ backgroundColor: "#101E2B", borderRadius: "10px" }}>
    <center><h1 className='text-light p-3'>My Cart Items</h1></center>
    <div className='contianer-fluid mt-3 py-3 '>
    
    <DataTable columns={columns}  data={Value} pagination={true} style={{backgroundColor: "#101E2B"}} theme="custom" />
    </div>
  </motion.div>
  )
}

export default MyCart
