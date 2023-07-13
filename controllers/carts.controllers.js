const Cart = require("../models/Cart.model");
const Medicine = require("../models/Medicine.model");
const User = require("../models/User.model");

module.exports.cartsControllers = {
    createCart: async function (req, res) {
        const { user_id, items, totalPrice } = req.body;
        try {
            const data = await Cart.create({
                user_id,
                items,
                totalPrice,
            })
            res.json('cart was created');
        } catch (err) {
            res.json(err.message);
        }
    },

    addItemToCart: async function (req, res) {
        try {
            const meds = await Medicine.findById(req.params.medId);
            const cart_ = await Cart.findById(req.body.cartId);
            await cart_.updateOne({ $push: { items: req.params.medId } });
            cart_.totalPrice += meds.price;
            cart_.save();
            meds.save();
            res.json('Medicine added to cart')
        } catch (err) {
            res.json(err.message);
        }
    },

    BuyItems: async function (req, res) {
        try {
            let client = await User.findById(req.params.userId);
            let cart_ = await Cart.findById(req.body.cartId);
            if (cart_.items.length <= 0) {
                res.json('Your cart is empty');
            }
            else if (cart_.totalPrice > client.wallet) {
                res.json('You do not have enough money');
            }
            else {
                cart_.items = [];
                client.wallet -= cart_.totalPrice;
                cart_.totalPrice = 0;
                cart_.save();
                client.save();
                res.json('You buied madications');
            }
        } catch (err) {
            res.json(err.message);
        }
    },

    clearCart: async function (req, res) {
        try {
            let cart_ = await Cart.findById(req.body.cartId);
            cart_.items = [];
            cart_.totalPrice = 0;
            cart_.save();
            res.json('cart cleared');
        } catch (err) {
            res.json(err.message);
        }
    },

    removeMedFromCart: async function (req, res) {
        try {
            const med = await Medicine.findById(req.params.medId);
            const cart_ = await Cart.findById(req.body.cartId);
            await cart_.updateOne({
                $pull: {
                    items: req.params.medId,
                }
            })
            cart_.totalPrice -= med.price;
            cart_.save();
            res.json('Medicine was removed');
        } catch (err) {
            res.json(err.message);
        }
    }
}