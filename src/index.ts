import { createServer, IncomingMessage, ServerResponse } from 'http';
 
const PORT = 9999;
 
// TODO: What do you have to change to make our response be interpreted by the browser as HTML?
const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('<h1>Hello, world!</h1><p>What a great day today!</p>');
  response.end();
});
 
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.code != 'FOO') {
    throw error;
  }
})