const jwt = require('jsonwebtoken')

import config from '../config'
import User from '../models/user'
import Role from '../models/role'

export const verify_token = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token']
        if (!token) {
            return res.status(403).json({message: 'No token provided.'})
        }
        const decoded = jwt.verify(token, config.SECRET)
        req.user_id = decoded.id
        const user = await User.findById(decoded.id)
        if (!user) {
            return res.status(404).json({message: 'no user found.'})
        }
        
        next()
    } catch(error) {
        console.log(error)
        return res.status(401).json({message: 'Unauthorized'})
    }
}

export const is_admin = async (req, res, next) => {
    const user = await User.findById(req.user_id)
    const roles = await Role.find({_id: {$in: user.roles}})

    for (let i=0; i<roles.length; i++) {
        if (roles[i].name == 'admin') {
            next()
            return 
        }
    }
    return res.status(403).json({message: 'Requer admin role.'})    
}

export const is_moderator = async (req, res, next) => {
    const user = await User.findById(req.user_id)
    const roles = await Role.find({_id: {$in: user.roles}})

    for (let i=0; i<roles.length; i++) {
        if (roles[i].name == 'moderator') {
            next()
            return 
        }
    }
    return res.status(403).json({message: 'Requer moderator role.'})    
}