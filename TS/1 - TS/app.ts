//! Змінні і константи типізовані

let message: string = 'Hello, TS!'
let count: number = 10
let like: boolean = true

let nullavleValue: null = null 
let undefinedValue: undefined = undefined 

// message = 123
// count = '10'
// like = null

//! any - будь який тип
let anyValue: any = 'Hello'

anyValue = 1
anyValue = null
anyValue = true

//! Визначення функцій з типами параметрів і з типом return

function add(a: number, b: number): number{
  return a + b
}

// add('10', 10)//error
// const suma: string = add(5, 10)//error

add(2,5)
let result: number = add(5,7)

//! Визнчення масивів з типами
const numvers: number[] = [1,2,3,4,5,6]
const typleValue: [number, string, boolean] = [2025, 'STEP', true]

//! Обєкти типізовані

const person: {name: string, age: number} = {
  name: 'Jon',
  age: 20
}

//! class з властивостями і методами

class Animal {
  name: string;

  constructor(name: string){
    this.name = name
  }

  sayHello(): void{
    console.log(`Hello, I'm ${this.name}!`);
  }
}

const cat = new Animal('Myrka')
cat.sayHello()

//! interface описувати обєкти

interface IPerson {
  name: string,
  age: number,
  email?: string
}

const user: IPerson = {
  name: 'Alex',
  age: 30,
  email: 'admin@gmail.com',
  // test: 34 error
}

//! Використанні умовних операторів та ціклів

const x: number = 5

if(x > 0){
  console.log('x +++');
} else if(x < 0){
  console.log('x ---');
} else {
  console.log('x === 0');
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//! модифікатори доступу в class

class Car {
  private brand: string
  //доступний в середені не доступний зовні
  protected speed: number
  //доступний в середені і в дочірніх класах не доступний зовні
  constructor(brand: string){
    this.brand = brand
    this.speed = 0
  }

  accelerate(amount: number): void{
    this.speed += amount
  }
}

class SportsCar extends Car{
  constructor(brand: string){
    super(brand)
  }

  accelerate(amount: number): void {
      if (amount > 50) {
        console.log('занадто велике прискорення!');
      } else {
        super.accelerate(amount)
      }
  }
}

const ferrari = new SportsCar('Ferrari')
ferrari.accelerate(100)