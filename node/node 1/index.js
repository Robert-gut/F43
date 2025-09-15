const http = require('http')

let cars = [
  {id: 1, brand: 'Ford', model: 'Focus', year: 2018},
  {id: 2, brand: 'Honda', model: 'Civic', year: 2020},
  {id: 3, brand: 'Tasla', model: 'Model 3', year: 2022},
]

const port = 3000

const server = http.createServer((request, response) => {
  const url = request.url
  // const path = parsedUrl.pathname
  // const query = parsedUrl.query
  const method = request.method

  response.setHeader('Content-Type', 'application/json')

  // GET ЧИТАНН
  if(url === '/cars' && method === 'GET'){
    response.end(JSON.stringify(cars))
  }

  //POST  СТВОРЕННЯ
  else if(url === '/cars' && method === 'POST'){
    let body = ''
    request.on('data', chunk => {
      body += chunk.toString()
    })
    request.on('end', () => {
      const newCar = JSON.parse(body)
      newCar.id = cars.length + 1
      cars.push(newCar)
      response.statusCode = 201
      response.end(JSON.stringify(newCar))
    })
  }

  //PUT оновлення

  else if(url.startsWith('/cars/') && method === 'PUT'){
    const id = parseInt(url.split('/')[2])
    let body = ''
    request.on('data', chunk => {
      body += chunk.toString()
    })
    request.on('end', () => {
      const updatedCarData = JSON.parse(body)
      const carIndex = cars.findIndex(c => c.id === id)
      if(carIndex !== -1){
        cars[carIndex] = {...cars[carIndex], ...updatedCarData}
        response.statusCode = 201
        response.end(JSON.stringify({message: 'Car updeted'}))
      }else {
        response.statusCode = 404
        response.end(JSON.stringify({message: 'Car not found'}))
      }
    })
  }

  //DELETE 
  else if(url.startsWith('/cars/') && method === 'DELETE'){
    const id = parseInt(url.split('/')[2])
    const initialLength = cars.length;
    cars = cars.filter(car => car.id !== id)
    if(cars.length < initialLength){
      response.end(JSON.stringify({message: 'Car deleted'}))
    }else{
      response.statusCode = 404
      response.end(JSON.stringify({message: 'Car not found'}))
    }
  }


})

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
})