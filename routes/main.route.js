import plugin from "fastify-plugin"
import eventModel from "../models/event.model.js"

async function index(fastify) {
    fastify.get('/', async (_request, reply) => {
        const events = await eventModel.find().lean()
        reply.view('index', { events, index: true })
    })
}

export default plugin(index)