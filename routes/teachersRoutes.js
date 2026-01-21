const express = require('express');
const router = express.Router();
const teachersController = require('../controllers/teachersController.js')

router.get('/', teachersController.check)
router.post('/', teachersController.joining)

router
.route('/:id')
  .get(teachersController.checkDetail)
  .put(teachersController.update)
  .delete(teachersController.erase);

module.exports = router;
 