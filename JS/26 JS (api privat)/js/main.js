const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

`https://api.privatbank.ua/p24api/exchange_rates?json&date=`


async function getData() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        
        data.forEach(element => {
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
getData()
