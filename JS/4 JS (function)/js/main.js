//! FUNCTION

// function nameFunction(params){
//     function body
// }

// ////////////////////////////////////////////////////

// function showMyGrop(){
//     console.log('F43');
// }

// showMyGrop()
// showMyGrop()
// showMyGrop()
// showMyGrop()
// showMyGrop()
// showMyGrop()
// showMyGrop()
// showMyGrop()
// showMyGrop()



// function test1() {
//     console.log(1);
// }
// function test2() {
//     console.log(2);
// }
// function test3() {
//     console.log(3);
// }

// test1()
// test2()
// test3()

// if (1 === 2) {
//     test1() 
// }else if(2 !== 1){
//     test2() 
// }else{
//     test3()
// }

//////////////////////////////////////

// function test1() {
//     console.log(1);
//     test2()
// }
// function test2() {
//     console.log(2);
//     test3()
// }
// function test3() {
//     console.log(3);
// }

// test1()


//! параметри (params)

// function hello(name) {
//     console.log('hello ' + name + '!!!');
// }

// hello('Robert')
// hello('Микита')
// hello('Тетяна')
// hello('Ірина')


// const userName = prompt('Enter your name!')
// hello(userName)

// function plus(a = 0, b = 0) {
//     console.log(`${a} + ${b} = ${a + b}`);
// }

// plus(6, 20)
// plus(15, 25)
// plus(634, 45640)
// plus()
// plus(5)


// function Math(number1, number2, operation){
//     if (operation === '+') {
//         alert("Відповідь:" + (number1 + number2));
//     } else if (operation === '-') {
//         alert("Відповідь:" + (number1 - number2));
//     } else if (operation === '*') {
//         alert("Відповідь:" + (number1 * number2));
//     } else if (operation === '/')
//         if (number2 !== 0) {
//             alert("Відповідь:" + (number1 / number2));
//     }
// }


// Math(2,2,'*')
// Math(2,2,'+')
// Math(2,2,'-')


//! return повернення результату роботи функції


// ? void це функці які нічого вератю 
// function test() {
//     console.log('test');
// }

// test()

// const voidFunction = test()
// console.log('✌️voidFunction --->', voidFunction);


// const suma = Math(2,2,'*')
// console.log('✌️suma --->', suma);


//? return це функці які щось вератю 

// function returnFunction() {
//     return 'test'
// }

// const returnFn = returnFunction()
// console.log('returnFn --->', returnFn);


//////////////// ! retutn fun ////////////////

// function Math(number1, number2, operation){
//     if (operation === '+') {
//         return "Відповідь:" + (number1 + number2);
//     } else if (operation === '-') {
//         return "Відповідь:" + (number1 - number2);
//     } else if (operation === '*') {
//         return "Відповідь:" + (number1 * number2);
//     } else if (operation === '/')
//         if (number2 !== 0) {
//             return "Відповідь:" + (number1 / number2);
//     }



//     return 'error'
// }

// console.log(Math(2,2,'*'));



//! Зона видимості

// const pi = 3.14

// function test() {
//   console.log(pi);
//   const test2 = 'test'  
//   return test2
// }


// test()
// // console.log(test2);

// console.log(test());


///////////////////////////////////////////////////////////////


// void

// function name(){
//     1+1
// }

// // return
// function name (){
//    return 1+1

//    switch (key) {
//     case value:
        
//         break;
   
//     default:
//         break;
//    }
// }


// function param(a, b, c, d, i) {
//     console.log(a + b + c + d + i);
// }

// param('str', 123, true, null, undefined)


// //////////////////////////////////////////////////////////


const number1 = document.querySelector('.num1').value
const number2 = document.querySelector('.num2').value

const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiplication = document.querySelector('.multiplication')
const division = document.querySelector('.division')

const equal = document.querySelector('.equal')


plus.addEventListener('click', funPlus)
minus.addEventListener('click', funMinus)
multiplication.addEventListener('click', funMultiplication)
division.addEventListener('click', funDivision)


function funPlus(){
    const number1 = +document.querySelector('.num1').value
    const number2 = +document.querySelector('.num2').value
    const resolve = number1 + number2
    equal.textContent = resolve
}
function funMinus(){
    const number1 = +document.querySelector('.num1').value
    const number2 = +document.querySelector('.num2').value
    const resolve = number1 - number2
    equal.textContent = resolve
}
function funMultiplication(){
    const number1 = +document.querySelector('.num1').value
    const number2 = +document.querySelector('.num2').value
    const resolve = number1 * number2
    equal.textContent = resolve
}
function funDivision(){
    const number1 = +document.querySelector('.num1').value
    const number2 = +document.querySelector('.num2').value
    const resolve = number1 /  number2
    equal.textContent = resolve
}

//////////////////////////////////////////////////////////////////////////




const ok = document.querySelector('.ok')
ok.addEventListener('click', funtctionForText)

function funtctionForText() {
    const text1 = document.querySelector('.text1').value
    const text2 = document.querySelector('.text2').value  
    if (text1 === text2) {
        ok.style.backgroundColor = 'green'
    } else{
        ok.style.backgroundColor = 'red'
    }
}


function radius (r){
    return 3.14 * r**2
}

console.log(radius(10));









// function name(число, що робити) {
    
//     switch (що робити) {
//         case метри в фути:
//             rertun число * 1.1
//         case метри в фути:
//             rertun число * 1.1
//         case метри в фути:
//             rertun число * 1.1
//         case метри в фути:
//             rertun число * 1.1
//         default:
//             break;
//     }
// }

// console.log(name(100, метри в фути));