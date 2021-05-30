import plugin from 'fastify-plugin'
import userModel from '../models/user.model.js'

/**
 * 
 * @param {import('fastify').FastifyInstance} fastify
 */
async function account(fastify) {
    fastify
    .get('/account', async (request, reply) => {
        const userId = request.session.get('_id')
        const user = await userModel.findById(userId).lean()
        console.log(user);
        reply.view('account', { user }) 
    })
}

export default plugin(account)