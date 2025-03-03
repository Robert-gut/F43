const pencil = document.querySelector('h1 img')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const all = document.getElementById('all')
const inProcess = document.getElementById('inProcess')
const done = document.getElementById('done')

pencil.addEventListener('click', () => input.classList.toggle('displayNone'))
input.addEventListener('keypress', e => e.key === 'Enter' ? addTask() : null)

function addTask(){
  const li = document.createElement('li')
  const span = document.createElement('span')
  const img = document.createElement('img')
  li.textContent = input.value
  img.src = './img/icons8-delete-100.png'
  span.insertAdjacentElement('afterbegin', img)
  li.insertAdjacentElement('afterbegin', span)
  ul.insertAdjacentElement('beforeend', li)
  input.value = ''
}

ul.addEventListener('click', e => {
  e.target.tagName === 'LI' && e.target.classList.toggle('done')
  e.target.tagName === 'IMG' && e.target.parentElement.parentElement.remove()
})

all.addEventListener('click',()=>{
  const li = document.querySelectorAll('li')
  li.forEach(li=>{
    li.style.display = 'list-item'
  })
})

inProcess.addEventListener('click',()=>{
  const li = document.querySelectorAll('li')
  li.forEach(li=>{
    li.style.display = 'list-item'
    li.className === 'done' ? li.style.display = 'none' : null
  })
})

done.addEventListener('click',()=>{
  const li = document.querySelectorAll('li')
  li.forEach(li=>{
    li.style.display = 'list-item'
    li.className !== 'done' ? li.style.display = 'none' : null
  })
})