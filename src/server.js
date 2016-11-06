import Hapi from 'hapi';

import userRout from './app/routes/user-route.js';

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {

        return reply('hello world 555 888');
    }
});

server.route(userRout.users);

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
