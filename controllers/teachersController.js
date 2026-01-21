const db = require('../database/conexion.js')
 
class TeacherController {
  constructor() {

  }
  check(req, res) {
    res.json({ msg: 'Check teachers from class' });
  }

  joining(req, res) {
    res.json({ msg: 'Join teacher from class' });
  }

  update(req, res) {
    res.json({ msg: 'Update teacher from class' });
  }
  erase(req, res) {
    
    res.json({ msg: 'Delete teacher from class' });
  }
  checkDetail(req, res) {
    const { id } = req.params
    res.json({ msg: `Check teacher from class with id ${id}` });
  }
}

module.exports = new TeacherController();
 