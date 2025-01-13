// type:
// 'str', "str", `str`
// true false
// null
// 999999
// undefined


// let 
// const 

// if(){

// }

// if (condition) {
    
// } else {
    
// }


// if (condition) {
    
// } else if(){
    
// } else{

// }


//! Оператори в JS

//! = - оператор присвоєння
//! == - оп. не строгої рівності
//! === оп. строгої рівності
//! != !== - логічне НЕ 
//! < > <= >= - оператори порівняння
//! && - логічне І
//! || - логічне або



//! матиматичні оператори
// console.log(`
// ${2+2}+
// ${2-2}-
// ${2*2}*
// ${2/2}/
// ${5%2}%
// ${3**3}**
// `);

//! Різні типи даних


//? +++++++++++++++++++++++++++++++++++++
// console.log('str' + 'str2' + 'str3');
// console.log('str','str2','str3');

// console.log('str' + 333);
// console.log('10' + 5);
// console.log(10 + '100');
// console.log(true + 'str');
// console.log(undefined + 'str');


// console.log(10 + true);
// console.log(10 + false);

// console.log(10 + undefined);
// console.log(10 + +'str');

// true = 1
// false = 0


// console.log(true + undefined);
// console.log(undefined + true);


//? ---- ***** ////// %%%%%% ***********

// console.log('str5' - 'str');
// console.log('str5' * 'str');
// console.log('str5' / 'str');
// console.log('10' - '5');


//! унарний опаратор +++
// console.log(+null);
// console.log(+undefined);
// console.log(+true);
// console.log(+false);
// console.log(+'str');
// console.log(+'145');
// console.log(+'145test');

//! оператор присвоєння =

// let year = 2025
// year = 2026
// year = 2027
// year = 2028


//! матиматичні скорочення

// let num = 20
// num = num + 5
// console.log(num);


// let test = 100
// test = test + 55

// console.log(test += 55);
// console.log(test -= 55);
// console.log(test *= 55);
// console.log(test /= 55);

//! інкремент і декремент

//? інкремент ++1 (test++ => test = test + 1)

// let a = 100
// a++
// a++
// a++
// a++
// a++
// console.log(a);

//? декремент --1 (test-- => test = test - 1)

// let b = 100
// b--
// b--
// b--
// b--
// b--
// console.log(b);

//! постфіксні і префіксні (розміщення ++ --)

//?ПОСТФІКСНИ++
// let test = 100
// console.log(test++);
// console.log(test);

//? ++префіксне
// let test2 = 100
// console.log(++test2);
// console.log(test2);


//! Порівняння > < == === >= <= !== !=

// console.log(1 > 2);
// console.log(1 < 2);

// console.log(1 == 2);
// console.log(2 == 2);

// console.log(1 != 2);
// console.log('1' !== 1);


// console.log('2' > 1);
// console.log('2' == 1);

// console.log(true == 1);
// console.log(false == 0);
// console.log(true === 1);
// console.log(false === 0);

// console.log(undefined == null);
// console.log(undefined === null);

// console.log('test' === 'test');
// console.log('A' === 'a');

// console.log('A' > 'a');
// console.log('A' < 'a');

// console.log('abcd' > 'abc');
// console.log('abC' >= 'abc');
// console.log('abC' < 'abc');

// console.log('TEST' === 'test');

// console.log('abc' < 'abcd');


//! Логічні оператори і або && ||

//? ||

// console.log(true || true || true);
// console.log(false || true || false);
// console.log(false || false || false);

// console.log(false || false || false || false || false|| false || false|| false || false|| false || false|| false || false|| false || false|| false || false|| false || true|| false || false|| false || false|| false || false|| false || false|| false || false|| false || false|| false || false|| false || false|| false || false);

// //? &&

// console.log(true && true && true);
// console.log(true && false && true);
// console.log(true && true && true && true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && false && true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true&& true && true);

// if(a === 1){
//     console.log(1);
// }else{
//     console.log(2);
// }

// a === 1 ? console.log(1) : console.log(2);

//! Switch case

// const test = 4


// switch (test) {
//     case 1:
//         console.log(1);
//         break
//     case 2: 
//         console.log(2);
//         break
//     case 3: 
//         console.log(3);
//         break
//     default:
//         console.log(123);
// }



//////////////////////////////////////////////
// const manthNamber = +prompt('Enter number')

// if(1 === manthNamber || 2 === manthNamber || 12 === manthNamber ){
//     console.log('Winter!');
// }
// else if(3 === manthNamber || 4 === manthNamber || 5 === manthNamber ){
//     console.log('Spring!');
// }
// else if(6 === manthNamber || 7 === manthNamber || 8 === manthNamber ){
//     console.log('Summer!');
// }
// else if(9 === manthNamber || 10 === manthNamber || 11 === manthNamber ){
//     console.log('Fall!');
// }
// else{
//     console.log('Invalid input');
// }


// switch (manthNamber) {
//     case 1:
//     case 2:
//     case 12:
//         console.log('Winter!')
//         break
//     case 3:
//     case 4:
//     case 5:
//         console.log('Spring!')
//         break
//     case 6:
//     case 7:
//     case 8:
//         console.log('Summer!')
//         break
//     case 9:
//     case 10:
//     case 11:
//         console.log('Fall!')
//         break
//     default:
//     console.log('Invalid input')
// }


const select = document.querySelector('#background')
const bg = document.querySelector('body')

select.addEventListener('change', ()=>{
    const value = select.value
    switch (value) {
        case 'pink':
            bg.style.backgroundColor = 'pink'
            break;
        case 'red':
            bg.style.backgroundColor = 'red'
            break;
        case 'blue':
            bg.style.backgroundColor = 'blue'
            break;
        case 'yellow':
            bg.style.backgroundColor = 'yellow'
            break;
        case 'green':
            bg.style.backgroundColor = 'green'
            break;
        case 'orange':
            bg.style.backgroundColor = 'orange'
            break;
        default:
            bg.style.backgroundColor = 'silver'
            break;
    }
})


