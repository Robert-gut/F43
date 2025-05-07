window.onload = () => {
    const userData = {
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        cookiesEnabled: navigator.cookieEnabled,
        screenResolution: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }

    document.getElementById('userData').textContent = JSON.stringify(userData, null, 2)
}

function checkSpeakers() {
    const audio = document.getElementById('speaker-sound')
    audio.play()
    .then(()=>{
        document.getElementById('speaker-status').textContent = `🔊 Відтворюється тестовий звук.Ви його чуєте?`
    })
    .catch((err)=> {
        document.getElementById('speaker-status').textContent = `❌ Помилка відтворення`
    })
}


// check mic

let mediaRecorder
let audioChucks = []

function startRecording() {
    navigator.mediaDevices.getUserMedia({audio: true})
    .then(stream => {
        mediaRecorder = new MediaRecorder(stream)
        audioChucks = []

        mediaRecorder.ondataavailable = e => {
            if(e.data.size > 0){
                audioChucks.push(e.data)
            }
        }

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChucks, {type: 'audio/webm'})
            const audioUrl = URL.createObjectURL(audioBlob)
            const audio = document.getElementById('mic-playback')
            audio.src = audioUrl
            audio.style.display = 'block'
            document.getElementById('mic-status').textContent = '✅Запис завершеною Можна прослухатию'
        }

        mediaRecorder.start()
        document.getElementById('mic-status').textContent = '🔴йде запис звуку...(5 секунди)'

        setTimeout(()=>{
            mediaRecorder.stop()
        },5000)
    })
    .catch(err => {
        document.getElementById('speaker-status').textContent = `❌ Помилка мікрафона`
    })
}


//  camera

function checkCamera(){
    navigator.mediaDevices.getUserMedia({video: true})
    .then(stream => {
        const video = document.getElementById('cameraPreview')
        video.srcObject = stream
        document.getElementById('cam-status').textContent = '✅ Камера працює'
    })
    .catch(err => {
        document.getElementById('cam-status').textContent = '❌ Камера НЕпрацює'
    })
}


function checkGeolocation() {
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords
            document.getElementById('geo-status').textContent = `✅ Геолокація: ${latitude}, ${longitude}`
        }, error => {
            document.getElementById('geo-status').textContent = `❌ не вдалося отримати геолокацію`
        })
    } else {
        document.getElementById('geo-status').textContent = `❌геолокація не підтримується`
    }
}