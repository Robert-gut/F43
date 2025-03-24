//! localStorage, Session storage , Cookies 


//! LS
const LSSave = document.getElementById('LSSave')
const LSRead = document.getElementById('LSRead')
const LSDel = document.getElementById('LSDel')
const LSClear = document.getElementById('LSClear')

LSSave.addEventListener('click', ()=>{
  const key = document.getElementById('LSname').value
  const value = document.getElementById('LSvalue').value
  localStorage.setItem(key, value)
})

LSRead.addEventListener('click', ()=>{
  const key = document.getElementById('LSname').value
  document.getElementById('LSdata').textContent = ''
  document.getElementById('LSdata').textContent = localStorage.getItem(key)
})

LSDel.addEventListener('click', ()=>{
  const key = document.getElementById('LSname').value
  localStorage.removeItem(key)
})

LSClear.addEventListener('click', ()=>{
  localStorage.clear()
})

//! SS

const SSSave = document.getElementById('SSSave')
const SSRead = document.getElementById('SSRead')
const SSDel = document.getElementById('SSDel')
const SSClear = document.getElementById('SSClear')

SSSave.addEventListener('click', ()=>{
  const key = document.getElementById('SSname').value
  const value = document.getElementById('SSvalue').value
  sessionStorage.setItem(key, value)
})

SSRead.addEventListener('click', ()=>{
  const key = document.getElementById('SSname').value
  document.getElementById('SSdata').textContent = ''
  document.getElementById('SSdata').textContent = sessionStorage.getItem(key)
})

SSDel.addEventListener('click', ()=>{
  const key = document.getElementById('SSname').value
  sessionStorage.removeItem(key)
})

SSClear.addEventListener('click', ()=>{
  sessionStorage.clear()
})


//! coockie

const cookieSave = document.getElementById('cookieSave')
const cookieRead = document.getElementById('cookieRead')
const cookieDel = document.getElementById('cookieDel')
const cookieClear = document.getElementById('cookieClear')

cookieSave.addEventListener('click', () => {
  const key = document.getElementById('cookieName').value
  const value = document.getElementById('cookieValue').value
  document.cookie = `${key}=${value}; expires=${new Date(Date.now()+ 900000).toUTCString()}; secure`
})

cookieRead.addEventListener('click', ()=>{
  const key = document.getElementById('cookieName').value
  const cookies = document.cookie.split(';')
  const data = cookies.find(cookie => cookie.trim().startsWith(key))
  document.getElementById('cookiedata').textContent = ''
  document.getElementById('cookiedata').textContent = data.split('=')[1]
})

cookieDel.addEventListener('click', ()=>{
  const key = document.getElementById('cookieName').value
  document.cookie = `${key}=; max-age=-1`
})

cookieClear.addEventListener('click', ()=>{
  const cookies = document.cookie.split(';')
  const cookieKey = cookies.map(el => el.trim().split('=')[0] )
  cookieKey.forEach(el =>  document.cookie = `${el}=; max-age=-1`)
})


// JSON.stringify()
// JSON.parse()

localStorage.setItem('obj', JSON.stringify([{name:1},{name:2}]))
console.log(JSON.parse(localStorage.getItem('obj')));