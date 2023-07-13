const Category = require("../models/Category.model")

module.exports.categoriesControllers = {
    addCategory: async function (req, res) {
        try {
            const data = await Category.create({
                name: req.body.name,
            })
            res.json(data);
        } catch (err) {
            res.json(err.message);
        }
    },

    getCategories: async function (req, res) {
        try {
            const data = await Category.find({});
            res.json(data);
        } catch (err) {
            res.json(err.message);
        }
    },

    patchCategory: async function (req, res) {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id,
                {
                    $set: {
                        name: req.body.name,
                    }
                });
                res.json(data);
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteCategory: async function(req, res) {
        try{
            const data = await Category.findByIdAndDelete(req.params.id);
            res.json(data);
        }catch (err) {
            res.json(err.message);
        }
    }
}