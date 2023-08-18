import { React, useContext} from 'react'
import { Route, Routes,useLocation} from "react-router-dom";
import AdminHome from "../Components/Admin/Home";
import Products from "./Product/Products";
import ProductList from "./Product/ProductList";
import OrdersList from './Orders/OrdersList';
import { ProductDetails } from './Product/ProductDetails';
import Login from './Login';
import Register from './Register';
import ErrorPage from './ErrorPage';
import AddProduct from './Product/AddProduct';
import Profile from './Profile';
import EditProduct from './Product/EditProduct';
import Home from '../Components/Home';
import { AppContext } from './context'
import UserList from './User/UserList';
import EditUser from './User/EditUser';

import MyCart from './UserCategories/MyCart';
import Orders from './UserCategories/Orders';
import About from './About';
import CheckOut from './UserCategories/CheckOut';
import OrderSuccess from './UserCategories/OrderSuccess';
import EditProfile from './UserCategories/EditProfile';
import ViewOrderDetails from './UserCategories/ViewOrderDetails';
import { AnimatePresence } from 'framer-motion';
import MensWithPagination from './UserCategories/MenWithPagination';
import WomenwithPagination from './UserCategories/WomenwithPagination';
import KidsWithPagination from './UserCategories/KidsWithPagination';

const AnimatedRoute = () => {
  const { IsAdmin} = useContext(AppContext)
    const location = useLocation()
  return (
    <AnimatePresence>
    
    <Routes location={location} key={location.pathname}>
    {IsAdmin ? (
        <>
          <Route exact path="/" element={<AdminHome />} />
          <Route path="/Admin/Products" element={<Products />} />
          <Route path="/Admin/Products/Add" element={<AddProduct />} />
          <Route path="/Admin/Products/Edit/:id" element={<EditProduct />} />
          <Route path="/Admin/Products/ProductList" element={<ProductList />} />
          <Route path="/Admin/Products/ProductDetail/:id" element={<ProductDetails />} />
          <Route path="/Admin/Users" element={<UserList />} />
          <Route path="/Admin/User/Edit/:id" element={<EditUser />} />
          <Route path="/Admin/User/add" element={<h1 className='text-center'>Customer Add Page</h1>} />
          <Route path="/Admin/Issues" element={<h1 className='text-center'>Issues Page</h1>} />
          <Route path="/Admin/Orders" element={<OrdersList />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/Profile/Edit/:id" element={<EditProfile />} />
          <Route exact path="/About" element={<About/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<ErrorPage/>} />
        </>
      ) : (
        <>
          <Route exact path="/" element={<Home />} />
          <Route path="/Products/ProductDetail/:id" element={<ProductDetails />} />
          <Route path="/Products/Checkout/:data" element={<CheckOut />} />
          <Route path="/OrderSuccess/:id" element={<OrderSuccess />} />
          <Route exact path="/Mens" element={<MensWithPagination/>} />
          <Route exact path="/Womens" element={<WomenwithPagination/>} />
          <Route exact path="/Kids" element={<KidsWithPagination/>} />
          <Route exact path="/MyCart" element={<MyCart/>} />
          <Route exact path="/Orders" element={<Orders/>} />
          <Route exact path="/Order/Details/:id" element={<ViewOrderDetails/>} />
          <Route exact path="/About" element={<About/>} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/Profile/Edit/:id" element={<EditProfile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </>
      )}
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoute
