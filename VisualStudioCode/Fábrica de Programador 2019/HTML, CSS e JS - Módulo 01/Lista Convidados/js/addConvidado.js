class GerenciadorLista{

    adicionarConvidado(){

        let valido = this.validar()

        if(valido){
            //Adiciono
            let convidado = document.getElementById("inputConvidado").value
            document.getElementById("lista").innerText += convidado + "\n"
            this.cancelar();
        }
    }

    validar(){
        let nomeConvidado = document.getElementById("inputConvidado").value
        if(nomeConvidado == "") {
            //INVÁLIDO ( FALSE )
            alert("Preencha o nome do convidado!")
            return false
        } else if (nomeConvidado.length > 30){
            alert("Nome deve conter no Máximo 30 caracteres!")
            return false
        } else if (nomeConvidado.charAt(0) != nomeConvidado.charAt(0).toUpperCase()) {
            alert("A primeira letra deve ser Maiúscula")
            return false
        }else{
            //VÁLIDO ( TRUE )
            return true
        }
            
    }

    cancelar(){
        document.getElementById("inputConvidado").value = ""
        }

    limpar(){
       //innerText = PEGA O TEXTO DO SPAN, E JOGA ELE LA, pega o texto VISIVEL do elemento
       //let valorConvidado = document.getElementById("lista").value
       document.getElementById("lista").innerText = ""
    }
}

let gerenciador = new GerenciadorLista()