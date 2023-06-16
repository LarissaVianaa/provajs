function contar() {
    let saida = document.getElementById( 'saida')
    
    saida.innerHTML += `<h2>contando de 1 a 10, marcando os impares</h2>`
    
    let cont = 1
    while (cont <=10) {
    if (cont % 2 ==0 ) {
        saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`
    } else { 
        saida.innerHTML += ` ${cont} &#x1F449;`
    }
    cont ++ // Corresponde a cont = + 1
    }
    saida.innerHTML += `&#x1F3C1;`
    }