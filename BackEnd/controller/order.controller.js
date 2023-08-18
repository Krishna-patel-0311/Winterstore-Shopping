const order = require("../model/order");
const product = require("../model/product");
const user = require("../model/user");
const mongodb = require("mongodb");
// Get a product by ID
function generateOrderId() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let orderId = "ORDX";

  // Generate 4 random unique numbers
  let numbers = new Set();
  while (numbers.size < 4) {
    let randomNum = Math.floor(Math.random() * 10);
    numbers.add(randomNum);
  }

  // Append the 4 numbers to the order ID
  for (let number of numbers) {
    orderId += number;
  }

  // Generate 3 random letters and append them to the order ID
  for (let i = 0; i < 3; i++) {
    let randomLetter = letters[Math.floor(Math.random() * letters.length)];
    orderId += randomLetter;
  }

  return orderId;
}
exports.CreateOrder = async (req, res) => {
  const Id = req.params.id;
  // console.log(Id)
  const OrderId = generateOrderId();
  // console.log(req.body)
  const Order = new order({
    OrderId: OrderId,
    ProductId: req.body.ProductId,
    CustomerId: Id,
    CustomerName: req.body.CustomerName,
    Address: req.body.Address,
    City: req.body.City,
    State: req.body.State,
    Zip: req.body.Zip,
    Phone: req.body.Phone,
    TotalPrice: req.body.totalPrice,
    PaymentMethod: req.body.PaymentMethod,
  });
  // console.log(Order)
  try {
    const newOrder = await Order.save();
    // console.log(newOrder)
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrders = async (req, res) => {
  const Id = req.params.id;
  // console.log(Id)
  const data = await order.find({ CustomerId: Id });
  // console.log(data)
  var productData=[];
  const responseData = [];
  try {
    for (let i = 0; i < data.length; i++) {
      const productId = data[i].ProductId;
      let productItems = await product.find({ _id: productId });
      productData.push(productItems);
    }
// console.log(productData)
    for (let i = 0; i < data.length; i++) {
      let item = {
        Id: data[i]._id,
        OrderId: data[i].OrderId,
        ProductName: productData[i][0].pname,
        ProductImage: productData[i][0].pimage,
        Total: data[i].TotalPrice,
        Date: data[i].DateAdded,
        Status: data[i].OrderStatus,
      };
      // console.log(item)
      responseData.push(item);
    }
    // console.log(responseData)
    res.status(200).json(responseData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getSpeceficOrder = async (req, res) => {
  const Id = req.params.id;
  // console.log(Id)
  try {
    const data = await order.find({ _id: Id });
    // console.log(data)
    const productId = data[0].ProductId;
    // console.log(productId)
    let ProductItem = await product.find({ _id: productId });
    // console.log(ProductItem);
    let item = {
      OrderId: data[0].OrderId,
      CustomerName: data[0].CustomerName,
      Address: data[0].Address,
      City: data[0].City,
      State: data[0].State,
      Zip: data[0].Zip,
      Phone: data[0].Phone,
      Date: data[0].DateAdded,
      TotalPrice: data[0].TotalPrice,
      PaymentMethod: data[0].PaymentMethod,
      ProductName: ProductItem[0].pname,
      ProductImage: ProductItem[0].pimage,
    };
    // console.log(item);
    res.status(200).json(item)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
