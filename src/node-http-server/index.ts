import { createServer, IncomingMessage, ServerResponse } from 'http';
 
export function startServer(port: number) {
  // TODO: What do you have to change to make our response be interpreted by the browser as HTML?
  const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('<h1>Hello, world!</h1><p>What a great day today!</p>');
    response.end();
  });
  
  server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
  });

  return server;
}