
const db = require('../database/conexion.js')

class CoursesController {
  constructor() {

  }
  check(req, res) {
    res.json({ msg: 'Check courses from class' });
  }

  joining(req, res) {
    res.json({ msg: 'Join course from class' });
  }

  update(req, res) {
    res.json({ msg: 'Update course from class' });
  }
  erase(req, res) {
    res.json({ msg: 'Delete course from class' });
  }
  checkDetail(req, res) {
    const { id } = req.params
    res.json({ msg: `Check course from class with id ${id}` });
  }
}

module.exports = new CoursesController();
