//! цикли for while

let count = 1

// console.log('Robert', count++);
// console.log('Robert', count++);
// console.log('Robert', count++);
// console.log('Robert', count++);
// console.log('Robert', count++);
// console.log('Robert', count++);
// console.log('Robert', count++);
// console.log('Robert', count++);
// console.log('Robert', count++);
// console.log('Robert', count++);


//? For

// for (let i = 0; i <= 100; i++) {
//     console.log('Robert', i);    
// }

// 1) початкове значення = 0
// 2) кінцеве значення = 100
// 3) додавання по 1

// for(початкове значення; початкове значення === кінцеве значення; початкове значення++){

// }

// for(let i = 0; i <= 100; i++){
//     console.log(i);
// }

const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem perspiciatis pariatur aliquid. Modi nulla, iste soluta vero nesciunt possimus officia. At fuga doloribus, veniam ad nemo vitae sapiente dolore harum qui, provident, officia sunt possimus! Odit quas necessitatibus nemo id libero ducimus ex. Fugiat alias quisquam non eos earum, quod sed amet, in, nobis ad temporibus necessitatibus recusandae neque doloremque esse quia illum voluptate iste. Enim laudantium explicabo ipsum necessitatibus blanditiis cupiditate repudiandae laboriosam maxime sunt minima, unde ratione praesentium? Quia quaerat placeat neque hic rem veniam, optio illo voluptatem voluptas saepe animi deleniti nostrum debitis nulla perspiciatis sunt quidem!'


// for (let i = 0; i < text.length; i++) {
//     console.log(text[i]);
// }

// /////////////////////////////////////////

// const colors = ['red', 'blue', 'green', 'orange', 'black', 'pink']


// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors[4]);
// console.log(colors[5]);

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }


//? вічний цикл

// for (let i = 3; true; i++) {
//     console.log(i);
// }


//! while

// while (умова === true) {
    
// }

// for (let i = 0; i < array.length; i++) {
    
// }

// let a = 0 
// while(a <= 100){
//     console.log(a);
//     a++
// }

//! вічний цикл 

// while (true) {
//     console.log('test');
// }


//! break - зупиняє цикл

// let a = 0 
// while(true){
//     console.log(a);
//     a++

//     if(a === 100)break
// }

//! do while спочатку виконує а потім перевіряє


// let a = 100

// do{
//     console.log(a)
//     a++
// }while(a < 100)




//?1 for  2 for of    3 for in

//! for of - для зручної роботи з масива

// const colors = ['red', 'blue', 'green', 'orange', 'black', 'pink']

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// for (const color of colors) {
//     console.log(color);
// }

//! for in - для роботи з обєктами

// const pc = {
//     name: 'Asus',
//     model: 'laptop', 
//     Cpu: 'Intel i7 1035g',
//     Ram: 20,
//     scren: 'ips'
// }

// for (let i = 0; i < Object.keys(pc).length; i++) {
//     console.log(Object.keys(pc)[i]  + ': ' +pc[Object.keys(pc)[i]]);
// }

// for (const key in pc) {
//    console.log(key + ':' + pc[key]);
// }


// //////////////////////////////////////////////////////////////////////////////



// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         for (let i = 0; i < json.length; i++) {
//             console.log(`
//                 Title: ${json[i].title}
//                 Body: ${json[i].body}
//             `); 
//         }
//       })


// function sume() {
//     let total = 0

//     for (let i = 0; i < arguments.length; i++) {
//         total = total + arguments[i] 
//     }

//     return total
// }

// console.log(sume(1,2,43,54,56,67,76,78,879,89,98,67,65,56,56,65));
// console.log(sume(1,2));


////////////////////////////////////////////////////////////////////


// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         for (let i = 0; i < json.length; i++) {
//             if(json[i].completed){
//                 console.log(`
//                     Title: ${json[i].title}
//                     Body: ${json[i].body}
//                 `); 
//             }


//         }
//       })

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         for (let i = 0; i < json.length; i++) {
//             if(json[i].completed){
//                 console.log(`
//                     Title: ${json[i].title}
//                     Body: ${json[i].body}
//                 `); 
//             }


//         }
//       })



// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         for (let i = 0; i < json.length; i++) {
//             if(json[i].completed < 51818 && json[i].completed > 15772){
//                 console.log(`
//                     Title: ${json[i].title}
//                     Body: ${json[i].body}
//                 `); 
//             }


//         }
//       })

const random = Math.floor(Math.random() * 100)

while(true){
    prompt()
    if (random === prompt) {
        
        break
    }

}


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}




////////////////////////////////////////////////////////////////////////////////////////////////


// null
// undefined
// 'str'
// 123
// bool true false

// var
// let 
// const

// < > <= >=  
// =
// ==
// ===
// &&
// ||
// + - * /
// **
// %
// !==
// !=

// ++
// --

// true ? true : false


// if (condition) {
    
// }

// if (condition) {
    
// } else {
    
// }


// if (condition) {
    
// } else if(){

// }



// switch (key) {
//     case value:
        
//         break;
//     case value:
        
//         break;
//     case value:
        
//         break;

//     default:
//         break;
// }




// function name(params) {
    
// }

// name(1)
// name(2)
// name(3)

// const name = function (params) {
    
// }

// cosnt arr = () => {}


// const name = function (params) {
    
// }()






// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// for (const key in object) {

// }

// for (const iterator of object) {
    
// }


// while(){

// }

// do{

// }while()




// let test

// for (let i = 0; i < array.length; i++) {
    
//     for (let j = 0; j < array.length; j++) {
        
//         for (let index = 0; index < array.length; index++) {
            
//             i
//             j

            
           
            
//         }
//     }
    
// }