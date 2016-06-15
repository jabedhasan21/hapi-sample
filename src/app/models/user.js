var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'hapi_demo',
    charset  : 'utf8'
  }
});
var bookshelf = require('bookshelf')(knex);
const User = bookshelf.Model.extend({
  tableName: 'users'
});
export default {
  User
}
