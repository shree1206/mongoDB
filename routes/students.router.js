const express = require('express');
const router = express.Router();
const { studentSelect } = require('../controllers/students.controller');

router.get('/', studentSelect);

module.exports = {
    studentsRouter: router
}

