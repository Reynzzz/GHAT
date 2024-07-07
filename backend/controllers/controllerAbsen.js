const {
  Guru,
  guruAbsen,
  Absensi,
  gurujaga,
  kelas,
} = require("../models/index");
const { compare } = require("../helper/bcrypt");
const { sign } = require("../helper/jwt");
const { Op } = require("sequelize");
const fs = require("fs");
const multer = require("multer");
class Controller {
  static async Login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await Guru.findOne({
        where: {
          username,
        },
      });
      if (!user) {
        throw {
          name: "invalid login",
        };
      } else {
        let comparePassowrd = compare(password, user.password);
        if (!comparePassowrd) {
          throw {
            name: "invalid login",
          };
        } else {
          const { id, username } = user;
          let token = sign({
            id,
            username,
          });
          res.status(201).json({
            access_token: token,
            user,
          });
        }
      }
    } catch (error) {
      console.log(error);
      //    next(error)
    }
  }
  static async guruAbsen(req, res) {
    try {
      const { guruId, kelasId, jadwalKelas } = req.body;
      console.log(req.body, "ni log");
      const absensi = await Absensi.create({ guruId, kelasId, jadwalKelas });
      // console.log(absensi);
      res.status(201).json(absensi);
    } catch (error) {
      if (error) {
        return res.status(400).json({ error: err.message });
      } else {
        console.error("Error creating absensi:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  }

  static async updateFotoAbsen(req, res) {
    try {
      const { id } = req.params;
      const foto_absen = req.file.path;
      const tanggalAbsen = new Date();

      const absensi = await Absensi.findByPk(id);

      if (!absensi) {
        fs.unlinkSync(foto_absen);
        return res.status(404).json({ error: "Absensi record not found" });
      }

      absensi.foto_absen = foto_absen;
      absensi.statusAbsen = true;
      absensi.tanggalAbsen = tanggalAbsen;
      await absensi.save();

      res.status(200).json(absensi);
    } catch (error) {
      console.log(error, "ni error");

      if (error instanceof multer.MulterError) {
        return res.status(400).json({ error: error.message });
      } else if (error) {
        return res.status(400).json({ error: error.message });
      } else {
        console.error("Error updating foto_absen:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  }

  static async getAbsensiSchedule(req, res) {
    try {
      const guruId = req.user.id;
      const absensis = await Absensi.findAll({
        where: {
          guruId: guruId,
        },
        include: [
          {
            model: Guru,
            as: "Guru",
          },
          {
            model: kelas,
            as: "Kelas",
          },
        ],
      });
      res.status(200).json(absensis);
    } catch (error) {
      console.error("Error fetching absensi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getAbsensi(req, res) {
    try {
      const guruIdToExclude = req.user.id;
      const absensis = await Absensi.findAll({
        where: {
          guruId: {
            [Op.ne]: guruIdToExclude,
          },
        },
        include: [
          {
            model: Guru,
            as: "Guru",
          },
          {
            model: kelas,
            as: "Kelas",
          },
        ],
      });
      res.status(200).json(absensis);
    } catch (error) {
      console.error("Error fetching absensi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async getAbsensiAdmin(req, res) {
    try {
      const absensis = await Absensi.findAll({
        include: [
          {
            model: Guru,
            as: "Guru",
          },
          {
            model: kelas,
            as: "Kelas",
          },
        ],
      });
      res.status(200).json(absensis);
    } catch (error) {
      console.error("Error fetching absensi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async validasiKelas(req, res) {
    try {
      const { id } = req.params;
      const absensi = await Absensi.findByPk(id);

      if (!absensi) {
        return res.status(404).json({ error: "Absensi record not found" });
      }
      absensi.statusKelas = true;
      await absensi.save();

      res.status(200).json({
        msg: "Succes validasi",
        data: absensi,
      });
    } catch (error) {
      if (error instanceof multer.MulterError) {
        return res.status(400).json({ error: error.message });
      } else if (error) {
        return res.status(400).json({ error: error.message });
      } else {
        console.error("Error updating foto_absen:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  }
  static async validasiGuruJaga(req, res) {
    try {
      const { id } = req.params;
      const absensi = await Absensi.findByPk(id);

      if (!absensi) {
        return res.status(404).json({ error: "Absensi record not found" });
      }
      absensi.statusJaga = true;
      await absensi.save();

      res.status(200).json({
        msg: "Succes validasi",
        data: absensi,
      });
    } catch (error) {
      if (error instanceof multer.MulterError) {
        return res.status(400).json({ error: error.message });
      } else if (error) {
        return res.status(400).json({ error: error.message });
      } else {
        console.error("Error updating foto_absen:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  }
}

module.exports = Controller;
