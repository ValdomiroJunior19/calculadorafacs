var nota1 = document.querySelector('#nota1')
var nota2 = document.querySelector('#nota2')
var textarea = document.querySelector('#textarea')



// to buscando o elemento butao com document querery selector 
//quando ele for clicado ele executara uma funcao 'no caso uma callback'

// 'click' er a acao
// ()=>{} er uma funcao arrow function ... que no caso er uma calback
document.querySelector('button').addEventListener('click', () => {

    // aqui er o 'calculo da nota'
    media = (nota1.value * 0.4) + (nota2.value * 0.6);

    // aqui e a logica para saber se ele passou ou nao 
    if (media > 0.0 && media < 6) {
        textarea.value = `Sua media = ${(Math.floor(media).toFixed(2))}
         voce precisa de poucos pontos para conseguir passar na materia`
    } else if (media > 5) {
        textarea.value = `Sua media = ${(Math.floor(media).toFixed(2))} Voce foi aprovado`
    }

    // nessa parte ele ta reiniciando os numeros depois de 20 segundos
    setInterval(() => {
        nota1.value = null
        nota2.value = null
        textarea.value = ''
    }, 20000)
})