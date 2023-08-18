const Product = require('../model/product');

//All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Products by category
exports.getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const products = await Product.find({ pcategory: category });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//Products Ideal for
exports.getProductsByIdealfor = async (req, res) => {
  const idealfor = req.params.idealfor;
  // console.log(idealfor);  
    
  try {
    if(idealfor === "kids"){
      
      const query = { pidealfor: { $in: ["Girls", "Boys"] } };
      const products = await Product.find(query);
      // console.log(products)
    res.status(200).json(products);
  }
    else{
      const products = await Product.find({ pidealfor: idealfor });
    
    res.status(200).json(products);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get a product by ID
exports.getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Create a new product
  exports.createProduct = async (req, res) => {
    
    const product = new Product({
      pname: req.body.pname,
      pbrand: req.body.pbrand,
      pdesc: req.body.pdesc,
      pcategory: req.body.pcategory,
      pmrp: req.body.pmrp,
      pprice: req.body.pprice,
      pidealfor: req.body.pidealfor,
      pimage: req.file.filename,
      isActive: req.body.isActive,
      dateCreated: new Date(),
    });
    // console.log(product)
    // res.status(201).json(product);
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
      
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // Update a product by ID
  exports.updateProductById = async (req, res) => {
    // console.log(req.body)
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.body._id,
        req.body,
        { new: true }
      );
      // console.log(updatedProduct);
      res.status(201).json(updatedProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // Delete a product by ID
  exports.deleteProductById = async (req, res) => {

    try {
      const deletedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { isActive: false },
        { new: true }
      );
      // console.log(deletedProduct)
      res.status(200).json(deletedProduct);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getRandomItems = (array, n) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

exports.FeaturedProduct = async(req,res)=>{
  try {
    const idealfor = req.params.idealfor
    const data = await Product.find({pidealfor:idealfor,isActive: true});
    // console.log(idealfor)
    // console.log(data)
    const randomData = getRandomItems(data, 15); // Get 15 random items
    res.status(200).json(randomData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}