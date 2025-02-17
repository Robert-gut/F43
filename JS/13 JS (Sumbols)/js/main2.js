const input = document.querySelector('input')
const button = document.querySelector('button')
const ul = document.querySelector('ul')
const select = document.querySelector('select')

const sumbols = () => {

    console.log(select.value)

    const startTime = performance.now()
    ul.innerHTML = ''
    const elemets = {};
    [...input.value].forEach(element => elemets[element] = (elemets[element] || 0) + 1)
    const sortKeys = Object.keys(elemets).sort((a,b) => elemets[b] - elemets[a])
    ul.innerHTML = sortKeys.map(element => {
        const procent = (elemets[element] / input.value.length) * 100
        return `<li>"${element}": ${elemets[element]} - ${procent.toFixed(2)}%</li>`
    }).join('')
    input.value = ''
    const endTime = performance.now()
    console.log(`Функція виконалася за ${(endTime - startTime).toFixed(2)}мс.`);
}

button.addEventListener('click', sumbols)
window.addEventListener('keypress', e => e.key === 'Enter' && sumbols())