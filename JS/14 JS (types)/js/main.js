//? string

const string1 = ''
const string2 = ""
const string3 = ``

// console.log('test "test" test');

//! `` 

// const test = `
// st1
// st2
// st3
// `
// console.log('✌️test --->', test);
// const fn = () => 'test'

// console.log(`test 'test' "test" ${1+1} ${test} ${fn()}`);

//! Спец сим

// console.log(' \t test  \0 test \n  \'test\' \\  \\ ');

//! Юнікод

// console.log('\u04BE  \u058E \u168F ᖍ ᕶ \u0041');

//! 'test' ['t','e','s','t']  .length

// console.log('test'.length);

//! отримати якийсь символ str індексацію

// const test = 'test'

// test[0]
// test[1]
// test[2]
// test[3]

// for (let i = 0; i < test.length; i++) {
//     console.log(test[i]);
// }

//? МЕТОДИ STRING

// const test = 'Lorem ipsum dolor sit amet.'

//! регістер

// console.log(test.toUpperCase());
// console.log(test.toLowerCase());

//! пошук в середині siring

// //* indexof() => index or -1
// console.log(test.indexOf('dolor'));//12
// console.log(test.indexOf('test'));//-1

// //*includes() => true or false
// console.log(test.includes('dolor'));//true
// console.log(test.includes('test'));//false

// //* startsWith endsWith => true or false
// console.log(test.startsWith('Lorem'));//true
// console.log(test.endsWith('amet.'));//false


//! Обрізка пробілів trim()
// trimStart()
// trimEnd()

// console.log(test.trim());
// console.log('  test    '.trim());

//! Заміни тексту

// replece() 1 знайденті
// repleceAll() всі знайденті

// console.log(test.replace('Lorem', 'TEST'));
// console.log(test.replaceAll('Lorem', 'TEST'));

//! вирізання slice()
// console.log(test.slice(6,11));

//! повторення рядка .repeat(5)

// console.log(test.repeat(5));


// console.log(typeof 'string');



//? Number

const num1 = 68978
const num2 = 68978.346346

//! e

// console.log(1000000000);
// console.log(1e9);


//? math

//! округлення

//! в низ
// console.log('5.783497345--->', Math.floor(5.783497345));
// console.log('-5.783497345--->', Math.floor(-5.783497345));

// //! в більшу сторону
// console.log('5.783497345--->', Math.ceil(5.783497345));
// console.log('-5.783497345--->', Math.ceil(-5.783497345));

// //! в найближчу сторону
// console.log('5.783497345--->', Math.round(5.783497345));
// console.log('-5.783497345--->', Math.round(-5.783497345));


// //! відкидають дробову часину
// console.log('5.783497345--->', Math.trunc(5.783497345));
// console.log('-5.783497345--->', Math.trunc(-5.783497345));

// //! n к-ть загальних чисел
// console.log('5.783497345--->', 5.783497345.toPrecision(5));
// console.log('-5.783497345--->', -5.783497345.toPrecision(5));

// //! певної к-ті після коми
// console.log('5.783497345--->', +5.783497345.toFixed(2));
// console.log('-5.783497345--->', -5.783497345.toFixed(2));

////////////////////////////////////////////////////////

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

////////////////////////////////////////////////////////

//! перевірки  NaN

// console.log(145 + +'str');
// console.log(typeof (145 + +'str'));

// console.log(145 + +'str' === 145 + +'str');
// console.log(NaN === NaN);


// if(145 + +'str' === NaN){
//     console.log('ok');
// }

// //isNaN
// if(isNaN(145 + +'str')){
//     console.log('ok');
// }

//! пеперевірка на число

// console.log(isFinite('555'));
// console.log(isFinite(555));
// console.log(isFinite('555asdgfjdg'));
// console.log(isFinite(true))
// console.log(isFinite(false))
// console.log(isFinite(null))
// console.log(isFinite(undefined))


//! parsInt  parsFloat

// const w = '960.77px'

// console.log(+w);
// console.log(Number(w));

// console.log(parseInt(w));
// console.log(parseFloat(w));


//! Math

// console.log(Math.random());
// console.log(parseInt(Math.random() * 100));

// console.log(Math.max(...[1,2,3]));
// console.log(Math.min(...[1,2,3]));

// console.log(Math.abs(-1111));

// console.log(Math.pow(3,3));

//! BOOLEAN

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(0.345345));
// console.log(Boolean(-12));
// console.log(Boolean('string'));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(undefined));


//? BigInt 

// const bigInt = 37845897347598345089347598374590834750n

// console.log('✌️BigInt --->', bigInt);

// const bigFromString = BigInt('48934759327450983274590873294057903845')
// console.log('✌️bigFromString --->', bigFromString);

//! методи та операції

const a = 2n
const b = 3n


// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);//не можуть бути дробові числа
// console.log(a%b);
// console.log(a**b);


// console.log(a > b);
// console.log(a === b);
// console.log(a < b);

// console.log(a === 2);
// console.log(a == 2);


// //! конвертація
// const num = Number(10n)
// console.log('✌️num --->', num);

// console.log(10n + 10);//errr

//! не працює з : Math, JSON

//? SUMBOL


// const id = Symbol()
// console.log(id);


// const id1 = Symbol('id')
// const id2 = Symbol('id')
// console.log('✌️id1 --->', id1);
// console.log('✌️id2 --->', id2);


// console.log(id1 === id2);


// const user = {
//     name: 'Alice',
//     [Symbol('id')]: 9823642364,
//     [Symbol('id')]: 9823642364,
// }

// console.log(user.id);

// не працює: obj.keys(), for...in Json.stringify()




// const user = {
//     name: 'Alice',
//     age: 25,
// }


// const id = Symbol('id')
// user[id] = 475897345

// console.log(user);


// console.log(Object.keys(user));

// for(let key in user){
//     console.log(key);
// }


// const symbols = Object.getOwnPropertySymbols(user)
// console.log(user[symbols[0]]);
