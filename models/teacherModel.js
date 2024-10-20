const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qualification: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  experience: { type: Number, required: true },
  subjects: [{ type: String }], // array of subjects
  password: { type: String, required: true },
});

module.exports = mongoose.model('teachers', teacherSchema);
