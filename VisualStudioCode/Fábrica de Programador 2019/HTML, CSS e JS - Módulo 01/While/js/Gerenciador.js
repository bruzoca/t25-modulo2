var listaNomes = []
var indice = 0

class Gerenciador {

    gerar() {

        while (listaNomes[indice] != "Jão" && indice < listaNomes.length) {
            indice++
        }

        if (indice >= listaNomes.length) {
            indice = -1
        }

        let spanArray = document.getElementById("array")
        spanArray.innerText = listaNomes

        this.adicionarNome()
    }

    // encontrarJao() {

    //     if (listaNomes[indice] == "Jão") {

    //         for (let i = 0; i == "Jão"; i++) {
    //             let spanResultado = document.getElementById("resultado")
    //             spanResultado.innerText = "Índice do Jão é:" + listaNomes
    //         }
    //     }
    // }

    adicionarNome() {

        let nomeDigitado = document.getElementById("inputNome").value

        if (nomeDigitado == "") {
            alert("Digite um nome")
        } else {
            listaNomes.push(nomeDigitado)
            alert("Nome adicionado à lista com sucesso!")
        }
    }
}

let gerenciador = new Gerenciador();