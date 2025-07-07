//! void, unknownm never, null, приведення типів, type guard


//! 1 void

// function logId(id: string | number):void{
//   console.log(id);
// }

// const a = logId(1)

// function multiply(a: number, b?: number){
//   if(!b){
//     // return a * a
//   }
//   // return a * b
// }

// type voidFunc = () => void

// const test: voidFunc = () => {
  
// }

// const test1: voidFunc = () => {
//   return true
// }

// const s = test1()

// const skills = ['dev', 'qa']

// const user = {
//   s: ['']
// }

// skills.forEach(skill => user.s.push(skill))



//!2 unknown  

let inputt: unknown

inputt = 5
// inputt = ['test', 'test']

// const res: string = inputt
// const res1: any = inputt

//! case 1

function run(i: unknown){
  if(typeof i === 'number'){
    i++
  }else{
    i
  }
}

run(inputt)

//! case 2

async function getData() {
  try {
    await fetch('')
  } catch (error: unknown) {
    if(error instanceof Error){
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
}

async function getDataForce() {
  try {
    await fetch('')
  } catch (error: unknown) {
    const e = error as Error
    console.log(e.message);
  }
}

//! як працює з іншими типами

type U1 = unknown | number

type U2 = unknown & string



//! 3 Never  - те що ніколи не відбудиться

//* case1
function genereateError(message: string):never{
  throw new Error(message)
}

// //* case2 
// function dumError(): never{
//   while(true)
// }

// //* case2 
// function rec(): never{
//   return rec()
// }

// const a: never = undefined

//! реальний кейс

// type paymentAction = 'refund' | 'checkout' 
// | 'reject'

// function processAction(action: paymentAction){
//   switch (action) {
//     case 'refund':
//       console.log('refund');
//       break;
//     case 'checkout':
//       console.log('checkout');
//       break;
//     case 'reject':
//       console.log('reject');
//       break;
//     default:
//       const _: never = action
//       throw new Error('not action')
//   }
// }

// function isString(x: string | number): boolean{
//   if(typeof x === 'string'){
//     return true
//   } else if(typeof x === 'number'){
//     return false
//   }
//   genereateError('message')
// }


//!4 null 

// const n: null = null
// const n1: any = null
// const n2: number = null
// const n3: string = null


// interface IUser {
//   name: string
// }

// function getUser(){
//   if(Math.random() > 0.5){
//     return null
//   } else {
//     return{
//       name: 'Riki'
//     } as IUser
//   }
// }

// const user = getUser()
// const person = user.name

// if(user){
//   const person = user.name
// }



//? 4 перетворення з одного типа в інший 

// let a = 5
// let b: string = a.toString()

// let c = 'string'
// // let d: number = parseInt(c)
// let d: number = +c
 
// //! obj

// interface IUser{
//   name: string,
//   email: string,
//   login: string
// }


// const user: IUser = {
//   name: 'test',
//   email: 'test',
//   login: 'test'
// }

// interface IAdmin{
//   name: string,
//   role: number
// }

// // const admin: IAdmin = {
// //   ...user,
// //   role: 1
// // }

// function userToAdmin(user: IUser): IAdmin {
//   return{
//     name: user.name,
//     role: 1
//   }
// }

// const topAdmin = userToAdmin(user)

//? 5 type Guard

// function logId(id: string | number){
//   if(typeof id === 'string'){
//     return id
//   } else if(typeof id === 'number'){
//     return id
//   }
//   return id
// }

// function logId1(id: string | number){
//   if(isString(id)){
//     return id
//   } else if(typeof id === 'number'){
//     return id
//   }
//   return id
// }

// function isString(x: string | number): x is string{
//   return typeof x === 'string'
// }

/////////////////////////////////////////////////////////////

interface IUser{
  name: string,
  email: string,
  login: string
}

const user: IUser = {
  name: 'test',
  email: 'test',
  login: 'test'
}


interface IAdmin{
  name: string,
  role: number
}

function isAdmin(user: IUser | IAdmin): user is IAdmin{
  return 'role' in user
}

function setRoleZero(user: IUser | IAdmin) {
  if(isAdmin(user)){
    user.role = 0
  } else {
    user
    throw new Error('this is not admin')
  }
}