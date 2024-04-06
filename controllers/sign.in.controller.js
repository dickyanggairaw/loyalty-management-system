const { comparePassword } = require('../helpers');
const { generateToken } = require('../helpers/jwt.helper');
const {
  Member
} = require('../models');
const { STATUS_OK } = require('../utils/status.code.util');

class SignInController {
  static async signIn(req, res, next) {
    try {
      const {
        email, 
        password
      } = req.body
      const regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if(!regularExpression.test(password)) {
        throw { message: "password should contain atleast one number and one special character"};
      }

      const result = await Member.findOne({
        where: {
          email
        },
        attributtes: ['id', 'password', 'email']
      })

      if(!result) throw {message: 'wrong email or password'}

      const checkPassword = await comparePassword(password, result.password)

      if(!checkPassword) throw {message: 'wrong email or password'}
      const token = generateToken(result)
      res.status(STATUS_OK).json({
        token
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = SignInController