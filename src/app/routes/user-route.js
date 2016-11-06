import userController from '.././controllers/user-controller';
const users =[
  {
    method: 'GET',
    path: '/api/v1/users',
    config: {
      description: 'get users',
        handler: userController.all
      }
    }
];
export default {
  users
};
