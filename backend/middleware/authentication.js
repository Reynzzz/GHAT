const { Guru } = require('../models');
const { sign, verify } = require('../helper/jwt');

const authentication = async (req, res, next) => {
  try {

    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw { name: 'invalidToken' };
    }

    const access_token = authHeader.split(' ')[1];

    const data = verify(access_token);

    const user = await Guru.findByPk(data.id);
    if (!user) {
      throw { status: 401, name: 'invalidToken' };
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);

    if (error.name === 'invalidToken') {
      return res.status(401).json({
        msg: 'Invalid Token. Please login again.',
      });
    }

    return res.status(500).json({
      msg: 'Internal Server Error',
    });
  }
};

module.exports = authentication;
