function contar() {

    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contando de 1 até 10, marcando pares</h2>`

    let cont = 0
    while (cont <= 10) {

    if (cont % 1==0) {
    saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`

    } else {
    saida.InnerHTML +=  `${cont} &#x1F449`

    }
    cont ++
    }
    saida.innerHTML += `&#x19855267F;`
    }

