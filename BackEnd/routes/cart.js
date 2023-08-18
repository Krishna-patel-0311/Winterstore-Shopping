var express = require('express')
var router = express.Router() 
const cartController = require('../controller/cart.controller');
const Auth = require('../middleware/Auth')

router.get('/:id',Auth.IsAuth,cartController.getCart)
router.delete('/item/:id',Auth.IsAuth,cartController.removeItem)
router.post('/:id',Auth.IsAuth,cartController.AddToCart)

module.exports = router