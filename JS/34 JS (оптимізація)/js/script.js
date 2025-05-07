//! Приклад 1: Оптимізація DOM-маніпуляцій

//? до оптимізацій

// function addItemsToUnorderedListBad(count) {
//   const ul = document.getElementById('myListBad')
//   for (let i = 0; i < count; i++) {
//     const li = document.createElement('li')
//     li.textContent = `Елемент ${i + 1}`
//     ul.appendChild(li)
//   }
// }


// addItemsToUnorderedListBad(1000) //



//? після оптимізацій

// function addItemsToUnorderedListGood(count) {
//   const ul = document.getElementById('myListGood')
//   const fragment = document.createDocumentFragment()

//   for (let i = 0; i < count; i++) {
//     const li = document.createElement('li')
//     li.textContent = `Елемент ${i + 1}`
//     fragment.appendChild(li)
//   }
//   ul.appendChild(fragment)
// }

// addItemsToUnorderedListGood(1000) 

//! Приклад 2: Оптимізація циклів

//? до оптимізацій

// function processArrayBad(arr) {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     const elevent = arr[i]
//     const squared = Math.pow(elevent, 2)
//     const multiplied = squared * Math.PI
//     result.push(multiplied)
//   }
//   return result
// }

// const dataArrayBad = Array.from({length: 1000}, (_, i) => i + 1)
// console.time('processArrayBad')
// processArrayBad(dataArrayBad)
// console.timeEnd('processArrayBad')

//? після оптимізацій

// function processArrayGood(arr) {
//   const result = []
//   const pi = Math.PI
//   for (let i = 0; i < arr.length; i++) {
//     const multiplied = (arr[i] * arr[i]) * pi
//     result.push(multiplied)
//   }
//   return result
// }

// const dataArrayGood = Array.from({length: 1000}, (_, i) => i + 1)
// console.time('processArrayGood')
// processArrayGood(dataArrayGood)
// console.timeEnd('processArrayGood')

//! Приклад 3: Делегування подій

//? до оптимізацій
// const itemsBad = document.querySelectorAll('#itemContainerBad li')

// itemsBad.forEach(item => {
//   item.addEventListener('click', function() { console.log(`Ви клікнули на ${this.textContent}`)
//   })
// })

//? після оптимізацій

// const itemsGood = document.getElementById('itemContainerGood')

// itemsGood.addEventListener('click', (event)=>{
//   if(event.target && event.target.nodeName === 'LI'){
//     console.log(`Ви клікнули на ${event.target.textContent}`)
//   }
// })

//! Приклад 4: Мемошзація (кешування результатів функції)

//? до оптимізацій

// function fibonacciBad(n) {
//   if(n <= 1){
//     return n
//   }
//   return fibonacciBad(n - 1) + fibonacciBad(n - 2)
// }

// console.time('fibonacciBad')
// console.log(fibonacciBad(45));
// console.timeEnd('fibonacciBad')

//? після оптимізацій

// function fibonacciGood(n, memo = {}) {
//   if(n in memo){
//     return memo[n]
//   }
//   if(n <= 1){
//     return n
//   }
//   memo[n] = fibonacciGood(n - 1, memo) + fibonacciGood(n - 2, memo)
//   return memo[n]
// }

// console.time('fibonacciGood')
// console.log(fibonacciGood(45));
// console.timeEnd('fibonacciGood')

//! Приклад 5: Оптимізація рядків
//! +=
//? до оптимізацій
// function buildStringBad(count){
//   let result = ''
//   for (let i = 0; i < count; i++) {
//     result += `Element ${i + 1}, `
//   }
//   return result
// }

// console.time(buildStringBad)
// buildStringBad(1000000)
// console.timeEnd(buildStringBad)


//? після оптимізацій

// function buildStringGood(count){
//   const parts = []
//   for (let i = 0; i < count; i++) {
//     parts.push(`Element ${i + 1}, `)
//   }
//   return parts.join('')
// }


// console.time(buildStringGood)
// buildStringGood(1000000)
// console.timeEnd(buildStringGood)

//! Приклад 6: Оптимізація умовних операторі (if/else)


//? до оптимізацій
function getColorNameBad(code) {
  if(code === 1){
    return 'red'
  } else if(code === 2){
    return 'blue'
  } else if(code === 3){
    return 'green'
  } else if(code === 4){
    return 'yellow'
  } else if(code === 5){
    return 'pink'
  } else {
    return 'невідомий код коліра'
  }
}


console.time(getColorNameBad)
console.log(getColorNameBad(5));
console.timeEnd(getColorNameBad)

//? після оптимізацій

function getColorNameGood(code) {
  const colorMap = {
    1: 'Red',
    2: 'Blue',
    3: 'Green',
    4: 'Yellow',
    5: 'Pink',
  }
  return colorMap[code] ||  'невідомий код коліра'
}


console.time(getColorNameGood)
console.log(getColorNameGood(5));
console.timeEnd(getColorNameGood)