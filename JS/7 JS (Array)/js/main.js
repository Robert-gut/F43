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
const type = [
    1,
    'str',
    true,
    false,
    null,
    undefined,
    function (test) {console.log(test)},
    [1,2,3],
    {a:1, b:2}
]


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
const arr = [1,2,3]
console.log('✌️arr --->', arr);

//* в кінець  .push()  

arr.push('test')
arr.push('test', 'test2', 'test3')

console.log('✌️arr --->', arr);




//* в початок .unshift() 


console.log(arr.unshift('123', '321'));

console.log('✌️arr --->', arr);


//! Видалити ел в масив в кінуці і на початоку

//* в кінеці .pop()


console.log(arr.pop());
console.log('✌️arr --->', arr);



//* в початоку .shift()

console.log(arr.shift());
console.log('✌️arr --->', arr);



