const url = 'https://jsonplaceholder.typicode.com/posts'

//!1  xmlHTTPrequest застарілий

// const xmlHTTPreq = (method, url) => {
//     return new Promise ((res, rej)=>{
//         const xhr = new XMLHttpRequest()
//         xhr.open(method, url)
//         xhr.responseText = 'json'
//         xhr.onload = () => {
//             if(xhr.status > 399){
//                 rej(xhr.response)
//             }else{
//                 res(xhr.response)
//             }
//         }
//         xhr.send()
//     })
// }

// xmlHTTPreq('get', url)
// .then(data => console.log(data))

//!2 fetch 

// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))


// async function name(params) {
//     await 1
//     await 2
//     await 3
//     await 4
// }

// try {
    
// } catch (error) {
    
// }


async function fetchTest(){
    try {
        const response = await fetch(url)
        const data = await response.json()
        const list = document.querySelector('ol')

        const el = data.map(element => {
            return `<li>${element.title.toUpperCase()} <br> ${element.body}</li>`
        });
        list.insertAdjacentHTML('afterbegin', el.join(' '))
    } catch (error) {
        console.error(error);
    }
}

fetchTest()
