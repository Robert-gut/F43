//! Інтератори і генератори

// const arr = [1,2,3,4,5]

// function* generator(){
//     for(let i = 0; i < arr.length; i++){
//         yield arr[i]
//     }
// }

// const data = generator()

// console.log(data.next());
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());

// ///////////////////////////////////////////////


// const arr = [1,2,3,4,5]

// function* generator(){
//     for(let i = 0; i < arr.length; i++){
//         yield arr[i]
//     }
// }

// const data = generator()

// document.querySelector('button').addEventListener('click',()=>{
//     console.log(data.next());
// })


// ////////////////////////////////////////////

// function* test (){
//     let i = 0
//     while(true){
//         yield i
//         i++
//     }
// }

// const test1 = test()

// document.querySelector('button').addEventListener('click',()=>{
//     console.log(test1.next());
// })



// ? set map //////////////////////////////



// ! SET

const set = new Set()
// console.log('✌️set --->', set);

// чим відрізняється від масива


// const arr = [1,2,3]
// arr.push(1)
// arr.push(1)
// arr.push(1)
// arr.push(1)
// arr.push(1)
// console.log('✌️arr --->', arr);


// const testSet = new Set()
// testSet.add(1)
// testSet.add(1)
// testSet.add(1)
// testSet.add(1)
// testSet.add(1)
// console.log('✌️testSet --->', testSet);


//!методам Set

//! add() +++

set.add('BMW')
set.add('MB')
set.add('MB')
set.add('Audi')

// console.log(set);


//! has() ???
// console.log(set.has('BMW'));


//! delete() ---

set.delete('MB')

// console.log(set);

//! clear() ---all

// set.clear()
// console.log(set);

//! values()

// const test = set.values()

// for (const item of test) {
//     console.log(item);
// }


// //! forEach()

// set.forEach(value => {
//     console.log(value);
// })


///////////////////////////////////


// arr => set

// const array = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
// console.log('✌️array --->', array);

// const arrToSet = new Set()
// array.forEach(el => arrToSet.add(el))
// console.log('✌️arrToSet --->', arrToSet);

// set => arr

// const setToArr = [...arrToSet]
// console.log('✌️setToArr --->', setToArr);

// set.size

// [12,6,5,5,56,56,65,56,234556,65,56]
// [12,62345,5,5,5645,56,65,56,56,65,56]
// [12,6,5,6555,56,56,65675,56435,56567,65,56]


//! MAP

const map = new Map()
console.log('✌️map --->', map);

//! set() +++

map.set('brand','BMW')
map.set('KM', 245)
map.set('R', 19)
map.set(123, 19)
map.set(true, 19)
map.set(null, 19)
map.set(undefined, 19)
map.set(function name(params) {}, 19)

// console.log('✌️map --->', map);

//! get() read

// console.log(map.get('brand'));
// console.log(map.get('KM'));
// console.log(map.get('R'));

//! delete() ---

// map.delete('KM')
// console.log('✌️map --->', map);


//! clear() ---all

// map.clear()
// console.log('✌️map --->', map);


////////////////////////////////////////

// ! keys(), values(), antries()


// keys()
// console.log(map.keys());

// for (const key of map.keys()) {
//     console.log(key);
// }

//values()
// console.log(map.values());

// for (const key of map.values()) {
//     console.log(key);
// }

//antries()

// console.log(map.entries());

// for (const key of map.entries()) {
//     console.log(key);
// }


// map.forEach((value, key, map)=> {
//     console.log(key + ' ' + value);
// })

// ///////////////////////////////////////

console.log(map);

const obj = {}

// map => obj
map.forEach((value, key) => {
    obj[key] = value
})

console.log(obj);

//obj => map

const newMap = new Map()

for (const key in obj) {
    newMap.set(key, obj[key])
}
console.log('✌️newMap --->', newMap);