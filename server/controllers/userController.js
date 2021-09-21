const ApiError = require('../error/ApiError')
const bcrypr = require('bcrypt') // To hash passwords and not store them in a database
const jwt = require('jsonwebtoken')
const {User,Basket} = require('../models/models')

const generateJwt = (id,email,role) => { 
     // 2 parameters = secret key ; 3 parameters = lifetime token
    return jwt.sign({id,email, role}, process.env.SECRET_KEY , {expiresIn:'24h'})
}

class UserController {
    async registration(req, res, next){
        const {email,password,role} = req.body
        if(!email || !password ){
            return  next(ApiError.badRequest('Некорректный E-mail или password'))
        }
        const candiate = await User.findOne({where:{email}})
        if(candiate){
            return  next(ApiError.badRequest('Пользователь с таким E-mail уже существует'))
        }
        const hashPassword = await bcrypr.hash(password,5)
        const user = await User.create({email, role, password:hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)  
        return res.json({token})
    }

    async login(req, res, next){
        const {email,password} = req.body
        const user =  await User.findOne({where:{email}})
        if(!user){
            return next(ApiError.internal('Пользователя с таким E-mail не существует'))
        }
        let comparePassword = bcrypr.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async checkAuth(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()