import { createServer, IncomingMessage, ServerResponse } from 'http';
import { readFile } from 'fs';
 
export function startServer(port: number) {
  // TODO: What do you have to change to make our response be interpreted by the browser as HTML?
  const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    readFile('index.html', function (err, data) {
      response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
      response.write(data);
      response.end();
  });
  });
  
  server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
  });

  return server;
}