// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log('setTimeout');
// }, 1);
// console.log(3);
// console.log(4);
// console.log(5);


// const promise = new Promise((resolove, reject)=>{
//   resolove(ok)
//   reject(err)
// })
// .then((resolove, reject) =>{
//   resolove(ok)
//   reject(err)
// })
// .then((resolove, reject) =>{
//   resolove(ok)
//   reject(err)
// })
// .then((resolove, reject) =>{
//   resolove(ok)
//   reject(err)
// })
// .then((resolove, reject) =>{
//   resolove(ok)
//   reject(err)
// })
// .then((resolove, reject) =>{
//   resolove(ok)
//   reject(err)
// })
// .catch((err)=> {
//   console.error(err);
// })
// .finally(()=>{console.log('the end');})



// const promise1 = new Promise((res, rej)=>{
//   setTimeout(()=>{
//     if(202 === 200){
//       console.log('крок 1');
//       res('test')
//     }else{
//       rej(404)
//     }
//   },2000)
// })
// .then((a)=>{
//   return new Promise((res, rej)=>{
//     setTimeout(()=>{
//       console.log('крок 2', a);
//       res()
//       // rej('err крок 2')
//     },2000)
// })})
// .then(()=>{
//   return new Promise((res, rej)=>{
//     setTimeout(()=>{
//       console.log('крок 3');
//       res()
//     },2000)
// })})
// .catch((err)=>{
//   console.log(err);
// })
// .finally(()=>{console.log('the end');})



// function boilWater() {
//   return new Promise((resoleve)=> {
//     console.log('Кипятитися вода');
//     setTimeout(()=> resoleve('Вода закіпіла'),2000)
//   })
// }

// function brewCoffee() {
//   return new Promise((resoleve)=>{
//     console.log('Запарюємо каву');
//     setTimeout(()=> resoleve('Кава готова'),1500)
//   })
// }


// boilWater()
// .then((message)=>{
//   console.log(message);
//   return brewCoffee()
// })
// .then( message => console.log(message))
// .catch(err => console.error('Помилка',err))



// ! Event loop

//! 1 Call stack
//! 2 Web APIs
//! 3 Callback Queue



// function test() {
//   console.log('test');
//   test()
// }
// test()



console.log('cl 1');

setTimeout(()=>{console.log('cl 2 setT');}, 0)


setTimeout(()=>{console.log('cl 4 setT');}, 0)

Promise.resolve('cl 3 promise').then((info)=> {console.log(info)})


console.log('5');

