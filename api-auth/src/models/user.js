const mongoose = require('mongoose') 
const bcryptjs = require('bcryptjs') 

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        unique: true 
    },
    email: { 
        type: String, 
        unique: true },
    password: { 
        type: String, 
        required: true },
    roles: [ 
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'role' }
    ]
}, {
    timestamps: true,
    versionKey: false
})

userSchema.statics.encrypted_password = (password) => {
    const salt = bcryptjs.genSaltSync()
    return bcryptjs.hashSync(password, salt)
}

userSchema.statics.compare_password = (password, received_password) => {
    return bcryptjs.compareSync(password, received_password)
}

export default mongoose.model('user', userSchema)