const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'






async function getData(date) {
    try {
        const response = await fetch(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${date}`)
        const data = await response.json()
        
        data.exchangeRate.forEach(element => {
            console.log(element);
            
            const table = document.querySelector('table')
            const tr = document.createElement('tr')
            tr.innerHTML = `
            <td>${element.ccy}</td>
            <td>${element.base_ccy}</td>
            <td>${element.buy}</td>
            <td>${element.sale}</td>
            `
            table.appendChild(tr)
        });
    } catch (error) {
        console.error(error)
    }
}

getData('20.11.2012')


// async function getData() {
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
        
//         data.forEach(element => {
//             const table = document.querySelector('table')
//             const tr = document.createElement('tr')
//             tr.innerHTML = `
//             <td>${element.ccy}</td>
//             <td>${element.base_ccy}</td>
//             <td>${element.buy}</td>
//             <td>${element.sale}</td>
//             `
//             table.appendChild(tr)
//         });
//     } catch (error) {
//         console.error(error)
//     }
// }
// getData()
