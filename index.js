import fastify from "fastify";
import fastifyStatic from "fastify-static";
import process from "process"
import pointOfView from "point-of-view";
import handlebars from "handlebars";

import databasePlugin from "./plugins/database.plugin.js";
import mainRoute from "./routes/main.route.js"
import authRoute from "./routes/auth.route.js";
import accountRoute from "./routes/account.route.js";
import eventsRoute from "./routes/events.route.js";

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
.register(databasePlugin)
.register(mainRoute)
.register(authRoute)
.register(accountRoute)
.register(eventsRoute)

.listen(3000)
