//! class 

// class User {
//   name: string

//   constructor(name: string){
//     this.name = name
//   }
// }

// const user = new User('Roman')
// user.name = 'Ben'

// class Admin {
//   role: number
// }

// const admin = new Admin()
// admin.role = 1

//? конструктор, оверлоуд, перезагрузку


// class User {
//   name: string
//   age: number

//   constructor()
//   constructor(name: string)
//   constructor(age: number)
//   constructor(name: string, age: number)
//   constructor(ageOrName?: string | number){
//     if(typeof ageOrName === 'string'){
//       this.name = ageOrName
//     } else if(typeof ageOrName === 'number'){
//       this.age = ageOrName
//     }
//   }
// }

// const userTest = new User()
// const userTest1 = new User('Rob')
// const userTest2 = new User(40)
// const userTest3 = new User('Anna', 50)


//? методи

enum PaymentStatus {
  Holded,
  Processed,
  Reversed
}


class Payment {
  id: number
  status: PaymentStatus
  createAt: Date
  updetedAt: Date

  constructor(id: number){
    this.id = id
    this.createAt = new Date()
    this.status = PaymentStatus.Holded
  }

  getPaymentLifeTime():number{
    return new Date().getTime() - this.createAt.getTime()
  }

  unholdPayment():void{
    if(this.status === PaymentStatus.Processed){
      throw new Error()
    }
    this.status = PaymentStatus.Processed
    this.updetedAt = new Date()
  }
}

const payment = new Payment(1)
payment.unholdPayment()
const time = payment.getPaymentLifeTime()


//? перезагрузка методів

class RootUser {
  skills: string[]

  addSkill(skill: string):void
  addSkill(skill: string[]):void
  addSkill(skillOrSkills: string | string[]):void{
    if(typeof skillOrSkills === 'string'){
      this.skills.push(skillOrSkills)
    }else{
      this.skills.concat(skillOrSkills)
    }
  }
}