const Admin = require('../models/adminModel');
const Student = require('../models/studentModel');
const Teacher = require('../models/teacherModel');

// Admin login
exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin || admin.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.json({ message: 'Admin login successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all students and teachers for admin
exports.getAllUsers = async (req, res) => {
  try {
    const students = await Student.find();
    const teachers = await Teacher.find();
    res.json({ students, teachers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
