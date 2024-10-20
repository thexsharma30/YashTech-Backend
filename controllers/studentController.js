const Student = require('../models/studentModel');

// Register a new student
exports.registerStudent = async (req, res) => {
  try {
    const { name, email, password, age, gender, courses } = req.body;
    const student = new Student({ name, email, password, age, gender, courses });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
