let moment = require('moment');
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, name: 'Jabed',created_at: moment().format('YYYY-MM-DD HH:mm:ss'),updated_at: moment().format('YYYY-MM-DD HH:mm:ss')}),
    knex('users').insert({id: 2, name: 'Sazal',created_at: moment().format('YYYY-MM-DD HH:mm:ss'),updated_at: moment().format('YYYY-MM-DD HH:mm:ss')}),
    knex('users').insert({id: 3, name: 'Rajib',created_at: moment().format('YYYY-MM-DD HH:mm:ss'),updated_at: moment().format('YYYY-MM-DD HH:mm:ss')}) //2016-06-15 21:24:17
  );
};
