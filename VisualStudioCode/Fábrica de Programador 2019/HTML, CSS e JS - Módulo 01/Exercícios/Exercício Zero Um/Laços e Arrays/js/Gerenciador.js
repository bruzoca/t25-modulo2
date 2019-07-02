class Gerenciador{

    gerar (){

    let span = document.getElementById("divspan")

    let strArray = [

        "Yuri", "Giuseppe", "João", "Bruno", "Carol", "Pedro", "Vinicius", "Maria", "Koralina", 
        "Liliam", "Úrsula", "Heytor", "Amanda", "Teodoro", "Fernanda", "Isabella", "Queanu", "Wellington", 
        "Enzo", "Olga"
    ]

    
    for (let i = 0; i < strArray.length; i++ ){
        if( i <= strArray.length){

            strArray[i] = strArray[i]

            }
        }

    //PARA COLOCAR DO LADO DO TEXTO, OU CRIAR OUTRO SPAM, OU TEXTO SOLTO.
    span.innerText = strArray.join (", ")

    }
}

let gerenciador = new Gerenciador();