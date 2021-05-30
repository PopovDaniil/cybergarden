import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    login: String,
    password: String,
    name: String,
    email: String,
    level: {
        type: String,
        get: level => (level == 1) ? 'Junior' : (level == 2) ? 'Middle' : 'Senior'
    },
    socialLink: String,
    githubLink: String,
    stack: String,
    hacksCount: Number
})

export default mongoose.model('User', userSchema)