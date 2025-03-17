//! OOP  Class

// oop
// 1 Інкапсуляція
// 2 Наслідування
// 3 Поліморфізм
// 4 Абстракцію


class Car{
  constructor(brand, model, color, year, typeOfEngine){
    this.brand = brand
    this.model = model
    this.color = color
    this.year = year
    this.typeOfEngine = typeOfEngine
  }
  showCar(){
    return `${this.brand} ${this.model}`
  }
  getAllInfo(){
    Object.keys(this).forEach(el => {
      console.log(`${el}: ${this[el]}`);
    })
  }
}


// const bmw = new Car('BMW', 'm5', 'black', 2020, 'disel')
// const citroen = new Car('Citroen', 'jumpy', 'white', 2014, 'disel')
// console.log('✌️citroen --->', citroen);
// console.log('✌️bmw --->', bmw);

// console.log(bmw.showCar());
// console.log(citroen.showCar());

// console.log(bmw.getAllInfo());
// console.log(citroen.getAllInfo());

// ! наслідування (2 ооп)

class Sedan extends Car{
  constructor(brand, model, color, year, typeOfEngine, maxSpeed){
    super(brand, model, color, year, typeOfEngine)
    this.maxSpeed = maxSpeed
  }
}

class Trak extends Car{
  constructor(brand, model, color, year, typeOfEngine, load, trailer){
    super(brand, model, color, year, typeOfEngine)
    this.load = load
    this.trailer = trailer
  }

  editTrailerStatus(){
    if(this.trailer){
      this.trailer = false
    } else{
      this.trailer = true
    }
  }

  trailerStatus(){
    return this.trailer
  }


}


// const honda = new Sedan('Honda', '9', 'black', 2016, 'benzin', 260)
// const volvo = new Trak('Volvo', 'FH16', 'black', 2020, 'disel', 40, true)

// volvo.editTrailerStatus()
// volvo.editTrailerStatus()
// volvo.editTrailerStatus()
// volvo.editTrailerStatus()
// volvo.editTrailerStatus()

// console.log(volvo.trailerStatus());

// honda.getAllInfo();
// volvo.getAllInfo();



//! інкапсуляція (1)

// class Person {
//   #name
//   #age
//   #sex

//   constructor(name, age, sex){
//     this.#name = name
//     this.#age = age
//     this.#sex = sex
//   }

//   editAge(age){
//     if(age < this.#age){
//       console.error('invalid data');
//       return
//     }
//     this.#age = age
//   }

//   showInfo(type){
//     if (type === 'name') {
//       return this.#name
//     }else if(type === 'age'){
//       return this.#age
//     }
//   }

// }

// const person = new Person('Tolik', 40, 'men')

// person.#name = 'Ivan'
// person.#age = 20
// console.log('✌️person --->', person.#name);

// person.editAge(39)
// person.editAge(44)

// console.log('✌️person --->', person.showInfo('name'));
// console.log('✌️person --->', person.showInfo('age'));

// console.log('✌️person --->', person);


//! 2 наслідування 

// class Class1 {
//   constructor(test){
//     this.test = test
//   }

//   show(){
//     console.log(this.test);
//   }
// }

// class Class2 extends Class1 {
//   constructor(test){
//     super(test)
//   }
// }

// class Class3 extends Class2 {
//   constructor(test){
//     super(test)
//   }
// }

// class Class4 extends Class3 {
//   constructor(test){
//     super(test)
//   }
// }

// const test = new Class4('test')

// test.show()


//! 3 поліморфізм

class Class1 {
  constructor(test){
    this.test = test
  }

  show(){
    console.log(this.test);
  }
}

class Class2 extends Class1 {
  constructor(test){
    super(test)
  }
}

class Class3 extends Class2 {
  constructor(test){
    super(test)
  }
}

class Class4 extends Class3 {
  constructor(test, test2){
    super(test)
    this.test2 = test2
  }

  show(){
    super.show()
    console.log(this.test2);
  }
}

const test = new Class4('test', 'test2')

test.show()



class Test {
  constructor(test1, test2){
    this.test1 = test1
    this.test2 = test2
    this.arr = []
  }
}





const objectName = {
  arr: []
}

function add (hobby){
  objectName.arr.push(hobby)
}

/////////////////////////////////////

class ObjName{
  constructor(){
    this.arr = []
  }

  add(hobby){
    this.arr.push(hobby)
  }
}