import plugin from 'fastify-plugin'
import mongoose from 'mongoose'
/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 */
async function db(fastify) {
    const uri = 'mongodb+srv://root:root@cluster0.gnccq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    const db = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    fastify.decorate('db', db)
}

export default plugin(db);  