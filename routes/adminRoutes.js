const express = require('express');
const { loginAdmin, getAllUsers } = require('../controllers/adminController');
const router = express.Router();

router.post('/login', loginAdmin);
router.get('/users', getAllUsers);

module.exports = router;
