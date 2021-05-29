import plugin from 'fastify-plugin'
import formbody from 'fastify-formbody'
import session from 'fastify-secure-session'
import userModel from '../models/user.model.js'
/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 */
async function auth(fastify) {
    fastify
        .register(formbody)
        .register(session, {
            secret: 'gt2&hjk0axokj5__e3fjioksjgfdbckpdl'
        })
        .get('/register', (_request, reply) => {
            reply.view('register', { menu: false })
        })
        .get('/login', (_request, reply) => {
            reply.view('login')
        })
        .post('/register', {
            schema: {
                body: {
                    type: 'object',
                    required: ['login', 'password', 'name', 'email', 'level', 'socialLink', 'githubLink', 'hacksCount'],
                    properties: {
                        login: { type: 'string' },
                        password: { type: 'string' },
                        name: { type: 'string' },
                        email: { type: 'string' },
                        level: { type: 'number' },
                        socialLink: { type: 'string' },
                        githubLink: { type: 'string' },
                        hacksCount: { type: 'number' }
                    }
                }
            }
        }, (request, reply) => {
            console.log(request.body)
            const user = new userModel(request.body)
            user.save()
            reply.redirect('/')
        })
        .post('/login', {
            schema: {
                body: {
                    type: 'object',
                    required: ['login', 'password'],
                    properties: {
                        login: { type: 'string' },
                        password: { type: 'string' }
                    }
                }
            }
        }, async (request, reply) => {
            const { login, password } = request.body;
            const user = await userModel.findOne({ login, password }).lean()
            console.log(user);
            if (user) {
                request.session.set('_id', user.id)
                reply.redirect('/account')
            } else {
                reply.redirect('/')
            }
        })
        .get('/logout', (request, reply) => {
            request.session.delete()
            reply.redirect('/')
        })
}

export default plugin(auth)