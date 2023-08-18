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
const Orders = () => {
  const {UserId,IsLoggedIn} = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('authtoken')
  const navigate = useNavigate()
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`
    const [Value,setValue] = useState([]);
    const handleView = (id)=>{
        navigate(`/Order/Details/${id}`)
      }
      useEffect(() => {
        getValues(UserId);
      }, [UserId])
      const getValues = async (Id) => {
        if(IsLoggedIn){
        try{
        const response = await axios.get(`http://localhost:5000/order/${Id}`);
        if(response.status === 200){
          setValue(response.data)
          setIsLoading(false)
        }}
        catch(error){
          toast.error("error occured")
        }
      }else{ toast.info("Login First")}
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
            name: <h5>OrderId</h5>,
            selector: row => (<h6>{row.OrderId}</h6>),
            sortable: true,
        }, {
            name: <h5>ProductName</h5>,
            selector: row => (<h6>{row.ProductName}</h6>),
            sortable: true,
        },  {
            name: <h5>ProductImage</h5>,
            selector: row => (<img src={row.ProductImage} className="m-2" alt="product" height="100px" width="100px" />),
            sortable: true,
        }, {
            name: <h5>TotalAmount</h5>,
            selector: row => (<h6>{row.Total}</h6>),
            sortable: true,
        },{
            name: <h5>DateOrdered</h5>,
            selector: row => (<h6>{row.Date}</h6>),
            sortable: true,
        },{
            name: <h5>Status</h5>,
            selector: row => (<h6>{row.Status}</h6>),
            sortable: true,
        },{
            name: <h5>Actions</h5>,
            cell: row => ( <Button variant='contained' className='m-1' style={{  backgroundColor: "#149686" }} onClick={()=>handleView(row.Id)}  ><i className='bi bi-eye fa fa-2x m-auto'></i></Button>
       ),
        },
    ];
  return (
    <motion.div
    initial={{x:'-100vw'}}
    animate={{x:0}}
    transition={{duration:2,type:"spring"}} className='container-fluid h-75' style={{ backgroundColor: "#101E2B", borderRadius: "10px" }}>
    <center><h1 className='text-light'>My Orders</h1></center>
    <div className='contianer-fluid mt-3 py-3 '>
    
{
    <DataTable columns={columns} pagination={true} data={Value} style={{backgroundColor: "#101E2B"}} theme="custom" />
}
   </div>
  </motion.div>
  )
}

export default Orders
