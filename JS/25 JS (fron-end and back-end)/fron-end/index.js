const API_URL = 'http://localhost:3333/cars'

async function getAllCars(){
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log('All cars', data);
}

async function getCarByBrand(brand){
    const response = await fetch(`${API_URL}?brand=${brand}`)//query
    const data = await response.json()
    console.log('get car by brand', data);
}

async function getCarById(id){
    const response = await fetch(`${API_URL}/${id}`)
    const data = await response.json()
    console.log('GET car by id', data);
}

async function postAddCar(brand, power){
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({brand, power})
    })
    const data = await response.json()
    console.log('post add new Car', data);
}

async function deleteCar(id){
    const response = await fetch(`${API_URL}/${id}`,{
        method: 'DELETE'
    })
    const data = await response.json()
    console.log('DELETE Car BY', id , data);
}


async function editCar(id, brand, power){
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({brand, power})
    })
    const data = await response.json()
    console.log('EDIT Car', data);
}
//! get 
getAllCars() //! /cars
getCarByBrand('MB')//!query param /cars?brand=MB
getCarByBrand('BMW')//!query param /cars?brand=BMW
getCarById('1')//!uri param /cars/1

//! /api/users?min=0&max=50&name='a'
//! /api/users?min=50&max=100&name='a'


//! post
//! post  /cars

// postAddCar('Renault', 136)
// postAddCar('HONDA', 136)
// postAddCar('HONDA', 136)

//! delete  /cars/id
deleteCar(1)

//! update put path

editCar(3, 'Toyota', 250)