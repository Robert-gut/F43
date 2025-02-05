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

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = [7,8,9]

// const newArray = arr1.concat(...arr2, ...arr3)
// console.log('✌️newArray --->', newArray);


// /////////////////////////////////////////////////////

// function test(){

// }


// const obj = {
//     test: function(){
//         console.log(1+1);
//     }
// }

// obj.test()

// const arr = [1,2,3,4,5,6,7,8]


// console.log(arr.push('test'));
//! Добавляє в кінець
//! return к-ть ел з новим елементом


// console.log(arr.unshift('test2'));
//! Добавляє в початок
//! return к-ть ел з новим елементом




// console.log(arr.shift());
//! видаляє з початку
//! return видалений ел

// console.log(arr.pop());
//! видаляє з кінця
//! return видалений ел

// console.log('✌️arr --->', arr);
// console.log(arr.splice(1,1, 'test'));
// ! 1 видяляти  (поч індекс, кількісь видалених ел)(1,1)
// ! 2 заміняти (поч індекс, кількісь видалених ел, добавлений елемент)(1,1, 'test')
// ! 3 додавати (поч індекс, кількісь видалених ел 000, добавлений елемент)(1,0, 'test')
//! return [] - видалених елементів
// console.log('✌️arr --->', arr);





// console.log(arr.slice(2,4))//! вміє копіювати кусок масива
//!1 Без параметрів робить повну копію масива ()
//!2 копіювати певну частину масива (початкове, і до якого індекса не включно)(2,4)


// console.log(arr.concat(9,10))//! Вміє копіювати весь масив і додавати в кінець (обєднати 2 або більше масива)
//!1 Без параметрів робить повну копію масива ()
//!2 Добавляє в кінець скопійованого масива ще ел ([1,2,3],[4,5,6])


// /////////////////////////////////////////////////////


//? Пошук В Масиві , методи пошуку

// const cars = ['Audi', 'BMW', 'Mazda', 'Renault', 'Skoda', 'Toyota', 'Tesla', 'Mazda']
// console.log('✌️cars --->', cars);

// function search(auto) {
//     for (let i = 0; i < cars.length; i++) {
//         if(auto === cars[i]){
//             return true
//         }
//     }
//     return false
// }


//! 1 indexof() вертає перший знайдений індекс ел. і -1 якщо нічого не знайдено

// console.log(cars.indexOf('bmw'))//-1
// console.log(cars.indexOf('BMW'))// 1
// console.log(cars.indexOf('Renault'))// 3
// console.log(cars.indexOf('Mazda', 4))// from index з якого індекса почати пошук

// const auto = cars[cars.indexOf('Mazda')]
// console.log('✌️auto --->', auto);

//* lastIndexof почінає шукати з кінця
// console.log(cars.lastIndexOf('Mazda'))

//! 2 includes() вертає першому знайденому ел. True і якщо нічого не знайдено false

// console.log(cars.includes('Mazda'));//true
// console.log(cars.includes('Nisan'));//false

// console.log(cars.includes('Audi', 3));//false


// if(cars.includes('Nisan')){

// }else{
    
// }

//!3  a)find , b)findIndex, c)filter

// const cars = [
//     {brand: 'Audi', power: 240},
//     {brand: 'BMW', power: 181},
//     {brand: 'Mazda', power: 194},
//     {brand: 'Renault', power: 130},
//     {brand: 'Mazda', power: 194},
// ]

//? a)find вертає перший знайдени обєкт який відповідає певній умові

// console.log(cars.find((value,index,object)=>{
//     console.log(`${object} ${index} ${value}`);
// }));
// console.log(cars.find((car)=>{ return car.brand === 'Mazda'}))//{}
// console.log(cars.find((car)=>{ return car.brand === 'Mazda 6'}))//undefined

// console.log(cars.find((car)=>{ return car.power === 240}))//{}
// console.log(cars.find((car)=>{ return car.power > 150}))//{}



//? b)findIndex - вертає індекс першого знайденого ел або -1

// console.log(cars.findIndex((car)=>{ return car.brand === 'Mazda'}))//2
// console.log(cars.findIndex((car)=>{ return car.brand === 'Mazda 6'}))//-1


//? c)filter - вертає всі знайдені елементи по певні умові у форматі [] 


// console.log(cars.filter((car) => {return car.power > 150}));
// console.log(cars.filter(car => car.power > 150));

