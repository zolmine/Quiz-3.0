const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/UserController');

/* link api/ */

router.post('/api/addStudent', UserController.userRegister);
router.get('/api/', UserController.usersLists);
router.put('/api/update/:id', UserController.updateUser);
router.delete('/api/delete/:id', UserController.deleteUser);


module.exports = router;