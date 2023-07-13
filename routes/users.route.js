const { Router } = require('express');
const { usersControllers } = require('../controllers/users.controllers');

const router = Router();

router.post('/users', usersControllers.createUser);
router.patch('/users/:id', usersControllers.addMoney);

module.exports = router;