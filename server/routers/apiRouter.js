const express = require('express');
const ComputerController = require('../controllers/ComputerController');
const router = express.Router();

router.get('/', ComputerController.getComputerParts, (req, res) => {
  // console.log('res.locals.parts', res.locals.parts);
  res.status(200).json(res.locals.parts);
});

router.post('/', ComputerController.addComputerParts, (req, res) => {
  res.status(200).json(res.locals.parts);
});

router.put('/', ComputerController.updateComputerParts, (req, res) => {
  res.status(200).json(res.locals.update);
});

router.delete('/', ComputerController.deleteComputerParts, (req, res) => {
  res.status(200).json(res.locals.delete);
});

module.exports = router;
