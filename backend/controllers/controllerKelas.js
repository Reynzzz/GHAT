
const {kelas,kelasAbsen,Absensi,Guru} = require('../models/index')
class Controller {
    static async getKelas(req,res) {
        try {
            // console.log(kelas);
            const data = await kelas.findAll();
        res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
         
    } 
    static async postKelas(req,res) {
        try {
            const {name} = req.body
            const data = await kelas.create({
                name
            })
            res.status(201).json(data)
        } catch (error) {
            console.log(error);
        }
    }
    static async deletedKelas(req,res) {
        try {
            const {id} = req.params
            const data = await kelas.findOne({
                where : {
                    id : req.params.id
                }
            })
            if (!data) {
                throw {
                    name : 'kelas not found'
                }
            }
            await kelas.destroy({
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
    static async getKelasById(req,res) {
        try {
            const data = await kelas.findOne({
                where : {
                    id : req.params.id
                },
                include: [{
                    model: kelasAbsen,
                    as: 'kelasAbsens' 
                  }]
            })
            if(!data) {
                throw {
                    name : 'kelas not found'
                }
            }
            res.status(200).json(data)
         } catch (error) {
            console.log(error);
        }
    }
    static async updateKelas(req,res) {
        try {
            
            const {name} = req.body
            const {id} = req.params
            const data = await kelas.findOne({
                where : {
                    id : req.params.id
                }
            })
            if (!data) {
                throw {
                    name : 'kelas not found'
                }
            }
            await kelas.update({
                    name,
                  
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