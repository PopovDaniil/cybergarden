import fastify from "fastify";
import fastifyStatic from "fastify-static";
import process from "process"
import pointOfView from "point-of-view";
import handlebars from "handlebars";

import mainRoute from "./routes/main.route.js"
import authRoute from "./routes/auth.route.js";

fastify()
.register(fastifyStatic, {
    root: process.cwd() + '/public'
})
.register(pointOfView, {
    engine: {
        handlebars: handlebars
    },
    root: 'views',
    viewExt: 'view.hbs',
    layout: 'layouts/layout'
})
.register(mainRoute)
.register(authRoute)

.listen(3000)
