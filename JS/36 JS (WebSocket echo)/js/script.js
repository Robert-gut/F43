const messagesDiv = document.getElementById('messages')
const messageInput = document.getElementById('messageInput')
const sendButton = document.getElementById('sendButton')
const connectButton = document.getElementById('connectButton')
const disconnectButton = document.getElementById('disconnectButton')

let websocket

function displayMessage(message) {
  const p = document.createElement('p')
  p.textContent = message
  messagesDiv.appendChild(p)
  messagesDiv.scrollTop = messagesDiv.scrollHeight
}

connectButton.onclick = () => {
  if(!websocket || websocket.readyState === WebSocket.CLOSED){
    websocket = new WebSocket('wss://echo.websocket.org/')

    websocket.onopen = () => {
      console.log('Зєднання встановлено');
      displayMessage('Система: Зєднання встановлено')
      connectButton.disabled = true
      disconnectButton.disabled = false
    }

    websocket.onmessage = (event) => {
      console.log('Отримано повідомлення', event.data);
      displayMessage(`Сервер: ${event.data}`)
    }

    websocket.onclose = (event) => {
      console.log('Зєднання закрито');
      displayMessage(`Система: Зєднання закрито код: ${event.code}, причина: ${event.reason}`)
      connectButton.disabled = false
      disconnectButton.disabled = true
    }

    websocket.onerror = (event) => {
      console.error('Помилка WebSocket', event);
      displayMessage(`Система: Помилка WebSocket' ${event}`)
      connectButton.disabled = false
      disconnectButton.disabled = true
    }
  } else {
    displayMessage('Система: Зєднання вже встановлено')
  }
}

disconnectButton.onclick = () => {
  if(websocket && websocket.readyState === WebSocket.OPEN){
    websocket.close()
  }else {
    displayMessage('Система: Зєданання не встановлено або вже заерито')
  }
}

sendButton.onclick = () => {
  if(websocket && websocket.readyState === WebSocket.OPEN){
    const message = messageInput.value
    websocket.send(message)
    displayMessage(`Ви: ${message}`)
    messageInput.value = ''
  } else {
    displayMessage('Система: Зєданання не встановлено або вже заерито')
  }
}
