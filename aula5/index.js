import {random} from "../aula5/random.js";
import {verificacao} from "../verificacao.js";

function jogo(){
    let numero_maximo = 5
    const geradornumero = random(1,10)



    while (numero_maximo > 0){
        let numeroJogador = parseInt(prompt("Nos dê um numero entre 1 e 10: "));
        let verific = verificacao(numeroJogador,geradornumero);

        console.log(Verific)

        if (verific === "igual"){
            break;
        }

        numero_maximo -=1;
        if (numero_maximo === 0){
            console.log("Você perdeu! O número era:" + numeroaleatorio)
        }
    }
}

jogo();