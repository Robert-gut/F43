const searchBtn = document.getElementById('search-btn')
const cityInput = document.getElementById('city-input')
const resultsDiv = document.getElementById('results')
const suggestions = document.getElementById('suggestions')
const tripList = document.getElementById('trip-list')

const GEO_API_KEY = '42e4f1afc5mshf98cca64b27608cp186fa2jsnf46c39352989'
const WEATHER_API_KEY = '33a4edb2fe337fd387e632012d97d0de'
const UNSPLASH_ACCESS_KEY = '1OsyMzdHGwPIj0nNpK46HYO5XcMA3SnILVXE0cOtEp4'



cityInput.addEventListener('input', async () => {
    const query = cityInput.value.trim()
    if(query.length < 2){
        suggestions.innerHTML = ''
        return
    }

    try {
        const res = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=5&namePrefix=${query}`,{
            method: 'GET',
            headers: {
                'x-rapidapi-key': GEO_API_KEY,
                'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
            }
        })
        const data = await res.json()
        suggestions.innerHTML = ''
        data.data.forEach(el => {
            const div = document.createElement('div')
            div.textContent = `${el.city}, ${el.country}`
            div.onclick = () => {
                cityInput.value = el.city
                suggestions.innerHTML = ''
            }
            suggestions.appendChild(div)
        });
        console.log(data);
    } catch (error) {
        console.error('GeoDB error:', error);
    }
})

searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim()
    if(!city)return alert('Please enter a city.')
    resultsDiv.innerHTML = 'Loading...'

    try {
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${WEATHER_API_KEY}`)
        if(!weatherRes.ok) throw new Error('Weather not found.')
        const weatherData = await weatherRes.json()
        console.log('✌️weatherData --->', weatherData);

        const countryCode = weatherData.city.country
        const countryRes = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        const countryData = await countryRes.json()
        console.log('✌️countryData --->', countryData);

        const imageRes = await fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_ACCESS_KEY}`)
        const imageData = await imageRes.json()
        console.log(imageData);

        const country = countryData[0]
        const weather = weatherData.list[0].weather[0].description
        const temp = weatherData.list[0].main.temp
        const imagesHTML = imageData.results
        .slice(0, 10)
        .map(img => `<img src="${img.urls.small}" alt="${city}" style="width: 150px">`)
        .join('')
        console.log('✌️imagesHTML --->', imagesHTML);


        resultsDiv.innerHTML = `
        <div class="result-card">
            <h3>${city}</h3>
            <p><strong>Country:</strong> ${country.name.common}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Currency:</strong> ${Object.values(country.currencies)[0].name}</p>
            <p><strong>Weather:</strong> ${weather}, ${temp}°C</p>
            <div class="image-gallery">${imagesHTML}</div>
            <button>Add to Trips</button>
        </div>
        `
    } catch (error) {
        resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`
    }
})