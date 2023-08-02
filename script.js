/* Criar variáveis */

/* let nome = "Vitor" */
let idade = 15
let idadeEsposa = "15"
const anoNascimento = 2006 /* Constante */


// deicisão

if (idade === idadeEsposa){

    alert("Igual..")
}else{

    alert("Cada um no seu quadrado")
}

// Lendo informações do HTML

const titulo = document.getElementById("titulo")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const resultado = document.getElementById("resultado")


console.log(titulo)

titulo.textContent = "Mudei o titulo!! Eu posso..."

titulo.style.color = "red"

function mostrarResultado(){
    
    titulo.style.color = "green"
    titulo.style.fontSize = "40px"

    resultado.textContent = nome.value + " " + email.value
}