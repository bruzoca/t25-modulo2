class Validador {

    validar() {

        /*Outra forma de fazer o campo de SEXO
        let sexo = document.querySelector("[type=radio]:checked")
        
        if (sexo == null){
            mensagem += "Selecione um Sexo!\n"
        }*/

        let mensagem = ""

        let nome = document.getElementById("inputNome").value

        /* mensagem = mensagem + "STRING" é a mesma coisa que: mensagem+= "STRING"*/

        if (nome == "") {
            mensagem = mensagem + "O campo nome é obrigatório!\n"
        }

        let email = document.getElementById("inputEmail").value

        if (email == "") {
            mensagem += "O campo e-mail é obrigatório!\n"
        }

        let sexM = document.getElementById("masc").checked
        let sexF = document.getElementById("fem").checked

        if (sexM == false && sexF == false){
            mensagem += "Selecione um Sexo!\n"
        }

        let cursoWeb = document.getElementById("web").checked
        let cursoMobile = document.getElementById("mobile").checked
        let cursoDesktop = document.getElementById("desktop").checked

        if (cursoWeb == false && cursoMobile == false && cursoDesktop == false){
            mensagem += "Selecione pelo menos um curso!\n"
        }

        let estado = document.getElementById("estado").value

        if (estado == ""){
            mensagem += "Selecione um Estado!\n"
        }

        
        //VERIFICAR E SETAR UM TAMANHO PARA A FOTO:

        /*if (foto == undefined){
            mensagem += "Selecione uma foto!"
        } else if(foto.size >= 1000){
            mensagem += "A foto deve ter no máximo 1 MB!\n"
            }*/

        let foto = document.getElementById("foto").value
        
        if (foto == ""){
             mensagem += "Insira uma imagem!\n"
        }

        let datanasc = document.getElementById("datanasc").value

        if (datanasc == ""){
            mensagem += "Insira sua Data de Nascimento"
        }

        //IMPRESSÃO DA MENSAGEM NO ALERTA
        
        if(mensagem != ""){
            alert(mensagem)
        }

    }
}

let validador = new Validador()