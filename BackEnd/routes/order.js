var express = require('express')
var router = express.Router() 
const orderController = require('../controller/order.controller');
router.get('/:id',orderController.getOrders)
router.get('/Details/:id',orderController.getSpeceficOrder)
router.post('/:id',orderController.CreateOrder)
module.exports = router