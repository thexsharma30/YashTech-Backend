const express = require('express');
const { registerTeacher, getTeachers } = require('../controllers/teacherController');
const router = express.Router();

router.post('/register', registerTeacher);
router.get('/', getTeachers);

module.exports = router;
