// ! DOM - document object model

// console.log(window.document);
// console.log(document);


// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.body);
// console.log(document.head);

//! навігація по елементам 

// console.log(document.body.children[1]);//! показує всі дочірні елементи

// console.log(document.body.firstElementChild);//! перший дочірній ел
// console.log(document.body.lastElementChild);//! останій дочірній ел

// console.log(document.body.previousElementSibling);//! ел перед нашим ел
// console.log(document.head.nextElementSibling);//! ел після нашого ел

// console.log(document.body.parentNode)//! батьківський ел нашого ел

//? ПОШУК ЕЛЕМЕНТІВ В DOM
// .class
// #id
// h1
// []
// *

//!1 querySelectorAll(селектор) - якій вертає колекцію всіх знайдених ел

// console.log(document.querySelectorAll('li'));
// console.log(document.querySelectorAll('.test'));
// console.log(document.querySelectorAll('#test2'));
// console.log(document.querySelectorAll('#test2'));
// console.log(document.querySelectorAll('[name="test"]'));

// //!2 querySelector(селектор) - вертає перший знайдений ел

// console.log(document.querySelector('li'));
// console.log(document.querySelector('.test'));
// console.log(document.querySelector('#test1'));
// console.log(document.querySelector('[name="test"]'));

// //! 3 getElementById() - пошук по id
//   console.log(document.getElementById('test1'));
  

// //! 4 getElementByTagName() - пошук по TagName => []
// console.log(document.getElementsByTagName('p'));


// //! 5 getElementByClassName() - пошук по ClassName => []
// console.log(document.getElementsByClassName('test'));

// //! 6 getElementByName() - пошук по Name => []
// console.log(document.getElementsByName('test'));


//* Види колекцій: статична колекція, жива

// const static = document.querySelectorAll('.test')//static
// const noStatic = document.getElementsByClassName('test')//живой

// document.querySelector('ol').insertAdjacentHTML(
//   'beforeend',
//   '<li class="test">lorem</li>'
// )


// console.log('✌️static --->', static);
// console.log('✌️noStatic --->', noStatic);


//! пошук по нащадках closest()

// console.log(document.querySelector('li').closest('ol'));
// console.log(document.querySelector('li').closest('body'));
// console.log(document.querySelector('li').closest('html'));

// console.log(document.querySelector('li').closest('p'));//null

//! перевірка на атрибута mathces()

// console.log(document.querySelector('.test').matches('.test'))

//? Редагування елементів

// const p = document.querySelector('p')
// console.log(p);

//! inerHTML - змінювати контент в середині разом з тегами
// console.log(p.innerHTML);
// p.innerHTML = 'test test test'
// p.innerHTML = `test ${1+1000} <br> <span style="color: red;">test</span> test`

//! outerHTML - мінювати контент в середині разом з тегами включно сам тег ел

// console.log(p.outerHTML);
// p.outerHTML = 'test test test'
// p.outerHTML = `<h3>test test test</h3>`


//! textContent - зайсмається буквально контентом ел
// console.log(p.textContent);

// p.textContent = `test test test`
// p.textContent = `test ${1+1000} <br> <span style="color: red;">test</span> test`


//? Створення ел

//! createElement() - метод для створення ел

// const elementTable = document.createElement('table')
// console.log('✌️elementTable --->', elementTable);

//! вставити елемент elementTable

// const h1 = document.querySelector('h1')

// h1.before(elementTable)//перед ел h1
// h1.before(elementTable,`<h2>test</h2>`)
// h1.after(elementTable)//після ел h1
// h1.prepend(elementTable)//h1 в середині на початку
// h1.append(elementTable)//h1 в середині в кінці

const cars = [
  {name: 'BMW', model: 'X5', productionYear: 2019, price: 33000, run: 66000, id: 1},
  {name: 'Audi', model: 'Q7', productionYear: 2020, price: 40000, run: 50000, id: 2},
  {name: 'Mercedes', model: 'GLC', productionYear: 2018, price: 35000, run: 70000, id: 3},
  {name: 'Toyota', model: 'RAV4', productionYear: 2021, price: 30000, run: 30000, id: 4},
  {name: 'Honda', model: 'CR-V', productionYear: 2019, price: 28000, run: 65000, id: 5}
]


//! методи добавляння або редагування
const elementTable = document.createElement('table')
// const elementTHead = document.createElement('thead')
document.querySelector('h1').before(elementTable)

//* insertAdjacentHTML(), insertAdjacentElement(), insertAdjacentText(),

//! insertAdjacentHTML() - дозволяє виводити тегі які ми передаємо у вигляді string

elementTable.insertAdjacentHTML(
  'beforeend',
  '<tr><th>name</th><th>model</th><th>productionYear</th><th>price</th><th>run</th></tr>'
)

// //! insertAdjacentElement() - дозволяє нові створенні ел

// elementTable.insertAdjacentElement(
//   'beforeend',
//   elementTHead
// )


// //! insertAdjacentText() - вставляти текст без тегів

// elementTable.insertAdjacentText(
//   'beforeend',
//   `text`
// )

//////////////////////////////////////////////

cars.forEach(car => {
  elementTable.insertAdjacentHTML(
    'beforeend',
    `<tr>
      <td>${car.name}</td>
      <td>${car.model}</td>
      <td>${car.productionYear}</td>
      <td>${car.price}</td>
      <td>${car.run}</td>
    </tr>`
  )
})

