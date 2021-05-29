import plugin from 'fastify-plugin'
import eventModel from '../models/event.model.js'

/**
 * 
 * @param {import('fastify').FastifyInstance} fastify
 */
async function events(fastify) {
fastify
    .get('/events', async (_request, reply) => {
        const events = await eventModel.find().lean()
        reply.view('events', { events })
    })
    .get('/event/add', (_request, reply) => {
        reply.view('create-event')
    })
    .post('/event/add', (request, reply) => {
        console.log(request.body)
        const event = new eventModel(request.body)
        event.save()
        reply.redirect('/events')
    })
}

export default plugin(events)