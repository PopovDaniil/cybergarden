import plugin from 'fastify-plugin'

async function account(fastify) {
    fastify
    .get('/account', (request, reply) => {
        reply.view('account')
    })
}

export default plugin(account)