const db = require('../database/conexion.js');

class StudentController {
  constructor() {}
  check(req, res) {
    res.json({ msg: 'Check students from class' });
  }

  joining(req, res) {

    try {
      const { dni, name, lastname, email } = req.body;
      db.query(`INSERT INTO students
                (id, dni, name, lastname, email)
                VALUES(NULL, ?, ?, ?, ?);`,
              [dni, name, lastname, email],(error, rows) => {
                if(error){
                  res.status(400).send(error)
                }
                res.status(201).json(rows)
              });
    } catch (error) {
      // console.log(error);
      res.status(500).send(error.message);
    }
  }

  update(req, res) {
    res.json({ msg: 'Update student from class' });
  }
  erase(req, res) {
    res.json({ msg: 'Delete student from class' });
  }
  checkDetail(req, res) {
    const { id } = req.params;
    res.json({ msg: `Check student from class with id ${id}` });
  }
}

module.exports = new StudentController();
