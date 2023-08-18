import { ShoppingCart } from '@mui/icons-material'
import { Button } from '@mui/material'
import axios from 'axios'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AppContext } from '../context.js'
const ProductItem = ({data}) => {
    const token = localStorage.getItem('authtoken')
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`
  const {UserId} = useContext(AppContext)
  const handleAddCart = async() => {

    const Data = {
        UserId:UserId,
        ProductId:data._id,
        Quantity:1,
        Price:data.pprice
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
  return (
    <div className="col-md-3 px-1 mt-3" >
            <div className="product-block h-100" style={{backgroundColor:"#101E2B",color:"white",borderRadius:"5px"}}>
    <Link to={`/Products/ProductDetail/${data._id}`}   style={{textDecoration:"none",color:"white"}}>
                <img className="d-block w-75 p-2" style={{margin:"auto"}}  src={data.pimage} alt="Product" />
                <h5 className='m-2'> {data.pname}</h5>
                <p><center><s>&#8377;{data.pmrp}</s>{" "}&#8377;{data.pprice}</center></p>
    </Link>
                <div className="row mb-3 text-center">
                    <div className="col-md-12">
                    <Button  startIcon={<ShoppingCart/>} style={{ margin: "auto",  borderRadius: "5px"}} color='secondary' onClick={()=>handleAddCart()} variant='contained'>Add To Cart</Button>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default ProductItem
