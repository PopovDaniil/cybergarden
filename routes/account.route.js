import plugin from 'fastify-plugin'
import userModel from '../models/user.model.js'

/**
 * 
 * @param {import('fastify').FastifyInstance} fastify
 */
async function account(fastify) {
    fastify
    .get('/account', (request, reply) => {
        const userId = request.session.get('_id')
        const user = userModel.findById(userId)
        reply.view('account', user) 
    })
}

export default plugin(account)