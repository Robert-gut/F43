//! Продвинуті типи!

//! union, litereal, type Alias , interface, optional, інтерсекшени....

//! 1 UNION (|)

// const arr = ['test', 1, true]

// function logId(id: string | number): string{
// //   return `${id}`
// // }

// // logId('test')
// // logId(1235345)
// // logId(true)//err

// //? звуження типів

// function logId(id: string | number | boolean){
//   // id.toLowerCase()//err

//   if(typeof id === 'string'){
//     id.toLowerCase()
//   }
//   else if(typeof id === 'number'){
//     id.toFixed()
//   }
//   else{
//     id.valueOf()
//   }
// }


// logId('unefined')
// logId(34)
// logId(true)
// // logId(undefined)//err

// function logError(err: string | string[]) {
//   // err.toLowerCase()//errr
//   if(Array.isArray(err)){
//     err.forEach(el => el + '!')
//   } else{
//     err.toLowerCase()
//   }
// }


// function logObject(obj: {a: number} | {b: number}){
//   if ('a' in obj) {
//     obj.a
//   }else{
//     obj.b
//   }
// }

// function logIds(a: string | number, b: string | boolean){
//   if(a === b){
//     a + b
//   }else{
//     console.log(a,b);
//   }
// }

//! 2 literal types дозволяє задавати конкретні значення

//? 1 числа літеральні типи

// let num: 1 = 1
// num = 2

// const numb = 1
// numb = 2

// let score: 0 | 1 | 2 = 2
// score = 0
// score = 1
// score = 2
// score = 3//error

//? 2 string літеральні типи

// let color: 'red' = 'red'
// color = 'blue'

// let statuss: 'success' | 'error' | 'pending' = 'success'
// statuss = 'pending'
// statuss = 'error'

// let bg = 'yellow'

//? 3 boolen 
// let flag: true | false = true
// let flag: boolean = true

//! приклад

// function fetchAuth(url: string, method: string) {//warning
//   fetch(method)
// }

//! 1 enum

// enum ReqType {
//   GET = 'get',
//   POST = 'post',
//   DEL = 'delete'
// }

// function fetchAuth(url: string, method: ReqType) {
//   fetch(method)
// }

// fetchAuth('https://', ReqType.DEL)
// fetchAuth('https://', ReqType.GET)
// fetchAuth('https://', ReqType.POST)

//! 2 leteral types

// function fetchAuth(url: string, method: 'post' | 'get' | 'delete') {
//   fetch(method)
// }

// fetchAuth('https://', 'get')
// fetchAuth('https://', 'delete')
// fetchAuth('https://', 'post')
// fetchAuth('https://', 'dalate')//errr

// let mathod = 'post'
// const mathod = 'post'

// fetchAuth('https://', mathod)
// fetchAuth('https://', mathod as 'post')//! не рекомендується

//! повернення 

// function fetchAuth(url: string, method: 'post' | 'get' | 'delete'): 1 | -1 {
//   fetch(method)
//   return 1
// }


//! 3 type Aliases

//*fun
// type httpMethod = 'post' | 'get' | 'delete'
// type coolString = string

// function fetchAuth(url: coolString, method: httpMethod) {
//   fetch(method)
// }

//*obj

// const user: {
//   name: string,
//   age: number,
//   skills: string[]
// } = {
//   name: 'Alex',
//   age: 28,
//   skills: ['dev', 'qa']
// }

//! type alias

// type User = {
//   name: string,
//   age: number,
//   skills: string[]
// }

// const user: User = {
//   name: 'Alex',
//   age: 28,
//   skills: ['dev', 'qa']
// }

//? обєднання type

// type Role = {
//   nameRole: string,
//   id: string,
//   count: number
// }

// type UserWithRole = User & Role
//! & intersection - оператор в ts обєднує 2 типи

// type UserWithRole1 = User | Role

// const user2: UserWithRole = {
//   name: 'Alex',
//   age: 28,
//   skills: ['dev', 'qa'],
//   nameRole: 'admin',
//   id: 'n3n3j3kl45m65',
//   count: 234
// }


//!4 interface - описувати структуру обєкта 

//type
// type User = {
//   name: string,
//   age: number,
//   skills: string[]
// }

// const user: User = {
//   name: 'Alex',
//   age: 28,
//   skills: ['dev', 'qa']
// }

//interface

// interface IUser {
//   firstName: string,
//   lastName: string,
//   age: number,
//   skills: string[]
// } 

// const user: IUser = {
//   firstName: 'Alex',
//   lastName: 'Blue',
//   age: 28,
//   skills: ['dev', 'qa']
// }

//*1 
// interface UserWithRole extends IUser{
//   roleName: string
// }

// const userRole: UserWithRole = {
//   firstName: 'Alex',
//   lastName: 'Blue',
//   age: 28,
//   skills: ['dev', 'qa'],
//   roleName: 'admin'
// }

//*2 
// interface Role {
//   roleName: string
// }

// interface IUserRole extends IUser, Role{
//   createdAt: Date
// }

// const userRoleWithDate: IUserRole = {
//   firstName: 'Alex',
//   lastName: 'Blue',
//   age: 28,
//   skills: ['dev', 'qa'],
//   roleName: 'admin',
//   createdAt: new Date()
// }

//! опис методів

// type logIdFun = (id: number) => string

// interface IUser {
//   firstName: string,
//   lastName: string,
//   age: number,
//   skills: string[],
//   log: logIdFun
// } 

//! різниця між interface and type

// interface test {
//   name: string
// }

// interface test {
//   age: number
// }

// const person: test = {
//   name: 'test',
//   age: 34
// }

// type Id = string | number
// type funFetch = (url: string, mathod?: 'get' | 'post') => string[]


// //! 5  opsional (опціональність)

// interface IUserAuth {
//   login: string,
//   password?: string
// }

// const user: IUserAuth = {
//   login: 'admin@gmail.com',
//   password: 'Qwerty-1'
// }

// //! use in fun

// function multiply(a: number, b?: number): number{
//   if(!b){
//     return a + 0
//   }
//   return a + b
// }

//! fun obj

interface IUserAuth {
  login: string,
  password?: {
    type: 'primary' | 'secondary'
  }
}


function testPass(user: IUserAuth) {
  const t =  user.password?.type
  const e =  user.password!.type//!100% тут буде password це не рекомендується використовувати
}

