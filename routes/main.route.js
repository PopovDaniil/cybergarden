import plugin from "fastify-plugin"

async function index(fastify) {
    fastify.get('/', (_request, reply) => {
        reply.view('index', { content: 'Test'})
    })
}

export default plugin(index)