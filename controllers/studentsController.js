const db = require('../database/conexion.js')

class StudentController {
  constructor() {

  }
  check(req, res) {
    res.json({ msg: 'Check students from class' });
  }

  joining(req, res) {
    res.json({ msg: 'Join student from class' });
  }

  update(req, res) {
    res.json({ msg: 'Update student from class' });
  }
  erase(req, res) {
    res.json({ msg: 'Delete student from class' });
  }
  checkDetail(req, res) {
    const { id } = req.params
    res.json({ msg: `Check student from class with id ${id}` });
  }
}

module.exports = new StudentController();
