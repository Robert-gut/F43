const search = document.getElementById('search')

window.addEventListener('keypress', e => {if(e.key === 'Enter')fetchData(generateURL())})
search.addEventListener('click',() => {fetchData(generateURL())})

function generateURL() {
    const cityName = document.querySelector('input').value
    const mainUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=ua&appid=33a4edb2fe337fd387e632012d97d0de`
    return mainUrl
}

async function fetchData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        if(data.cod === '404'){
            console.log(data.message);
            return
        }
        console.log(data);
        showInfo(data)  
        showInfo5Days(data)
    } catch (error) {
        console.error(error);
    }
} 


function showInfo(data) {
    const all = data.list[0]
    const {dt_txt, main, visibility, weather, wind } = all
    const {feels_like, grnd_level, humidity, pressure, sea_level, temp, temp_kf, temp_max, temp_min} = main
    const {description, icon} = weather[0]
    const {deg, gust, speed} = wind
    const img = `https://openweathermap.org/img/wn/${icon}@2x.png`
    const ul = document.getElementById('weatherNaw')
    const elments = `
    <li>dt_txt:${dt_txt}</li>
    <li>visibility:${visibility}</li>
    <li>feels_like:${feels_like}</li>
    <li>grnd_level:${grnd_level}</li>
    <li>humidity:${humidity}</li>
    <li>pressure:${pressure}</li>
    <li>sea_level:${sea_level}</li>
    <li>temp:${temp}</li>
    <li>temp_kf:${temp_kf}</li>
    <li>temp_max:${temp_max}</li>
    <li>temp_min:${temp_min}</li>
    <li>temp_min:${temp_min}</li>
    <li>description:${description}</li>
    <li><img src=${img}></li>
    <li>deg:${deg}</li>
    <li>gust:${gust}</li>
    <li>speed:${speed}</li>
    `
    ul.innerHTML = elments
}

function showInfo5Days(data) {
    const table = document.getElementById('weatherfor5Days')

    data.list.forEach(el => {
        const {dt_txt, main, visibility, weather, wind } = el
        const {feels_like, grnd_level, humidity, pressure, sea_level, temp, temp_kf, temp_max, temp_min} = main
        const {description, icon} = weather[0]
        const {deg, gust, speed} = wind
        const img = `https://openweathermap.org/img/wn/${icon}@2x.png`
        const elments = `
        <td>dt_txt:${dt_txt}</td>
        <td>visibility:${visibility}</td>
        <td>feels_like:${feels_like}</td>
        <td>grnd_level:${grnd_level}</td>
        <td>humidity:${humidity}</td>
        <td>pressure:${pressure}</td>
        <td>sea_level:${sea_level}</td>
        <td>temp:${temp}</td>
        <td>temp_kf:${temp_kf}</td>
        <td>temp_max:${temp_max}</td>
        <td>temp_min:${temp_min}</td>
        <td>temp_min:${temp_min}</td>
        <td>description:${description}</td>
        <td><img src=${img}></td>
        <td>deg:${deg}</td>
        <td>gust:${gust}</td>
        <td>speed:${speed}</td>
        `
        const tr = document.createElement('tr')
        tr.innerHTML = elments
        table.appendChild(tr)
    });
}