const button1 = document.getElementById("btn1")
const titulo = document.getElementById("titulo")
button1.addEventListener('click', () => {
    titulo.textContent = "JavaScript é Incrível"
})
const button2 = document.getElementById("btn2")
const inputTexto = document.getElementById("inputTexto")
const mensagem = document.getElementById("mensagem")
button2.addEventListener('click', () => {
    const textoDigitado = inputTexto.value
    mensagem.textContent = 'Olá, ${textoDigitado}'
})
const divCaixa = document.getElementById("caixa")
divCaixa.addEventListener('mouseover', () => {
    divCaixa.style.backgroundColor = "red"
})
divCaixa.addEventListener('mouseout', () => {
    divCaixa.style.backgroundColor = "blue"
})
const button3 = document.getElementById("btn3")
const lista = document.getElementById("lista")
button3.addEventListener('click', () => {
    const itemLista = document.createElement("li")
    itemLista.innerText = "Novo Item"
    lista.appendChild(itemLista)
})
const button4 = document.getElementById("btn4")
button4.addEventListener('click', () => {
    if(divCaixa.style.display == 'none'){
        divCaixa.style.display = 'block'
    }else{
        divCaixa.style.display = 'none'
    }
})