// phones.filter((phone)=> {return phone.isNew === false})
// phones.filter((phone)=> {return phone.cost > 10000 && phone.cost < 20000})


// /////////////////////////////

// const test = [1,2]

// test[2] = 3

// console.log(test[0]);

// test[1] = '2'


// delete test[0]
// console.log('✌️test --->', test);

//////////////////////////////////////////





//? СОРТУВАННЯ МАСИВА

// const cars = ['Mazda', 'Renault', 'Skoda', 'Toyota', 'Tesla', 'Mazda','Audi', 'BMW',]
// console.log('✌️cars --->', cars);

//! 1 sort()

//* string type
// console.log(cars.sort());
// const alphabet = ["в", "а", "б"] 
// console.log('✌️alphabet --->', alphabet.sort());

// const alphabet1 = ['аб', 'ав','аа', 'аг'] 
// console.log('✌️alphabet1 --->', alphabet1.sort());

// const alphabet2 = ['a', 'c', 'b', 'C', 'B', 'A'] 
// console.log('✌️alphabet2 --->', alphabet2.sort());


//* number type

// const cars = [
//     {brand: 'Audi', power: 240, cost: 20000},
//     {brand: 'BMW', power: 181, cost: 40000},
//     {brand: 'Mazda', power: 194, cost: 5000},
//     {brand: 'Renault', power: 130, cost: 25000},
//     {brand: 'Mazda', power: 194, cost: 14000},
// ]

// console.log(cars.sort((a, b) => a.cost - b.cost));
// console.log(cars.sort((a, b) => b.cost - a.cost));

// console.log('✌️cars --->', cars);
// console.log(cars.sort((a,b)=> {
//     if(a > b) return -1
//     if(a < b) return 1
// }));

// console.log([23, 34, 123].sort());
// console.log([23, 34, 123].sort((a,b)=> a - b));
// console.log([23, 34, 123].sort((a,b)=> b - a));

//! 2 reverse()

// const numbers = [1,2,3,4,5,6,7,8,9]
// console.log('✌️numbers --->', numbers);

// console.log(numbers.reverse());


//? МЕТОДИ МОДИФІКУВАННЯ МАСИВІВ

//! split()    string => []

// const text = 'Lorem ipsum dolor sit.'

// console.log(text.split())///----
// console.log(text.split(''))//[]
// console.log(text.split(' '))
// console.log(text.split('', 5))

// console.log('kldsfjlk,sadf,asdf,asdgf,dg,sdfg'.split(','));


//! join()     [] => string

// const cars = ['Mazda', 'Renault', 'Skoda', 'Toyota', 'Tesla', 'Mazda','Audi', 'BMW',]
// console.log('✌️cars --->', cars.join());
// console.log('✌️cars --->', cars.join(','));
// console.log('✌️cars --->', cars.join(' '));
// console.log('✌️cars --->', cars.join(' + '));
// console.log('✌️cars --->', cars.join(' - '));
// console.log('✌️cars --->', cars.join(''));


//! map() модифікує і вертає новий масив модифікованих елементів

// const cars = ['Mazda', 'Renault', 'Skoda', 'Toyota', 'Tesla', 'Mazda','Audi', 'BMW',]


// function upCase(arr) {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].toUpperCase())
//     }
//     return newArr
// }
// console.log(upCase(cars));

///////////////////////

// console.log(cars.map(car => car.toUpperCase()));

//? Цикли з масивасм


// const cars = ['Mazda', 'Renault', 'Skoda', 'Toyota', 'Tesla', 'Mazda','Audi', 'BMW',]

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// for (const car of cars) {
//     console.log(car);
// }

//! forEach

// const test = cars.forEach()//und
// console.log(cars.forEach());//und

// cars.forEach(car => {console.log(car.toUpperCase())})

//! reduce()
// test.reduce((previousValue, num, index, arr)=>{
    
// }, 0)

// const test = [1,2,34,54,65,67,67,78,89,89,98]

// function plus(arr) {
//     let suma = 0
//     for (const num of arr) {
//         suma = suma + num
//     }
//     return suma
// }

// console.log(plus(test));

// /////////////////////////////////////////////////////

// console.log(test.reduce((previousValue, num) =>previousValue + num , 0))



//! перевірки на масив Array.isArray() => true false

// console.log(typeof [1,2,3]);
// console.log(typeof {});

// window.Array

// console.log(Array.isArray({}));
// console.log(Array.isArray('str'));
// console.log(Array.isArray(345));

// console.log(Array.isArray([1,2,3]));

