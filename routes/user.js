const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/UserController');

/* link api/ */

router.post('/api/addStudent', UserController.userRegister);
router.get('/api/', UserController.getUserById);
// router.put('/api/update/:id', UserController);
// router.delete('/api/delete/:id', UserController);


module.exports = router;