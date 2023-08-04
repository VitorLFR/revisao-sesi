const numero1 = document.getElementById("n1")
const numero2 = document.getElementById("n2")
const resultado = document.getElementById("resultado")

function Soma(){

    resultado.textContent = Number(numero1.value) + Number(numero2.value);
}

function Subt(){
    
    resultado.textContent = Number(numero1.value) - Number(numero2.value);
}

function Div(){

    resultado.textContent = Number(numero1.value) / Number(numero2.value);
}

function Multi(){

    resultado.textContent = Number(numero1.value) * Number(numero2.value);
}

function Resto(){

    resultado.textContent = Number(numero1.value) % Number(numero2.value);
}

function Expon(){

    resultado.textContent = Math.pow(Number(numero1.value), Number(numero2.value));
}

document.addEventListener("keydown", function(evento){
    
    if(evento.key === "+"){

        Soma()

    }

    if(evento.key === "-"){

        Subt()

    }

    if(evento.key === "/"){

        Div()

    }

    if(evento.key === "*"){

        Multi()

    }

    if(evento.key === "%"){

        Resto()

    }

    if(evento.key === "n"){

        Expon()

    }


})