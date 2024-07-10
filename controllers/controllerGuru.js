
 const {Guru,guruAbsen} = require('../models/index')
class Controller {
    static async getGuru(req,res) {
        try {
            const data = await Guru.findAll({
                include : [
                    guruAbsen
                ]
            })
        res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
         
    } 
    static async postGuru(req,res) {
        try {
            const {name,Golongan,umur,jenisKelamin} = req.body
            const data = await Guru.create({
                name,Golongan,umur,jenisKelamin
            })
            res.status(201).json(data)
        } catch (error) {
            console.log(error);
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
            
            const {name,Golongan,umur,jenisKelamin} = req.body
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
                    jenisKelamin
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