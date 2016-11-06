# hapi-sample
This is a hapi sample project.

# nodemon
Monitor for any changes in your node.js application and automatically restart the server.

 **Config:** Added this code in package file in `scripts` scope.
 ```
"dev": "node_modules/.bin/nodemon -w src  src/index.js"
```
Run our application using this command `npm run dev`.

# hapi-async-handler
Adds support for ES7 async functions to hapi route handlers
Registering the Plugin
```
var server = new Hapi.Server();
server.register([
  require('hapi-async-handler'),
], (error) => { ... });
```
