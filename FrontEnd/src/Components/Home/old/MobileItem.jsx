import { Button } from '@mui/material'
import React from 'react'
import AddCart from '@mui/icons-material/AddShoppingCart';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context';
import axios from 'axios';
import { toast } from 'react-toastify';
const MobileItem = (props) => {
    const {UserId,IsLoggedIn} = useContext(AppContext)
    const token = localStorage.getItem('authtoken')
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`
    const handleAddCart = async() => {
        if(IsLoggedIn){  
      const Data = {
          UserId:UserId,
          ProductId:props.ItemId,
          Quantity:1,
          Price:props.Price
      }
      try {
          const response = await axios.post(`http://localhost:5000/cart/${UserId}`,Data);
          if(response.status === 201) {
              toast.success("item successfully added to cart")
          }
      } catch (error) {
          toast.error("error occured")
      }
      
          }
        else{
            toast.warning("Login first to AddToCart")
        }}

    return (

        <div class="product-block h-100 w-75" style={{backgroundColor:"#101E2B",color:"white",borderRadius:"15px"}}>
         <Link to={`/Products/ProductDetail/${props.ItemId}`}   style={{textDecoration:"none",color:"white"}}>
            <img class="d-block w-50 mt-3" style={{margin:"auto"}} src={props.Image} alt="Product Pic" />
            <h5 className='m-2'> {props.title}</h5>
            <p><center><s>&#8377;{props.Mrp}</s>{"  "}&#8377;{props.Price}</center></p>
                </Link>
            <div className="row mb-3 text-center">
                    <div className="col">
                    <Button  className="m-1" startIcon={<AddCart/>} style={{ margin: "auto",  borderRadius: "5px"}} color='secondary' onClick={()=>handleAddCart()} variant='contained'>Add To Cart</Button>
                    </div>
                </div>
        </div>

    )
}

export default MobileItem
