const messagesDiv = document.getElementById('messages')
const websocketUrl = 'wss://stream.binance.com/ws/btcusdt@aggTrade'
let websocket

function displayMessage(message) {
  const p = document.createElement('p')
  p.textContent = message
  messagesDiv.appendChild(p)
  messagesDiv.scrollTop = messagesDiv.scrollHeight
}

function connectBinanceWebSocket() {
  websocket = new WebSocket(websocketUrl)

  websocket.onopen = (event) => {
    console.log('Зєднання з Binance WebSocket встановлено');
    displayMessage('Системне: Зєднання з Binance WebSocket встановлено');
  }

  websocket.onmessage = (event) => {
    try {
      const tradeData = JSON.parse(event.data)
      console.log('✌️tradeData --->', tradeData);

      const price = parseFloat(tradeData.p).toFixed(2)
      const quantity = parseFloat(tradeData.q).toFixed(5)
      const timestamp = new Date(tradeData.T).toLocaleTimeString()
      const message = `Час: ${timestamp}, Ціна: ${price} USDT, Кількість: ${quantity} BTC`
      const p = document.createElement('p')
      p.classList.add('trade')
      p.textContent = message
      messagesDiv.appendChild(p)
      messagesDiv.scrollTop = messagesDiv.scrollHeight
    } catch (error) {
      console.error('Помилка обробки даних', error);
    }
  }

  websocket.onclose = (event) => {
    console.log(`Зєднання з Binance WebSocket закрито (код: ${event.code}, причина: ${event.reason})`);
    displayMessage(`Зєднання з Binance WebSocket закрито (код: ${event.code}, причина: ${event.reason})`);

    setTimeout(connectBinanceWebSocket, 5000)
  }

  websocket.onerror = (event) => {
    console.error(`Зєднання з Binance WebSocket ERROR (код: ${event.code}, причина: ${event.reason})`);
    displayMessage(`Зєднання з Binance WebSocket ERROR (код: ${event.code}, причина: ${event.reason})`);

  }
}


connectBinanceWebSocket()