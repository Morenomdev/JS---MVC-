const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController.js')

router.get('/', coursesController.check);
router.post('/', coursesController.joining);
router.post('/registerStudent', coursesController.associateStudent);

router
.route('/:id')
  .get(coursesController.checkDetail)
  .put(coursesController.update)
  .delete(coursesController.erase);
  

  module.exports = router;