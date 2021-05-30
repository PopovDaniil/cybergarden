import plugin from "fastify-plugin"
import eventModel from "../models/event.model.js"
import userModel from "../models/user.model.js"

/**
 * 
 * @param {import("fastify").FastifyInstance} fastify 
 */
async function index(fastify) {
    fastify.get('/', async (request, reply) => {
        const events = await eventModel.find().lean()
        const userId = await request.session.get('_id')
        const user = await userModel.findById(userId)
        console.log(user);
        reply.view('index', { events, index: true, user })
    })
}

export default plugin(index)