const User = require("../models/User.model");

module.exports.usersControllers = {
    createUser: async function (req, res) {
        try {
            const { name, wallet } = req.body;
            const data = await User.create({
                name,
                wallet,
            })
            res.json('user added');
        } catch (err) {
            res.json(err.message)
        }
    },

    addMoney: async function (req, res) {
        try {
            const { wallet } = req.body.wallet;
            const data = await User.findById(req.params.id);
            await data.updateOne({
                $set: {
                    wallet: req.body.wallet,
                }
            })
        } catch (err) {
            res.json(err.message);
        }
    }
}