//? generic

//! 1 приклад встроїних джейнеріків

const a: Array<number> = [1,2,3]
const b: Array<string> = [1,2,3]

async function test() {
  const a = await new Promise<number>((resolve, reject) => {
    resolve(1)
  })
}

// Record<K, V>

const check: Record<string, boolean> = {
  drive: true,
  kpp: false
}


//? функції з джейнериками

function  logMiddlewere(data: number): number {
  console.log(data);
  return data
}

const res = logMiddlewere(22)

///////////////////////////////////


function  logMiddlewereUnion(data: number | string): number | string {
  console.log(data);
  return data
}

const resUnion = logMiddlewereUnion(22)
const resUnion1 = logMiddlewereUnion('22')


/////////////////////////////////////////////////////////////////
function logMiddlewere1<T>(data: T): T{
  console.log(data);
  return data
}

const res1 = logMiddlewere1<number>(22)
const res2 = logMiddlewere1<string>('22')


///////////////////////////////////////////////////////////

function getSplitHaff<T>(data: Array<T>): Array<T>{
  const l = data.length
  return data.splice(0, 1)
}

getSplitHaff([1,2,3])
getSplitHaff([1,2,'3'])
getSplitHaff<string>(['1','2','3'])


//////////////////////////////////////////////////

function toString<T>(data: T): string | undefined {
  if (Array.isArray(data)) {
    return data.toString()
  }
  switch (typeof data){
    case 'string':
      return data
    case 'number':
    case 'symbol':
    case 'bigint':
    case 'boolean':
    case 'function':
      return data.toString()
    case 'object':
      return JSON.stringify(data)
    default:
      return undefined
  }

}

function added(a: number, b: number): number{
  return a + b
}

console.log(toString(2));
console.log(toString(true));
console.log(toString(['a', 'b']));
console.log(toString({a: 1}));
console.log(toString(added));


//? використання в типах

function getSplitHaff1<T>(data: Array<T>): Array<T>{
  return data.splice(0,1)
}

//! type of function

const split: <T>(data: Array<T>) => Array<T> = getSplitHaff1

//! interface

interface ILogLine<T>{
  timeStamp: Date
  data: T
}

function test(params: ILogLine<number>) {}

//! type
type LogLineType<T> = {
  timeStamp: Date
  data: T
}

const logLine: LogLineType<{a: number}> = {
  timeStamp: new Date(),
  data: {
    a: 1
  }
}

//? обмеження джейнеріків

class Vehicle{
  run: number
}

function kmToMiles<T>(vehicle: T): T{//error ts
  vehicle.run = vehicle.run / 0.62
  return vehicle
}

// ok
function kmToMiles2<T extends Vehicle>(vehicle: T): T{//error ts
  vehicle.run = vehicle.run / 0.62
  return vehicle
}

class LCV extends Vehicle{
  capacity: number
}

kmToMiles2(new Vehicle())
kmToMiles2({a: 1})
kmToMiles2({run: 1})
kmToMiles2(new LCV())

//! примітивні типи

function logId<T extends string | number>(id: T): T{
  return id
}

logId<number>(12)
logId<number>('12')

//! можемо використовувати декілька джейнеріків

function logId2<T extends string | number, Y>(id: T, additionalData: Y): {id: T, data: Y} {
  return{id, data: additionalData}
}

logId2<string, number>('123', 3245345)


//////////////////////// function /////////////////////////////////////

const data = [
  {id: 1, name: 'Ben'},
  {id: 3, name: 'Den'},
  {id: 2, name: 'Jon'},
]

interface ID {
  id: number
}

function sort<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[]{
  return data.sort((a,b) => {
    switch(type){
      case 'asc':
        return a.id - b.id
      case 'desc':
        return b.id - a.id
    }
  })
}

sort(data, 'desc')
sort(data)


/////////////////////////////////     obj         //////////////////////

class Resp<D, E>{
  data?: D
  error?: E

  constructor(data?: D, error?: E){
    if(data){
      this.data = data
    }
    if(data){
      this.error = error
    }
  }
}

new Resp<string, number>('data')

//! наслідування

class HTTPResp<F> extends Resp<string, number>{
  // code: number
  code: F

  setCode(code: F){
    this.code = code
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

//! Завдання 2: Пошук за ключовим полем
//! Напишіть функцію findByKey, яка приймає масив об'єктів і ключове поле, і повертає перший об'єкт з масиву,
//!  у якого значення цього поля відповідає заданому значенню. Використайте дженерік для того, щоб функція могла працювати з будь-яким типом об'єктів.


const users = [
  {id: 1, name: 'Ben'},
  {id: 3, name: 'Den'},
  {id: 2, name: 'Jon'},
]

function findByKey<T, K extends keyof T>(arr:T[], key: K, value: T[K]): T | undefined {
  return arr.find(obj => obj[key] === value)
}

findByKey(users, 'id', 2)