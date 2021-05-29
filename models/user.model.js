import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    login: String,
    password: String,
    name: String,
    email: String,
    level: Number,
    socialLink: String,
    githubLink: String,
    stack: String,
    hacksCount: Number
})

export default mongoose.model('User', userSchema)