class Gerenciador {

    gerar() {

        let strArray = []
        strArray[0] = "C3"
        strArray[1] = "Sandero"
        strArray[2] = "XSara"
        strArray[3] = "Peugeot 408"
        strArray[4] = "Citroen"
        strArray[5] = "Saveiro"
        strArray[6] = "Golf"
        strArray[7] = "Palio"

        let palavraDigitada = document.getElementById("input").value
        let span = document.getElementById("divspan")

            for (let i = 0; i < strArray.length; i++) {
                if( i < (strArray.length / 2)){

                    //PEGA O "i" e atribui ao "i", as letras maiúsculas
                    strArray[i] = strArray[i].toUpperCase()
                } else {
                    strArray[i] = strArray[i].toLowerCase()
                }
            }

            //ESPAÇO / ESPAÇO
            span.innerText = strArray.join (" / ")

    }

}

let gerenciador = new Gerenciador()