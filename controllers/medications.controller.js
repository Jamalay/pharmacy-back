const Medicine = require("../models/Medicine.model")

module.exports.medicationsController = {
    addMedicine: async function (req, res) {
        try {
            const { name, price, needsPrescription, category } = req.body;
            const data = await Medicine.create({
                name,
                price,
                needsPrescription,
                category,
            })
            res.json(data);
        } catch (err) {
            res.json(err.message);
        }
    },

    getMedications: async function (req, res) {
        try {
            const data = await Medicine.find({});
            res.json(data);
        } catch (err) {
            res.json(err.message);
        }

    },

    patchMedications: async function (req, res) {
        const {name, price, needsPrescription, category} = req.body;
        try{
            const data = await Medicine.findByIdAndUpdate(req.params.id, 
                {$set: {
                    name,
                    price,
                    needsPrescription,
                    category
                }})
            res.json(data);
        } catch (err) {
            res.json(err.message);
        }

    },

    deleteMedicine: async function(req, res) {
        try{
            const data = await Medicine.findByIdAndDelete(req.params.id);
            res.json('Medicine was deleted');
        } catch (err){
            res.json(err.message);
        }

    },

    getMedicationsFromCat: async function(req, res) {
        try{
            const data = await Medicine.find({category: req.params.catId});
            res.json(data);
        }catch (err) {
            res.json(err.message);
        }
    },

    getMedicationById: async function(req, res) {
        try{
            const data = await Medicine.findById(req.params.id);
            res.json(data);
        }catch (err) {
            res.json(err.message);
        }
    }
}