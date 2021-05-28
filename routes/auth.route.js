import plugin from 'fastify-plugin'
/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 */
async function auth(fastify) {
    fastify.get('/register', (_request, reply) => {
        reply.view('register')
    })
    fastify.get('/login', (_request, reply) => {
        reply.view('login')
    })
}

export default plugin(auth)