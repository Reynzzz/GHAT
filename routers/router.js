const express = require("express");
const router = express.Router();
const ControllerGuru = require('../controllers/controllerGuru')
const ControllerKelas = require('../controllers/controllerKelas')
router.get('/Guru',ControllerGuru.getGuru)
router.get('/Guru/:id',ControllerGuru.getGuruById)
router.post('/Guru',ControllerGuru.postGuru)
router.put('/Guru/:id',ControllerGuru.updateGuru)
router.delete('/Guru/:id',ControllerGuru.deletedGuru)

router.get('/kelas',ControllerKelas.getKelas)
router.get('/kelas/:id',ControllerKelas.getKelasById)
router.post('/kelas',ControllerKelas.postKelas)
router.put('/kelas/:id',ControllerKelas.updateKelas)
router.delete('/kelas/:id',ControllerKelas.deletedKelas)
module.exports = router