const input = document.querySelector('input')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

const sumbols = () => {
    const startTime = performance.now()

    ul.innerHTML = ''
    const text = input.value
    const elemets = {}
    
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j <= Object.keys(elemets).length; j++) {
            if (text[i] !== Object.keys(elemets)[j]) {
                elemets[text[i]] = 0
            }
        }
    }

    for (let i = 0; i < Object.keys(elemets).length; i++) {
        for (let j = 0; j < text.length; j++) {
           if(text[j] === Object.keys(elemets)[i]){
            elemets[Object.keys(elemets)[i]]++
           }
        }
    }

    const keys = Object.keys(elemets).sort((a,b) => elemets[b] - elemets[a])
    for (let i = 0; i < keys.length; i++) {
        const procent = elemets[keys[i]] / text.length * 100
        ul.insertAdjacentHTML('beforeend',
            `<li>"${keys[i]}": ${elemets[keys[i]]} - ${procent.toFixed(2)}%</li>`
        )
    }
    input.value = ''

    const endTime = performance.now()
    console.log(`Функція виконалася за ${(endTime - startTime).toFixed(2)}мс.`);
}

button.addEventListener('click', sumbols)
window.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        sumbols()
    }
})