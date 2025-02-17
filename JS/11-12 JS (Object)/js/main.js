//! Object  

// [1,2,3] => {key: value}

//! create obj

const object1 = {}
const object2 = new Object()


//! синтаксис

// const objectName = {
//     key: value,
//     key: value,
//     key: value,
//     key: value,
//     key: value,
//     key: value,
//     key: value
// }


// //////////////////////////////////////////////////

const person = {
    firstName: 'Robert',
    lastName: 'Barnabishvili',
    email: 'gmail.com',
    skilss: ['Fron-end', 'Back-end', 'Dev-ops'],
    age: 26
}

const arrPerson = ['Robert','Barnabishvili','gmail.com',['Fron-end', 'Back-end', 'Dev-ops'],26]



// //////////////////////////////////////////////////


//! отримання даних з obj

// console.log(arrPerson[0]);
// console.log('✌️person --->', person);


//*1
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.email);
// console.log(person.skilss);
// console.log(person.age);

//*2
// console.log(person['firstName']);


// const value = 'age'
// let value2 = 'firstName'
// function namefn(){return'skilss'}

// console.log(person.value);

// console.log(person[value]);
// console.log(person[value2]);
// console.log(person[namefn()]);

//! що може бути в обєкті

// const objType = {
//     number: 234234,
//     string: 'string',
//     bool: true,
//     null: null,
//     undefined: undefined,
//     array: [1,2,3,4],
//     object: {id: 1, let:{num: 342}},
//     functionObj: function(){return 'obj'}
// }


// console.log(objType.bool);
// console.log(objType.number);

// console.log(objType.object.let.num);
// console.log(objType.array[3]);


// console.log(objType.functionObj());

//! Робота з object   add , del , edit

// const car = {
//     brand: 'Nissan',
//     model: 'X-Trail',
//     age: 14,
//     engin: 2.0,
//     enginType: 'disel',
//     color: 'broun',
//     carBody: 'jeep'
// }

//! 1 add +++

// car.maxSpeed = 240
// console.log('✌️car --->', car);

//! 2 del ---

// delete car.color
// console.log('✌️car --->', car);


//! 3 edit

// car.carBody = 'Crossover'
// console.log('✌️car --->', car);

//! copy obj

// const car = {
//     brand: 'Nissan',
//     model: 'X-Trail',
//     age: 14,
//     engin: 2.0,
//     enginType: 'disel',
//     color: 'broun',
//     carBody: 'jeep'
// }


// const newCar = car

// newCar.brand = 'BMW'

// console.log('✌️newCar --->', newCar);
// console.log('✌️car --->', car);


//! assign()

// const car = {
//     brand: 'Nissan',
//     model: 'X-Trail',
//     age: 14,
//     engin: 2.0,
//     enginType: 'disel',
//     color: 'broun',
//     carBody: 'jeep'
// }

// const newCar = Object.assign({}, car)


// newCar.color = 'test'

// console.log('✌️newCar --->', newCar);
// console.log('✌️car --->', car);

////////////////////////////////////

// const obj1 = {a: 1, b: 2}
// const obj2 = {b: 2, c: 3}
// const obj3 = {c: 3, d: 4}

// const newObj = Object.assign({}, obj1, obj2, obj3)
// console.log('✌️newObj --->', newObj);

// console.log(Object.assign(obj1, obj2, obj3));
// console.log(Object.assign(obj1, obj2, obj3, {f: 5}));
// console.log(Object.assign(obj1, obj2, obj3, ...[{f: 5},{i: 6},{g: 7}]));

//! перевірка на те чи є така властивісьть в obj   IN

// const car = {
//     brand: 'Nissan',
//     model: 'X-Trail',
//     age: 0,
//     engin: 2.0,
//     enginType: 'disel',
//     color: 'broun',
//     carBody: 'jeep'
// }

// for (const key in car) {
//     console.log('key: ' + key + ': ' + car[key] );
// }

// if('age' in car){
//     console.log('ok');
// }

// if(car.age){
//     console.log('ok');
// }


//! this

// const car = {
//     brand: 'Nissan',
//     model: 'X-Trail',
//     age: 14,
//     engin: 2.0,
//     enginType: 'disel',
//     color: 'broun',
//     carBody: 'jeep',
//     plusAge: function(newAge) {
//         if(newAge > this.age){
//             this.age = newAge
//         } else {
//             console.log('Error');
//         }
//     }
// }


// car.plusAge(15)
// car.plusAge(13)

// console.log('✌️car --->', car);


// const car = {
//     brand: 'Nissan',
//     model: 'X-Trail',
//     age: 14,
//     engin: 2.0,
//     enginType: 'disel',
//     color: 'broun',
//     carBody: 'jeep',
//     plusAge: function(newAge) {
//         if(newAge > this.age){
//             this.age = newAge
//         } else {
//             console.log('Error');
//         }
//     }
// }


// function count(obj) {
//     let suma = 0
//     for (const key in obj) {
//         suma++
//     }
//     return suma
// }
// console.log(count(car));

