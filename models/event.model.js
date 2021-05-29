import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    stack: String,
    place: String,
    date: Date,
    permissions: {
        minLevel: Number,
        online: Boolean,
        under18: Boolean
    }
})

export default mongoose.model('Event', eventSchema)