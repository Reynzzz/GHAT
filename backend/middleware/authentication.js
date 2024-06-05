const {Guru} = require('../models')
const {sign,verify} = require('../helper/jwt')

const authentication = async (req,res,next) =>{
  try {
    const {access_token} = req.headers
    if(!access_token) {
        throw {name: 'inavalidToken'}
    }

    const data = verify(access_token)
    const user = await Guru.findByPk(data.id)
    if(!user) {
        throw {status : 401, name : 'inavalidToken'}
    }
    req.user = user
    next()
  } catch (error) {
    console.log(error);
    if(error.name === 'inavalidToken') {
        res.status(401).json({
            msg : 'Please Login'
        })
    }
  }
}

module.exports = authentication