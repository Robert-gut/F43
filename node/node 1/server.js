const http = require('http')

const port = 3001

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})

  response.end('Hello for Node.js Backend!')
})

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
})
