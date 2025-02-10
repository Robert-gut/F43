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

const car = {
    brand: 'Nissan',
    model: 'X-Trail',
    age: 14,
    engin: 2.0,
    enginType: 'disel',
    color: 'broun',
    carBody: 'jeep',
    plusAge: function(newAge) {
        if(newAge > this.age){
            this.age = newAge
        } else {
            console.log('Error');
        }
    }
}


car.plusAge(15)
car.plusAge(13)

console.log('✌️car --->', car);