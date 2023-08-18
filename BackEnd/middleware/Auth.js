const jwt = require('jsonwebtoken');
exports.IsAuth = function IsAuth(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    // console.log(token)
    if (!token) {
      return res.status(401).json({ message: 'Missing authentication token' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid authentication token' });
      }
  
      req.user = decoded;
      // console.log(req.user)
      // console.log(req.user.isAdmin)
      next();
    });
  }
  
exports.IsAdmin =   function IsAdmin(req, res, next) {
      // Check if the user is logged in and has admin privileges
      if (req.user && req.user.isAdmin) {
        // User is authorized, so proceed to the next middleware or route handler
        next();
      } else {
        // User is not authorized, so return a 403 Forbidden error
        res.status(403).send('Admin access required');
      }
    }
    