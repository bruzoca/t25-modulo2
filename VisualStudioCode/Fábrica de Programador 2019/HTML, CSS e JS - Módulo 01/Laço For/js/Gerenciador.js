class Gerenciador {

    gerar() {

        let numeroDigitado = document.getElementById("inputnumero").value
        let span = document.getElementById("divspan")
        let numeros = ""

        if (numeroDigitado == "") {
            alert("Digite um Número")
        } else {
            let numero = parseInt(numeroDigitado)

            for (let i = 1; i <= numeroDigitado; i++) {
                numeros += i + ""
            }

            span.innerText = numeros
        }
    }

    pares() {

        let numeroDigitado = document.getElementById("inputnumero").value
        let span = document.getElementById("divspan")
        let numeros = ""

        if (numeroDigitado == "") {
            alert("Digite um Número")
        } else {
            let numero = parseInt(numeroDigitado)

            for (let i = 1; i <= numeroDigitado; i++) {
                if(i % 2 == 0){
                    numeros += i + " "
                }
            }
            span.innerText = numeros
        }
    }

}

let gerenciador = new Gerenciador();