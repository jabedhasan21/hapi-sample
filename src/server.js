import Hapi from 'hapi';

import userRout from './app/routes/user-route.js';

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.register([
  require('hapi-async-handler'),
], (error) => {
  if(error)
  console.log(error);
});

server.register([
  {
    register: require('hapi-bookshelf-models'),
    options: {
      knex: {
        client: 'mysql',
        connection: {
          host: '127.0.0.1',
          user: 'root',
          password: 'root',
          database: 'hapi_demo'
        }
      },
      plugins: ['registry'], // Required
      models: 'src/app/models/'
    }
  }
], function (err) {
  // An error will be available here if anything goes wrong
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    /*handler: function (request, reply) {

        return reply('hello world 555 888');
    }*/
    handler: {
      // Define a property called "async" that's an async function
      async async(request, reply) {
        // instapromise gives you promises from methods with Node-style callbacks
        return reply('hello world 555 888 async');
      },
    },
});

server.route(userRout.users);

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
