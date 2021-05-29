import plugin from 'fastify-plugin'
import eventModel from '../models/event.model'

/**
 * 
 * @param {import('fastify').FastifyInstance} fastify
 */
async function events(fastify) {
fastify
    .get('/events', (request, reply) => {
        const events = eventModel.find()
        reply.view('events')
    })
}

export default plugin(events)