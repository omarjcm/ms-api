import mongoose, { Schema } from "mongoose"

const roleSchema = new Schema({
    name: String
}, {
    versionKey: false
})

export default mongoose.model('role', roleSchema)