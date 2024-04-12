const express = require('express');
const {createSiswa, readAllSiswa, udateSiswa, deleteSiswa} = require('../controllers/siswa.controllers');

const router = express.Router();

router.post('/createSiswa', createSiswa);
router.get('/readAllSiswa', readAllSiswa);
router.post('/udateSiswa', udateSiswa);
router.post('/deleteSiswa', deleteSiswa);

module.exports = router;
