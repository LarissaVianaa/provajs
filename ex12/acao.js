function teste() {
    let num = Number(window.prompt('Digite um número: '))
    
    let tipo
    
    if (num % 2==0) {
    
        tipo = '<strong>PAR</strong'
    
    } else {
        tipo = '<strong>Ímpar</strong>'
    }
    
    let res = document.querySelector('section#result')
    res.innerHTML = `<p>0 número ${num} que foi digitado é ${tipo}!</p>`
    }
    ﻿
    