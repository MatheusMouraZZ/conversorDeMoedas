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
})