let timer = 30
let score = 0
let interval
let timeout
let isActive = false

const start = document.getElementById('start')
const gameContainer = document.getElementById('gameContainer')

start.addEventListener('click', startGame)


function startGame(){
  isActive = true
  score = 0
  timer = 30
  start.style.display = 'none'
  createCircle()
  interval = setInterval(() => {
    if(timer > 0){
      timer--
      document.getElementById('timer').textContent = `Timer: ${timer}`
    } else{
      clearInterval(interval)
      clearTimeout(timeout)
      isActive = false
      gameContainer.lastElementChild.remove()
      alert('Score: ' + score)
      start.style.display = 'inline'
    }
  }, 1000)

}

function createCircle() {
  const circle = document.createElement('div')
  circle.className = 'circle'
  circle.style.top = `${Math.floor(Math.random() *  (gameContainer.clientHeight - 70))}px`
  circle.style.left = `${Math.floor(Math.random() *  (gameContainer.clientWidth - 70))}px`
  circle.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
  timeout = setTimeout(()=>{
    circle.remove()
    createCircle()
  },800)

  circle.addEventListener('click', ()=>{
    if (isActive) {
      score++
      document.getElementById('score').textContent = `Score: ${score}`
      
      // circle.remove()
      // clearTimeout(timeout)
      // createCircle()
    }else{
      return
    }
  })
  gameContainer.appendChild(circle)
}
