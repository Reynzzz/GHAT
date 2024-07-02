
 const {Guru,guruAbsen,Absensi,gurujaga,kelas} = require('../models/index')

const { encryptPassword } = require('../helper/crpyto');
class Controller {
    static async getGuru(req,res,next) {
        // console.log(req.user.id,'ni log');
        try {
            const gurus = await Guru.findAll();
            res.status(200).json(gurus);
          } catch (error) {
            console.error("Error occurred:", error);
            if (!res.headersSent) {
              res.status(500).json({ error: 'Internal Server Error' });
            }
          }
         
    } 
    static async postGuru(req,res) {
        try {
            const { username, Golongan, umur, jenisKelamin, password,role } = req.body;
    const newGuru = await Guru.create({
      username,
      Golongan,
      umur,
      jenisKelamin,
      password,
      role
    });
    // console.log(newGuru);
    res.status(201).json(newGuru);
        } catch (error) {
            console.log(error);
            if (error.name === 'SequelizeUniqueConstraintError') {
                let errors = error.errors.map(el => {
                    return { message: el.message }
                })
                res.status(400).json(errors)
            }
        }
    }
    static async deletedGuru(req,res) {
        try {
            const {id} = req.params
            const data = await Guru.findOne({
                where : {
                    id : req.params.id
                }
            })
            if (!data) {
                throw {
                    name : 'Guru not found'
                }
            }
            await Guru.destroy({
                where : {
                    id
                }
            })
            res.status(200).json({
                msg : 'deleted succesfully'
            })
        } catch (error) {
            console.log(error);
        }
    }
    static async getGuruById(req,res) {
        try {
            const data = await Guru.findOne({
                where : {
                    id : req.params.id
                }
            })
            if(!data) {
                throw {
                    name : 'Guru not found'
                }
            }
            res.status(200).json(data)
         } catch (error) {
            console.log(error);
        }
    }
    static async updateGuru(req,res) {
        try { 
            const {name,Golongan,umur,jenisKelamin,password} = req.body
            const {id} = req.params
            const data = await Guru.findOne({
                where : {
                    id : req.params.id
                }
            })
            if (!data) {
                throw {
                    name : 'Guru not found'
                }
            }
            await Guru.update({
                    name,
                    Golongan,
                    umur,
                    jenisKelamin,
                    password
            },{
                where : {
                    id
                }
            })
            res.status(200).json({
                msg : 'updated successfuly'
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Controller