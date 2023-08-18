// import React,{useEffect} from 'react'
// import Button from '@mui/material/Button'
// import { Delete, Edit } from '@mui/icons-material'
// import { toast } from 'react-toastify'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// const ProductItem = (props) => {
//     const Items = props.Value
//     const navigate = useNavigate()

//     const handleEdit = (id)=>{
//       navigate(`/Admin/Products/Edit/${id}`)
//     }
//     const handleDelete = async (id)=>{
//       try {
//        const response = await axios.delete(`http://localhost:5000/product/${id}`)
       
//        if(response.status === 200){
//          toast.success("product successfully deleted")
//          // console.log(response)
//         //  navigate('/Admin/Products/ProductList')
//          // console.log(response.data)
//        }
//       } catch (error) {
//        toast.error("Error While Deleting Product")
//       }
//       // toast.error(`item with price ${id} is deleted`);
//           }
//   return (
//     Items.map((item,i)=>(
// <tr className='row' key={i}>
//             <td className='col'>{i+1}</td>
//             <td className='col'>{item.pname}</td>
//             <td className='col'>{item.pdesc}</td>
//             <td className='col'>{item.pprice}</td>
//             <td className='col'>
//               <img src={item.pimage} alt="product Pic" style={{ width: "50px" }}></img>
//             </td>
//             <td className='col'>{item.isActive?"True":"False"}</td>
//             <td className='col'>
//               <Button variant='contained' className='m-1' style={{  backgroundColor: "#149686" }} onClick={()=>handleEdit(item._id)} startIcon={<Edit />} >Edit</Button>
//               <Button variant='contained' className='m-1' style={{  backgroundColor: "#149686" }}  onClick={()=>handleDelete(item._id)} startIcon={<Delete />}>Delete</Button>
//             </td>
//           </tr>
//     ))
    
//   )
// }

// export default ProductItem
