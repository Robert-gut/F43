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



if ('geolocation' in navigator) {
   navigator.geolocation.getCurrentPosition(position => {
    console.log('lat:', position.coords.latitude);
    console.log('lon:', position.coords.longitude);
   }) 
}