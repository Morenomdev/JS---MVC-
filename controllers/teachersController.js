const db = require('../database/conexion.js')
 
class TeacherController {
  constructor() {}
    check(req, res) {
    try {
      db.query(`SELECT * FROM teachers;`, (error, rows) => {
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
      const { dni, name, lastname, email, profession, phone} = req.body;
      db.query(
        `INSERT INTO teachers
                (id, dni, name, lastname, email, profession, phone)
                VALUES(NULL, ?, ?, ?, ?, ?, ?);`,
        [dni, name, lastname, email, profession, phone],
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
      const { dni, name, lastname, email, profession, phone} = req.body;
      db.query(
        `UPDATE courses.teachers
          SET dni=?, name=?, lastname=?, email=?, profession=?, phone=?
          WHERE id=?;`,
        [dni, name, lastname, email, profession, phone, id],
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
      db.query(`delete from teachers where id = ?;`, [id], 
        (error, rows) => {
        if (error) {
          res.status(400).send(error);
        }
        res.status(200).json({ msg: `Delete student with id ${id} from class` });
      });
    } catch (error) {
      res.status(500).send(error);
    }
    
  }

  checkDetail(req, res) {
    try {
      const { id } = req.params;
      db.query(`select * from teachers where id = ?;`, [id] , (error, rows) => {
        if (error) {
          res.status(400).send(error);
        }
        res.status(200).json(rows[0]);
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new TeacherController();
 