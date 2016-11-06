const all = {
  async: async function (request, reply) {
    try {
      const data =  await request.server.plugins.bookshelf.model('User')
        .collection()
        .query('where', 'deleted_at', null)
        .fetch();
      if(data === null || data === undefined) reply([]).code(404);
      else  reply(data).code(200);
    } catch (err) {
      reply('Not found').code(404);
    }
  }
};

export default {
  all
};
