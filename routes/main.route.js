import plugin from "fastify-plugin"
import eventModel from "../models/event.model.js"

/**
 * 
 * @param {import("fastify").FastifyInstance} fastify 
 */
async function index(fastify) {
    fastify.get('/', async (request, reply) => {
        const events = await eventModel.find().lean()
        const userId = await request.session.get('_id')
        console.log(request.session);
        reply.view('index', { events, index: true, userId })
    })
}

export default plugin(index)