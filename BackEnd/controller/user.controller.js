const User = require('../model/user');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.register = async (req, res) => {
    const {fname,lname, email,password,address,city,state,pincode,phone,isAdmin } = req.body;

    try {
      // Check if user with same email already exists
      let user = await User.findOne({ Email:email });
      if (user) {
        return res.status(400).send();
      }
           // Hash password
      const encpassword = await bcrypt.hash(password, 10);
      // Create new user
      user = new User({
FirstName:fname,
LastName:lname,
Email:email,
Password:encpassword,
Address:address,
City:city,
State:state,
Zip:pincode,
Phone:phone,
IsAdmin:isAdmin
      });
// console.log(req.body)
// console.log(user)
       // Save user to database
    await user.save();

      res.status(201).json(user);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// Login user and return JWT token
exports.login = async (req, res) => {
    const { email, password } = req.body;
  
// console.log(req.body)
    try {
      // Check if user exists
      const user = await User.findOne({ Email:email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      // Hash password
      const encpassword = await bcrypt.compare(password, user.Password);
      // console.log(encpassword)
      // Check if password is correct
      if (!encpassword) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      const payload = {
          id: user._id,
          email: user.Email,
          isAdmin: user.IsAdmin
      };
      // console.log(payload)
      // Generate JWT token
      const token = jwt.sign(payload, process.env.JWT_SECRET,{ expiresIn: '1h' });
      res.status(200).send({user,token});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Get current user profile
  exports.getMe = async (req, res) => {
    const objectId = ObjectId(req.params);
    // console.log(objectId)
    try {
      // Get user from database
      const user = await User.findById({_id : objectId});
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };

  // get all users
  exports.allUser = async (req, res) => {
try {
  const users = await User.find();
  res.json(users);

} catch (error) {
  console.error(err);
      res.status(500).json({ message: 'Server error' });
}
  }

   // Update a user by ID
   exports.updateUser = async (req, res) => {
   
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        );
        // console.log(updatedUser)
      res.status(201).json(updatedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  exports.updateUserBySelf = async (req, res) => {
   


    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
       req.body,
        { new: true }
        );
        // console.log(updatedUser)
      res.status(201).json(updatedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

    // Delete a user by ID
    exports.deleteUser = async (req, res) => {
      try {
        const deleteduser = await User.findByIdAndUpdate(
          req.params.id,
          { IsActive: false },
          { new: true }
        );
        res.json(deleteduser);
        // console.log(deleteduser);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    };
  