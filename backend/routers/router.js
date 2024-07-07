const express = require("express");
const router = express.Router();
const ControllerGuru = require("../controllers/controllerGuru");
const ControllerKelas = require("../controllers/controllerKelas");
const ControllerAbsen = require("../controllers/controllerAbsen");
const authentication = require("../middleware/authentication");
const { upload, compressImage } = require("../helper/multer");
const errorMulter = require("../middleware/errorMulter");
router.get("/Guru", ControllerGuru.getGuru);
router.get("/Guru/:id", ControllerGuru.getGuruById);
router.post("/Guru", ControllerGuru.postGuru);
router.put("/Guru/:id", ControllerGuru.updateGuru);
router.delete("/Guru/:id", ControllerGuru.deletedGuru);

router.get("/kelas", ControllerKelas.getKelas);
router.get("/kelas/:id", ControllerKelas.getKelasById);
router.post("/kelas", ControllerKelas.postKelas);
router.put("/kelas/:id", ControllerKelas.updateKelas);
router.delete("/kelas/:id", ControllerKelas.deletedKelas);

//controllerAbsen
router.post("/login", ControllerAbsen.Login);
router.use(authentication);
router.post("/absen", ControllerAbsen.guruAbsen);
router.get("/schedule", ControllerAbsen.getAbsensiSchedule);
router.put(
  "/absen/:id",
  upload.single("foto_absen"),
  compressImage,
  errorMulter,
  ControllerAbsen.updateFotoAbsen
);
router.get("/absen", ControllerAbsen.getAbsensi);
router.put("/validasiGuruJaga/:id", ControllerAbsen.validasiGuruJaga);
router.put("/validasiKelas/:id", ControllerAbsen.validasiKelas);
module.exports = router;
