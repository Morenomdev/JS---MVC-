const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController.js')

router.get('/', studentsController.check);
router.post('/', studentsController.joining);

router
.route('/:id')
  .get(studentsController.checkDetail)
  .put(studentsController.update)
  .delete(studentsController.erase);
  

  module.exports = router;