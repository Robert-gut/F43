//! масиви Array

// const arr = new Array()
// const arr2 = []

// console.log('✌️arr --->', arr);
// console.log('✌️arr2 --->', arr2);

//! синтаксис

// const arr =  ['H', 'e', 'l', 'l', 'o']
// const arr2 =  [1, 2, 3, 4, 5]
// console.log('✌️arr --->', arr);
// console.log('✌️arr2 --->', arr2);

//! type
// const type = [
//     1,
//     'str',
//     true,
//     false,
//     null,
//     undefined,
//     function (test) {console.log(test)},
//     [1,2,3],
//     {a:1, b:2}
// ]


//! індексації

// console.log(type[0]);
// console.log(type[1]);
// console.log(type[2]);
// console.log(type[3]);
// console.log(type[4]);
// console.log(type[5]);

// type[6]('Robert')

// console.log(type[7][1]);


// const matrix = [
//     [1,2,3,4],    
//     [5,6,7,8],  
//     [9,10,11,12]    
// ]

// console.log(matrix[1][3]);

//! к-ть елементів в масиві 

// const test = [1,2,3]

// console.log(test.length);


//! копіювання масивів

// let num = 1
// let num2 = num

// console.log('✌️num --->', num);
// console.log('✌️num2 --->', num2++);

// console.log('✌️num --->', num);
// console.log('✌️num2 --->', num2);

// const arr = [1,2,3]
// const arr2 = arr

// console.log('✌️arr --->', arr);
// console.log('✌️arr2 --->', arr2);

// arr2.push('test')
// console.log('✌️arr --->', arr);
// console.log('✌️arr2 --->', arr2);


//! редагування масива

// const arr = [1,2,3,4,5,6]
// console.log('✌️arr --->', arr);

// arr[6] = 7
// console.log('✌️arr --->', arr);

// arr[arr.length] = 8
// console.log('✌️arr --->', arr);

// arr[4] = 'test'
// console.log('✌️arr --->', arr);


//? Методи масивів


// const obj = {
//     name: 'Robert',
//     skils: 'any'
//     fn: function name(params) {
        
//     }
// }

// obj.fn()

// function name(params) {
    
// }


// console.log(obj.skils);

//! Додавання ел в масив в кінуць і на початок
// const arr = [1,2,3]
// console.log('✌️arr --->', arr);

// //* в кінець  .push()  

// arr.push('test')
// arr.push('test', 'test2', 'test3')

// console.log('✌️arr --->', arr);




//* в початок .unshift() 


// console.log(arr.unshift('123', '321'));

// console.log('✌️arr --->', arr);


//! Видалити ел в масив в кінуці і на початоку

//* в кінеці .pop()


// console.log(arr.pop());
// console.log('✌️arr --->', arr);



//* в початоку .shift()

// console.log(arr.shift());
// console.log('✌️arr --->', arr);


////////////////////////////////////////////////////////////////
// const arr = ['q','w','e','r','t','y']

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }


// const array = [23,2,8,10,6,4,56,56,5,54]
// const array1 = [23,23,5,56,4,4,67,56,56,5,54]
// const array2 = [23,2,,6,43,5,56,4,4,67,56,56,5,54]
// const array3 = [23,2,8,10,6,43,5,5656,56,5,54]
// const array4 = [23,2,8,10,6,43,5,,67,56,56,5,54]
// const array5 = [23,2,6,5,54]


// function test(arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }



// console.log(test(array));
// console.log(test(array1));
// console.log(test(array2));
// console.log(test(array3));
// console.log(test(array4));




////////////////////////////////////////////////////////////////


//? заміну, видалення, додавання ел в масив під індексом

// const cars = ['Audi', 'BMW', 'Mazda', 'Renault', 'Skoda', 'Toyota', 'Tesla']
// console.log('✌️cars --->', cars);

// console.log(cars[0]);

// //заміна
// cars[0] = 'Nissan'
// console.log('✌️cars --->', cars);

// //видалення
// delete cars[4]//------------------
// console.log('✌️cars --->', cars);

//! Метод splice() - заміну, видалення, додавання

// const cars = ['Audi', 'BMW', 'Mazda', 'Renault', 'Skoda', 'Toyota', 'Tesla']
// console.log('✌️cars --->', cars);

//* 1 видалення

// cars.splice(0)//очистити масив
// cars.splice(3)
// cars.splice(3, 1)
// cars.splice(3, 2)

// const delCars = cars.splice(3, 2)
// console.log('✌️delCars --->', delCars);

// console.log('✌️cars --->', cars);

//*2  Заміну елементів 

// const newCars = ['Honda', 'Cadillac', 'Hyundai', 'Mercedes-Benz']

// console.log(...cars);
// cars.splice(4, 1, 'Ferrari')
// cars.splice(3, 1, 'Ford','Soob','Seat','VW')
// cars.splice(3, 1, 'Ford','Soob','Seat','VW')
// cars.splice(3, 1, ...newCars)


// console.log('✌️cars --->', cars);

//*3  Додавання елементів 

// cars.splice(3, 0, 'Honda')


// console.log('✌️cars --->', cars);

///////////////!!!!!!////////////

// cars.splice(-1, 1)
// cars.splice(-2, 1)
// console.log('✌️cars --->', cars);



//? 2 Методи копіювання масива

//!1 slice()  вміє втрізати частину

// const cars = ['Audi', 'BMW', 'Mazda', 'Renault', 'Skoda', 'Toyota', 'Tesla']
// console.log('✌️cars --->', cars);

// const newCars = cars.slice()//повна копія
// console.log('✌️newCars --->', newCars);

// newCars.push('test')
// console.log('✌️cars --->', cars);
// console.log('✌️newCars --->', newCars);


// const sliceCars = cars.slice(0,2)
// console.log('✌️sliceCars --->', sliceCars);

//! 2 concat() - вміє добавляти в кінець

// const cars = ['Audi', 'BMW', 'Mazda', 'Renault', 'Skoda', 'Toyota', 'Tesla']
// console.log('✌️cars --->', cars);

// const newCars = cars.concat()//повна копія
// console.log('✌️newCars --->', newCars);


// const newCars2 = cars.concat('Ford')
// console.log('✌️newCars2 --->', newCars2);


// const newCars = ['Honda', 'Cadillac', 'Hyundai', 'Mercedes-Benz']

// const newCars2 = cars.concat(...newCars)
// console.log('✌️newCars2 --->', newCars2);

// ............................................

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [7,8,9]

const newArray = arr1.concat(...arr2, ...arr3)
console.log('✌️newArray --->', newArray);
