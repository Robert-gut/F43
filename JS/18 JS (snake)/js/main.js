const gameContainer = document.getElementById('gameContainer')
const scoreDisplay = document.getElementById('score')

const box = 20
const gameSize = 400


let snake = [{x:200, y:200}]
let direction = 'RIGHT'
let food = generateFood()
let score = 0

function generateFood(){
  let newFood
  do {
    newFood = {
      x: Math.floor(Math.random() * (gameSize/box)) * box,
      y: Math.floor(Math.random() * (gameSize/box)) * box,
    }
  } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
  return newFood
}

document.addEventListener('keydown', e => {
  if(e.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP'
  if(e.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN'
  if(e.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT'
  if(e.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT'
})

function update(){
  let head = {...snake[0]}

  if(direction === 'UP') head.y -= box
  if(direction === 'DOWN') head.y += box
  if(direction === 'LEFT') head.x -= box
  if(direction === 'RIGHT') head.x += box

  if(
    head.x < 0 || head.x >= gameSize ||
    head.y < 0 || head.y >= gameSize ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ){
    alert('Гра завершина! Ваш рахунок:' + score)
    document.location.reload()
    return
  }

  if (head.x === food.x && head.y === food.y) {
    score++
    food = generateFood()
  }else{
    snake.pop()
  }
  snake.unshift(head)
}

function draw() {
  gameContainer.innerHTML = ''

  snake.forEach(segment => {
    const snakeSegment = document.createElement('div')
    snakeSegment.classList = 'snake-segment'
    snakeSegment.style.left = segment.x + 'px'
    snakeSegment.style.top = segment.y + 'px'
    gameContainer.appendChild(snakeSegment)
  })

  const foodElement = document.createElement('div')
  foodElement.classList = 'food'
  foodElement.style.left = food.x + 'px'
  foodElement.style.top = food.y + 'px'
  gameContainer.appendChild(foodElement)

  scoreDisplay.textContent = 'Рахунок: ' + score
}


function gameLoop(){
  update()
  draw()
  setTimeout(gameLoop, 70)
}

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    gameLoop()
  }
})