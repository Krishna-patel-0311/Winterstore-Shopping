const cart = require('../model/cart')
const product = require('../model/product')
const user = require('../model/user')
const mongodb = require('mongodb');

exports.AddToCart = async(req,res)=>{
const {UserId,ProductId, Quantity,Price} = req.body
const CartItem = new cart({
    CustomerId:UserId,
    ProductId:ProductId,
    ItemQuantity:Quantity,
    TotalPrice: Quantity*Price
})
try {
    const newCartItem = await CartItem.save();
    // console.log(newCartItem )
    res.status(201).json(newCartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
exports.getCart = async(req,res)=>{
const Id = req.params.id
const data = await cart.find({CustomerId:Id});
// console.log(data);
const productData = [];
const responseData = [];
try {
  for(let i= 0 ;i<data.length;i++){
    const productId = data[i].ProductId;
    let productItem = await product.findOne({_id:mongodb.ObjectId(productId)})
    productData.push(productItem)
  }
  for(let i= 0 ;i<data.length;i++){
    let item = {
      Id:data[i]._id,
      ProductName: productData[i].pname,
      ProductImage:productData[i].pimage,
      Quantity:data[i].ItemQuantity,
      Total:data[i].TotalPrice,
      date:data[i].DateAdded
    }
  responseData.push(item);
  }
  res.status(200).json(responseData)
} catch (err) {
  res.status(400).json({ message: err.message });
}
}
exports.removeItem = async(req,res)=>{
  const Id = req.params.id
  try {
    const result = await cart.deleteOne({_id:mongodb.ObjectId(Id)})
    
    res.status(200).send()
  } catch (err) {
    res.status(400).send;
  }
}