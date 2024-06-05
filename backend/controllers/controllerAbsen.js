const {Guru,guruAbsen,Absensi,gurujaga,kelas} = require('../models/index')
const {compare} = require('../helper/bcrypt')
const {sign} = require('../helper/jwt')
const { Op } = require('sequelize');
class Controller {
    static async Login(req,res) {
        try {
            const {username,password} = req.body
            const user = await Guru.findOne({
                where :{
                    username
                }
            })
            if(!user) {
                throw {
                    name : 'invalid login'
                }
            }else {
                let comparePassowrd = compare(password,user.password)
                if(!comparePassowrd) {
                    throw {
                        name: 'invalid login'
                    }
                } else {
                    const {id,username} = user
                    let token = sign({
                        id,
                        username
                    })
                    res.status(201).json({
                        access_token : token,
                        user
                    })
                }
            }
        } catch (error) {
            console.log(error);
        //    next(error)
        }
    }
    static async guruAbsen(req,res) {
        try {
            const { guruId, kelasId } = req.body;
            const foto_absen = req.file.path;
            const tanggalAbsen = new Date();
            
            const absensi = await Absensi.create({ guruId, kelasId, foto_absen, tanggalAbsen, status: 'Pending' });
            res.status(201).json(absensi);
          } catch (error) {
            if (error instanceof multer.MulterError) {
              // Multer-specific errors
              return res.status(400).json({ error: err.message });
            } else if (error) {
              // Other errors
              return res.status(400).json({ error: err.message });
            }else {
              console.error('Error creating absensi:', error);
              res.status(500).json({ error: 'Internal Server Error' });

            }
          }
    }
    static async getAbsensi(req, res) {
        try {
          const guruIdToExclude = req.user.id;
          const absensis = await Absensi.findAll({
            where: {
              guruId: {
                [Op.ne]: guruIdToExclude
              }
            },
            include: [
              {
                model: Guru,
                as: 'Guru',
              },
              {
                model: kelas,
                as: 'Kelas',
              }
            ]
          });
          res.status(200).json(absensis);
        } catch (error) {
          console.error('Error fetching absensi:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      static async getAbsensiAdmin(req, res) {
        try {
          const absensis = await Absensi.findAll({
            include: [
              {
                model: Guru,
                as: 'Guru',
              },
              {
                model: kelas,
                as: 'Kelas',
              }
            ]
          });
          res.status(200).json(absensis);
        } catch (error) {
          console.error('Error fetching absensi:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
    static async  validasiAbsen(req, res) {
        try {
          const { absensiId} = req.body;
      
          const absensi = await Absensi.findByPk(absensiId);
          if (!absensi) {
            return res.status(404).json({ error: 'Absensi not found' });
          }
      
          absensi.status = 'Success';
          await absensi.save();
      
          res.status(200).json(absensi);
        } catch (error) {
          console.error('Error validating absensi:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
}

module.exports = Controller