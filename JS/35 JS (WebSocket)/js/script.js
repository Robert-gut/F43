// ! web socket створення

const websocket = new WebSocket('ws://example.com/socketserver')

// ws:// - не захищенні аналог (http)
// wss:// - захищенні аналог (https)

//! події 

//! open
//! send

websocket.onopen = (event) => {
  console.log('Зєднання встановлено');
  websocket.send('Привіт сервер!')
}

//! message

websocket.onmessage = (event) => {
  console.log('отримано повідомлення від сервера', event.data);
}

//! close

websocket.onclose = (event) => {
  if(event.wasClean){
    console.log('Зєднання закрито');
  }else {
    console.error('Зєднання обірвано')
  }
}

//! error 

websocket.onerror = (event) => {
  console.error('Помилка websocket', event);
}

// //////////////////////////////////////////////////////

//! відправка даних send()

websocket.send('Це повідомлення від клієнта')

const dataToSend = {type: 'chat', message: 'Hello!'}

websocket.send(JSON.stringify(dataToSend))


//! clese() закривати зєднання

// websocket.close()

websocket.close(1000, 'Робота завершена')
