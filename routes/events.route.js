import plugin from 'fastify-plugin'
import eventModel from '../models/event.model.js'

/**
 * 
 * @param {import('fastify').FastifyInstance} fastify
 */
async function events(fastify) {
fastify
    .get('/events', (_request, reply) => {
        const events = eventModel.find()
        reply.view('events')
    })
    .get('/event/test', (_request, reply) => {
        (new eventModel({name: 'Test', description: 'Test'})).save();
        reply.send("OK")
    })
}

export default plugin(events)