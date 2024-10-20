const Teacher = require('../models/teacherModel');

// Register a new teacher
exports.registerTeacher = async (req, res) => {
  try {
    const { name, qualification, email, mobileNumber, gender, experience, subjects, password } = req.body;
    const teacher = new Teacher({ name, qualification, email, mobileNumber, gender, experience, subjects, password });
    await teacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all teachers
exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
