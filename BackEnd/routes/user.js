var express = require('express')
var route = express.Router()
const user = require('../controller/user.controller')

const Auth = require("../middleware/Auth")
  
route.post('/Login',user.login)
route.post('/Register', user.register)
route.get('/Profile/:id',Auth.IsAuth, user.getMe)
route.put('/Profile/Edit/:id',Auth.IsAuth, user.updateUserBySelf)
route.get('/Users',Auth.IsAuth,Auth.IsAdmin,user.allUser)
route.get('/User/:id',Auth.IsAuth,Auth.IsAdmin ,user.getMe)
route.delete('/User/:id',Auth.IsAuth,Auth.IsAdmin ,user.deleteUser)
route.put('/User/Edit/:id',Auth.IsAuth,Auth.IsAdmin ,user.updateUser)
module.exports = route