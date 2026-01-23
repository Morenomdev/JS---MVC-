
const db = require('../database/conexion.js')

class CoursesController {
  constructor() {

  }
  check(req, res) {
    try {
      db.query(`SELECT * FROM courses;`, (error, rows) => {
        if (error) {
          res.status(400).send(error);
        }
        res.status(200).json(rows);
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  joining(req, res) {
    try {
      const {name, description, teacher_id } = req.body;
      db.query(
        `INSERT INTO courses
                (id, name, description, teacher_id)
                VALUES(NULL, ?, ?, ?);`,
        [name, description, teacher_id],
        (error, rows) => {
          if (error) {
            res.status(400).send(error);
          }
          if(rows.insertId)
          res.status(201).json({ id: rows.insertId });
        },
      );
    } catch (error) {
      // console.log(error);
      res.status(500).send(error.message);
    }
  }

  update(req, res) {
    try {
      const { id } = req.params;
      const {name, description, teacher_id } = req.body;
      db.query(
        `UPDATE courses.courses
          SET name=?, desciption=?, teacher_id=?
          WHERE id=?;`,
        [name, description, teacher_id, id],
        (error, rows) => {
          if (error) {
            res.status(400).send(error);
          }
          if (rows.affectedRows == 1){
            res.status(201).json({msg: 'Date updated'});

          }
        },
      );
    } catch (error) {
      // console.log(error);
      res.status(500).send(error.message);
    }
  }



  erase(req, res) {
    try {
      const { id } = req.params;
      db.query(`delete from courses where id = ?;`, [id], 
        (error, rows) => {
        if (error) {
          res.status(400).send(error);
        }
        res.status(200).json({ msg: `Delete course with id ${id} from class` });
      });
    } catch (error) {
      res.status(500).send(error);
    }
    
  }

  checkDetail(req, res) {
    try {
      const { id } = req.params;
      db.query(`select * from courses where id = ?;`, [id] , (error, rows) => {
        if (error) {
          res.status(400).send(error);
        }
        res.status(200).json(rows[0]);
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

   associateStudent(req, res) {
    try {
      const {name, description, teacher_id } = req.body;
      db.query(
        `INSERT INTO courses
                (id, name, description, teacher_id)
                VALUES(NULL, ?, ?, ?);`,
        [name, description, teacher_id],
        (error, rows) => {
          if (error) {
            res.status(400).send(error);
          }
          if(rows.insertId)
          res.status(201).json({ id: rows.insertId });
        },
      );
    } catch (error) {
      // console.log(error);
      res.status(500).send(error.message);
    }
  }


}

module.exports = new CoursesController();
