const http = require('http')
const url = require('url')

const port = process.env.PORT || 3333

const db = {
    cars: [
        {id:1, brand: 'MB', power: 200},
        {id:2, brand: 'BMW', power: 300},
        {id:3, brand: 'Audi', power: 400},
        {id:4, brand: 'Mazda', power: 194},
    ]
}


const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type')

    if(req.method === 'OPTIONS'){
        res.writeHead(204)
        res.end()
        return
    }

    const parsedUrl = url.parse(req.url, true)
    const method = req.method
    const path = parsedUrl.pathname
    const query = parsedUrl.query
    const id = path.split('/')[2]
    

    if(method === 'GET' && path === '/cars'){
        if(!query.brand){
            res.writeHead(200)
            res.end(JSON.stringify(db.cars))
        }else {
            const filteredCars = db.cars.find(car => car.brand.includes(query.brand))
            res.writeHead(200)
            res.end(JSON.stringify(filteredCars))
        }
        return
    }

    if(method === 'GET' && path.startsWith('/cars/')){
        const car = db.cars.find(car => car.id === +id)
        if(!car){
            res.writeHead(404)
            res.end()
            return
        }
        res.writeHead(200)
        res.end(JSON.stringify(car))
        return
    }

    if(method === 'POST' && path === '/cars'){
        let body = ''
        req.on('data', chunk => {body += chunk})
        req.on('end', () => {
            const {brand, power} = JSON.parse(body)
            if(!brand || !power){
                res.writeHead(400)
                res.end()
                return
            }
            const newCar = {id: db.cars.length + 1, brand, power}
            db.cars.push(newCar)
            res.writeHead(201)
            res.end(JSON.stringify(newCar))
        })
        return
    }


    res.writeHead(404)
    res.end()

})

server.listen(port, ()=> console.log(`Server is running on port ${port}`))