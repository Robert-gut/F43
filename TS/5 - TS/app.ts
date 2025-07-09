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

// enum PaymentStatus {
//   Holded,
//   Processed,
//   Reversed
// }


// class Payment {
//   id: number
//   status: PaymentStatus
//   createAt: Date
//   updetedAt: Date

//   constructor(id: number){
//     this.id = id
//     this.createAt = new Date()
//     this.status = PaymentStatus.Holded
//   }

//   getPaymentLifeTime():number{
//     return new Date().getTime() - this.createAt.getTime()
//   }

//   unholdPayment():void{
//     if(this.status === PaymentStatus.Processed){
//       throw new Error()
//     }
//     this.status = PaymentStatus.Processed
//     this.updetedAt = new Date()
//   }
// }

// const payment = new Payment(1)
// payment.unholdPayment()
// const time = payment.getPaymentLifeTime()


//? перезагрузка методів

// class RootUser {
//   skills: string[]

//   addSkill(skill: string):void
//   addSkill(skill: string[]):void
//   addSkill(skillOrSkills: string | string[]):void{
//     if(typeof skillOrSkills === 'string'){
//       this.skills.push(skillOrSkills)
//     }else{
//       this.skills.concat(skillOrSkills)
//     }
//   }
// }


//? гетери і сетери

// class User {
//   _login: string
//   password: string

//   set login(l: string){
//     this._login = 'user-' + l
//   }

//   get login(){
//     return 'no_login'
//   }

// }

// const person = new User()

// person.login = 'myLogin' //! set
// console.log(person.login);//! get


//? implements  extends

// type PaymentStatus = 'new' | 'paid'

// class Payment{
//   id: number
//   status: PaymentStatus = 'new'

//   constructor(id: number){
//     this.id = id
//   }
  
//   pay(): void{
//     this.status = 'paid'
//   }
// }

// class PersistedPaument extends Payment{
//   databaseId: number
//   paidAt: Date

//   constructor(){
//     const id = Math.random()
//     super(id)
//   }

//   seve(){

//   }

//   override pay(date?: Date){
//     super.pay()
//     if(date){
//       this.paidAt = date
//     }
//   }

// }

// new PersistedPaument().


//? видимість властивостей та методів

class Vehicle {
  public make: string //! ця властивість публічна
  private damages: string[] //! не доступна ззовні но доступна в середині класса
  private _model: string
  protected run: number //!   не доступна ззовні но доступна в середині класса і в його нащадків
  #price : number //! також приватне поле

  set model(m: string){
    this._model = m
  }
  get model(){
    this.run
    return this._model
  }

  addDamage(damage: string):void{
    this.damages.push(damage)
  }
}

new Vehicle().make = 'Y' // pablic
new Vehicle().// privat полів не має

new Vehicle().model = 'test'
new Vehicle().model


class EuroTrack extends Vehicle{
  setDamage(){
    this.
  }

  setRun(km: number){
    this.run = km / 0.62
  }

}

//? статичні поля 

class UserService{
  private static db: string[]

  static getUser(id: number){
    return UserService.db.findById(id)
  }

  create(){
    UserService.db
  }
}

UserService.db
UserService.getUser(1)

UserService.create()

new UserService().create()