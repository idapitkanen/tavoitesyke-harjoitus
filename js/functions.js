const button = document.querySelector('button')

const convert = () => {
    const age = document.querySelector('input').value
    const lowest = (220-age)*0.65
    const highest = (220-age)*0.85
    document.querySelector('output').innerHTML = `${lowest.toFixed(0)}-${highest.toFixed(0)}`
}

button.addEventListener('click', convert)

