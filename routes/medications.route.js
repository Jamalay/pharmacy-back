const {Router} = require('express');
const { medicationsController } = require('../controllers/medications.controller');

const router = Router();

//for admin
router.post('/admin/medications', medicationsController.addMedicine);
router.get('/admin/medications', medicationsController.getMedications);
router.patch('/admin/medications/:id', medicationsController.patchMedications);
router.delete('/admin/medications/:id', medicationsController.deleteMedicine);
router.get('/admin/medications/:Id', medicationsController.getMedicationById);

//for client
router.get('/client/medications', medicationsController.getMedications);
router.get('/client/medications/:catId', medicationsController.getMedicationsFromCat);
router.get('/client/medications/:Id', medicationsController.getMedicationById);


module.exports = router;