
//! assert() 

//! 1 тестування матиматичних функцій

function add(a, b) {
    return a + b
}


console.assert(add(2, 3) === 5, 'Тест 1 провалився: 2 + 3 має бути 5')
console.assert(add(-1, 5) === 4, 'Тест 2 провалився: -1 + 5 має бути 4')
console.assert(add(0, 0) === 0, 'Тест 3 провалився:  0 + 0 має бути 0')
console.assert(add(2.5, 1.5) === 4, 'Тест 4 провалився:  2.5 + 1.5 має бути 4')

//! 2 тестування рядки

function greet(name) {
    return `Hello, ${name}`
}

console.assert(greet('Robert') === `Hello, Robert`, 'Тест 1 провалився')
console.assert(greet('') === `Hello, `, 'Тест 2 провалився')
console.assert(greet(' ') === `Hello,  `, 'Тест 3 провалився')

//! 3 тестування фанкцій які працюють з масивами

function findMax(arr) {
    if(!arr || arr.lenth === 0){
        return undefined
    }
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max) max = arr[i]
    }
    return max
}

console.assert(findMax([1,2,34,5,6,7,8]) === 34, 'Тест провалений 1')
console.assert(findMax([-1,-2,-34,-5,-6,-7,-8]) === -1, 'Тест провалений 2')
console.assert(findMax([10]) === 10, 'Тест провалений 3')
console.assert(findMax([10]) === 10, 'Тест провалений 4')
console.assert(findMax([]) === undefined, 'Тест провалений 5')
console.assert(findMax(null) === undefined, 'Тест провалений 6')


//! 4 тестування фанкцій які працюють з object

function createUser(firstName, lastName) {
    return{
        firstName: firstName,
        lastName: lastName,
        fullName: `${firstName} ${lastName}`
    }
}


const user1 = createUser('Robert', 'Barnabishvili')
console.assert(user1.firstName === 'Robert', 'Тест провалений 1')
console.assert(user1.lastName === 'Barnabishvili', 'Тест провалений 2')
console.assert(user1.fullName === 'Robert Barnabishvili', 'Тест провалений 3')

//! 5 тестування фанкцій які працюють з умовними операторами

function isEven(num) {
    if (typeof num !== 'number' || !Number.isInteger(num)) {
        return 'Має бути ціле число'
    }
    return num % 2 === 0
}

console.assert(isEven(4) === true, 'Тест провалений 1')
console.assert(isEven(7) === false, 'Тест провалений 2')
console.assert(isEven(0) === true, 'Тест провалений 3')
console.assert(isEven(-2) === true, 'Тест провалений 4')
console.assert(isEven(3.14) === 'Має бути ціле число', 'Тест провалений 5')
console.assert(isEven('hello') === 'Має бути ціле число', 'Тест провалений 6')



function describe(description, fn) {
    console.log(description);
    fn()
}

function it(message, fn) {
    try {
        fn()
        console.log(`✔ ${message}`); 
    } catch (error) {
        console.error(`❌ ${message}: ${error}`);
    }
}

function expect(actual){
    return{
        toBe: (expected) => {
            if(actual !== expected){
                throw new Error(`Очікувалося ${expected}, отримали ${actual}`)
            }
        },
        toEqual: (expected) => {
            if(JSON.stringify(actual) !== JSON.stringify(expected)){
                throw new Error(`Очікувалося ${expected}, отримали ${actual}`)
            }
        }
    }
}

function add(a, b) {
    return a + b
}

describe('Функція add', ()=>{
    it('повинне повертати суму 2-х позитивних чисел', () => {
        expect(add(2,3)).toBe(5)
    })
    it('повинне працюбвати з відємними значеннями числами', () => {
        expect(add(-1,5)).toBe(4)
    })
    it('повинне працюбвати з 0 значеннями числами', () => {
        expect(add(0,0)).toBe(0)
    })
})

function greet(name) {
    return `Hello, ${name}`
}

describe('Функція greet', () => {
    it("Повинно повертати правельне ім'я", ()=>{
        expect(greet('Robert')).toBe(`Hello, Robert`)
    })

    it("повинно поаертати порожнє ім'я", ()=>{
        expect(greet(' ')).toBe(`Hello, `)
    })
})