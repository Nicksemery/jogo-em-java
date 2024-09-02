function verificacao(numeroJogador, numeroaleatorio){
    if (numuerojogador > numeroaleatorio){
        return "maior"
    } else if (numeroJogador < numeroaleatorio){
        return "menor"
    } else {
        return "igual"
    }
}

export default verificacao