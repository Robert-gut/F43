// ! BOM - browser object model


//! navigator

// console.log(navigator);
// console.log(navigator.appVersion);
// console.log(navigator.platform);
// console.log(navigator.userAgent);
// console.log(navigator.language);
// console.log(navigator.languages[2]);
// console.log(navigator.cookieEnabled);

// console.log(navigator.hardwareConcurrency);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.permissions.query({name: 'geolocation'}));


//  geoloc


// if ('geolocation' in navigator) {
//    navigator.geolocation.getCurrentPosition(position => {
//     console.log('lat:', position.coords.latitude);
//     console.log('lon:', position.coords.longitude);
//    }) 
// }

// video

// const video = document.getElementById('camera')

// if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
//    navigator.mediaDevices.getUserMedia({video: true})
//    .then((stream) => {
//       console.log(stream);
//       video.srcObject = stream
//    })
//    .catch(err => console.error(err))
// }

// audio


// const audio = document.getElementById('audio')

// if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
//    navigator.mediaDevices.getUserMedia({audio: true})
//    .then((stream) => {
//       audio.srcObject = stream
//    })
//    .catch(err => console.error(err))
// }


//!2 screen

// console.log(screen.width);
// console.log(screen.height);


// console.log(screen.availWidth);
// console.log(screen.availHeight);

// console.log(screen.colorDepth);
// console.log(screen.pixelDepth);

// console.log(screen.orientation.type);

//!3 history

// console.log(history.length);

// history.back()
// history.forward()
// history.go(delta)

//! 4 location

// console.log(location.href);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);
// console.log(location.search);
// console.log(location.hash);

// location.assign('https://sinoptik.ua/')