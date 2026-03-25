

const soma = function(a,b){
    return a+b
}


const sub = function(a,b){
    if(a-b)
    return a-b
}

const mult = function(a,b){
    return a*b
}

const div = function(a,b){
    return a/b
}

let num1 = null
let operador = null
let numEspera = false
let num2 = null

        const operate = function(operador, num1, num2){
        if(operador === "+") return soma(num1,num2)
        if(operador === "-") return sub(num1,num2) 
        if(operador === "*") return mult(num1,num2)
        if(operador === "/") return div(num1,num2)

}

const display = document.getElementById("display")
const botoes = document.querySelector("#botoes")

botoes.addEventListener("click",(evt)=>{
    const {target} = evt

    if(!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operador')){
        const novoOperador = target.textContent

        if(numEspera){
            operador = novoOperador
            return
        }
        if(num1 === null){
            num1 = display.textContent
            console.log(num1)
           
        }
        console.log(numEspera)
        if(operador && numEspera === false){
            novoValor = display.textContent.split(/[+\-*/]/).pop()
            resultado = operate(operador, Number(num1), Number(novoValor))
            display.textContent = resultado
            num1 = resultado
           
        }
        if(operador ==="/" && num2 === novoValor == "0"){
            display.textContent = "VOCÊ CHEGOU NO INFINITO!"
            return
        }
        //operador = novoOperador
        operador = target.textContent
        numEspera=true
        display.textContent = operador
        console.log(numEspera)
     
    }
    if(target.dataset.num){
        numero = target.dataset.num
        if(display.textContent ==="0" || numEspera){
            display.textContent = numero
            numEspera = false
        }else{
            display.textContent += numero
        } 
    } 

     if (target.id === "igual"){
        if(!num1 || !operador || numEspera){
            return
        }
        num2 = display.textContent.split(/[+\-*/]/).pop()
        if(operador ==="/" && num2 === "0"){
            display.textContent = "VOCÊ CHEGOU NO INFINITO!"
            return
        }
        const resultado = operate(operador, Number(num1), Number(num2))
        display.textContent = resultado
        console.log(num2)
    }
        if(target.id === "limpar"){
        num1 = null
        num2 = null
        operador = null
        numEspera = false
        display.textContent = "0"

    }

  if(target.id === "decimal"){

    const ultimoNumero = display.textContent.split(/[+\-*/]/).pop()

    // evita repetir decimal
    if(ultimoNumero.includes(".")){
        return
    }
   
    // se ainda não existe número
    if(ultimoNumero === ""){
        display.textContent += "0."
        return
    }else{
        display.textContent += "."
    }
}
 numEspera = false
})

