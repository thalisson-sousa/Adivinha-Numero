function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor Invalido</div>'
        return
    }

    if (numeroFormaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>valor Invalido: O numero precisa estar entre 
        ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numeroSecreto === numero) {
        document.body.style.background = 'green'
        document.body.innerHTML = `
        <h2>Voce Acertou!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div> -->
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div> -->
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroFormaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})