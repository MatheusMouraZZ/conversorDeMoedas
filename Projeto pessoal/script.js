var input = document.querySelector("#real"); //Seletor do input com ID #real
//input irá ouvir o evento da tecla quando pressionada
input.addEventListener('keydown', function(e){
    var keyPressed = e.keyCode //KeyPressed está recebendo o código da tecla pressionada
    var keyValue = e.key //keyValue está recebendo o valor da tecla pressionada
    e.preventDefault() //Previne que um comportamento padrão ocorra
    if(parseInt(keyValue)) { //Se o KeyValue for um número, o ParseInt conseguirá convertê-lo para INT
        input.value = input.value + parseInt(keyValue) //o valor atual do campo concatenado com o valor da tecla pressionada
    }
    if(keyPressed == 8) { //se o backspace for pressionado, acontecerá:
        e.target.value = e.target.value.slice(0, -1) //apagar o último caractere do campo
    }
    if(keyPressed == 48 || keyPressed == 96) { 
        e.target.value = input.value + parseInt(keyValue)
    }
    converter()
})
var select = document.querySelector("#choose-coin");
select.addEventListener("change", function(){
    converter()
})
function converter(){
    var coinValue, prefix, resultado = input.value
    var resultadoFinal = document.querySelector("#converted-coin")
    var unHide = document.querySelector(".result")
    switch(select.value){
        case "NOK":
            coinValue = 1.49
            prefix = "kr"
            break
        case "LIB":
            coinValue = 0.13
            prefix = "£"
            break
        case "USD":
            coinValue = 0.18
            prefix = "$"
            break
        case "JPY":
            coinValue = 19.28
            prefix = "¥"
            break
        case "EUR":
            coinValue = 0.15
            prefix = "€"
            break
        default: break
    }
    resultado = resultado * coinValue
    resultado = resultado.toFixed(2);
    resultado = prefix + resultado
    resultadoFinal.innerHTML = resultado
    unHide.classList.remove("hide")
}