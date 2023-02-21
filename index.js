//-----------Theme Switcher-----------// 
const main = document.querySelector('main')
const root = document.querySelector(':root')
document.querySelector('.themeSwitcher').addEventListener('click', () => {
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--cor1', '#3a4452')
        root.style.setProperty('--cor2', '#e3f9ff')
        root.style.setProperty('--cor3', '#25a089')
        main.dataset.theme ='light'
    } else {
        root.style.setProperty('--cor1', '#e3f9ff')
        root.style.setProperty('--cor2', '#3a4452')
        root.style.setProperty('--cor3', '#33ffda')
        main.dataset.theme ='dark'
    }
})

//-----------Buttons-----------// 
const display = document.querySelector('.display input')
const characters = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", " "]
const buttons = [...document.querySelectorAll('.btns')]

const del = () => display.value = display.value.toString().slice(0, -1)
const calculate = () => {
    display.value = eval(display.value)
}

display.addEventListener('keydown', (ev) => {
    ev.preventDefault()

    if(characters.includes(ev.key)){
        display.value += ev.key
        return
    }
    if(ev.key === 'Backspace'){
        del()
    }
    if(ev.key === 'Enter'){
        calculate()
    }
})

buttons.map((btn) => {
    btn.addEventListener('click', () => {
       display.value += btn.dataset.val 
    })
})

document.querySelector('.clear').addEventListener('click', () => {
    display.value = ''
})


const teste = () => {
    console.log('teste')
    display.value += 1
}

document.querySelector('.del').addEventListener('click', del)

document.querySelector('.equal').addEventListener('click', calculate)