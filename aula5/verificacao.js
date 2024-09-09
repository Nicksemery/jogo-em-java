export function verificacao(numeroJogador, numeroaleatorio){
    if (numeroJogador > numeroaleatorio){
        return "maior"
    } else if (numeroJogador < numeroaleatorio){
        return "menor"
    } else {
        return "igual"
    }
}