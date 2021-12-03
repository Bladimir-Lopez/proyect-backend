const { Router } = require('express');
const router = Router();

const {getAguas, getAgua, createAgua, updateAgua, deleteAgua} = require('../controllers/agua.controller');

router.route('/')
    .get(getAguas)
    .post(createAgua)
router.route('/:id')
    .get(getAgua)
    .put(updateAgua)
    .delete(deleteAgua)

module.exports = router;