const { Router } = require('express');
const router = Router();

const {getJabones, getJabon, createJabon, updateJabon, deleteJabon} = require('../controllers/jabon.controller');

router.route('/')
    .get(getJabones)
    .post(createJabon)
router.route('/:id')
    .get(getJabon)
    .put(updateJabon)
    .delete(deleteJabon)

module.exports = router;