//import knex from 'knex';
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'hapi_demo'
  }
});
const users =[
  {
    method: 'GET',
    path: '/api/v1/users',
    config: {
      description: 'get users',
      handler: function (request, reply){
        reply(knex.select('*').from('users'));
      }
    }
  }
];
export default {
  users
};
