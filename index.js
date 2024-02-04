let celciusInput = document.getElementById("celcius")
let fahrenheitInput = document.getElementById("fahrenheit")
let kelvinInput = document.getElementById("kelvin")

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = cTemp + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (cTemp * (9/5)) + 32

    fahrenheitInput.value = roundNumber(fTemp)
    celciusInput.value = roundNumber(cTemp)
})

btn.addEventListener('click', function(){
    celciusInput.value = ''
    fahrenheitInput.value = ''
    kelvinInput.value = ''
})