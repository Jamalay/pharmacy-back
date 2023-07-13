const {Router} = require('express');
const { categoriesControllers } = require('../controllers/categories.controller');

const router = Router();

router.post('/admin/categories', categoriesControllers.addCategory);
router.get('/admin/categories', categoriesControllers.getCategories);
router.patch('/admin/categories/:id', categoriesControllers.patchCategory);
router.delete('/admin/categories/:id', categoriesControllers.deleteCategory);

module.exports = router;