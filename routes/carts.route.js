const {Router} = require('express');
const { cartsControllers } = require('../controllers/carts.controllers');

const router = Router();

router.post('/cart', cartsControllers.createCart);
router.patch('/cart/:medId', cartsControllers.addItemToCart);
router.patch('/cart/user/:userId', cartsControllers.BuyItems);
router.patch('/cart', cartsControllers.clearCart);
router.patch('/cart/med/:medId', cartsControllers.removeMedFromCart);

module.exports = router;