// Object.keys(car).length



// const arr = [
//     {price: 1},
//     {price: 3},
//     {price: 2},
//     {price: 4},
//     {price: 5},
// ]


// function sortPrice(arr, method) {
//     if(method === 'top'){
//         return arr.sort((a,b)=> a.price - b.price)
//     } else if(method === 'bot'){
//         return arr.sort((a,b)=> b.price - a.price)
//     }
// }

// console.log(sortPrice(arr, 'bot'));
// console.log(sortPrice(arr, 'top'));


// const object = {
//     name1: 1,
//     name2: 2,
//     name3: 3,
//     name4: 4,
// }

// for (const key in object) {
//     console.log(key);
//     console.log(object[key]);
// }

// fetch('https://jsonplaceholder.typicode.com/comments')
//       .then(response => response.json())
//       .then(json => json.forEach(post => {
//         console.log(
//             `
//             Email:${post.email}
//             title:${post.name}
//             Body:${post.body}
//             `
//           )
//       }))

// fetch('https://jsonplaceholder.typicode.com/comments')
//       .then(response => response.json())
//       .then(json => console.log(json))




// const car = {
//     brand: 'Nissan',
//     model: 'X-Trail',
//     age: 14,
//     engin: 2.0,
//     enginType: 'disel',
//     color: 'broun',
//     carBody: 'jeep',
//     radius: {r:18, radius: [17,18,19]},
//     plusAge: function(newAge) {
//         if(newAge > this.age){
//             this.age = newAge
//         } else {
//             console.log('Error');
//         }
//     }
// }

//! 1 не глибоке копіювання
// const copy = Object.assign({}, car)
// copy.engin = 3
// copy.radius.r = 19

// console.log('✌️car --->', car);
// console.log('✌️copy --->', copy);



//! 2 не глибоке копіювання
// const newCopy = {...car}

// newCopy.engin = 3
// newCopy.radius.r = 19

// console.log('✌️car --->', car);
// console.log('✌️copy --->', newCopy);


//! ГЛИБОКЕ КОПІЮВАННЯ

// const car = {
//     brand: 'Nissan',
//     model: 'X-Trail',
//     age: 14,
//     engin: 2.0,
//     enginType: 'disel',
//     color: 'broun',
//     carBody: 'jeep',
//     radius: {r:18, radius: [17,18,19]},
//     plusAge: function(newAge) {
//         if(newAge > this.age){
//             this.age = newAge
//         } else {
//             console.log('Error');
//         }
//     }
// }



// const carCopy = JSON.parse(JSON.stringify(car))


// carCopy.engin = 3
// carCopy.radius.r = 19

// console.log('✌️car --->', car);
// console.log('carObj --->', carCopy);


// const deta = {
//     at: new Date()
// }


// const copy1 = {...deta}

// const copy2 = JSON.parse(JSON.stringify(deta))



// console.log('✌️deta --->', deta.at.getFullYear());
// console.log('✌️copy1 --->', copy1.at.getFullYear());
// console.log('copy2 --->', copy2.at.getFullYear());


////////////////////////////////////////////////////////


// const car = {
//     brand: 'Nissan',
//     model: 'X-Trail',
//     age: 14,
//     engin: 2.0,
//     enginType: 'disel',
//     color: 'broun',
//     carBody: 'jeep',
//     radius: {r:18, radius: [17,18,19]},
//     at: new Date(),
//     test: () => {return 1}
// }


// const carCopy = structuredClone(car)

// carCopy.engin = 3
// carCopy.radius.r = 19

// console.log('✌️car --->', car);
// console.log('✌️carCopy --->', carCopy);
// console.log('✌️carCopy --->', carCopy.at.getFullYear());


//! методи object

// const car = {
//     brand: 'Nissan',
//     model: 'X-Trail',
//     age: 14,
//     engin: 2.0,
//     enginType: 'disel',
//     color: 'broun',
//     carBody: 'jeep',
//     radius: {r:18, radius: [17,18,19]},
//     at: new Date(),
//     test: () => {return 1}
// }
// console.log('✌️car --->', car);

// //! Object.keys() => [kyes]

// const keys = Object.keys(car)
// console.log('✌️keys --->', keys);

// //! Object.values() => [values]

// const values = Object.values(car)
// console.log('✌️values --->', values);

// //! Object.entries() => [[key,value]]

// const entries = Object.entries(car)
// entries.forEach(el => console.log(el[0] + ':' + el[1]))
// console.log('✌️entries --->', entries);

// //! Object.defineProperty()

// const test = Object.defineProperty(car, 'clearance', {
//     value: 250,
//     enumerable: true
// })

// console.log('✌️test --->', test);


// console.log(Object.keys(car).length)

// function addCar(name, model) {
//     if(name.legth === 0 && model === 0){
//         console.log('r')
//         return
//     }
//     const newCar = {name, model}
//     cars.push(newCar)
// }

// addCar()

// const arr = [1,2,3]

// console.log([...arr].sort((a,b)=> b - a));
// console.log(arr);

