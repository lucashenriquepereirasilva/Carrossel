/**
 * Carrossel de imagens
 * @author lucas henrique
 */

let indice = 0 //0,1,2 (3 imagens)

// capturar a tags html identificada(id)
const imgs = document.getElementById('imagens')
// capturar 2 elementos html
const imagem = document.querySelectorAll('#imagens img')

function carrossel() {
    indice++ //somar 1 a variável índice
    console.log(indice) //apoio a lógica    
    if (indice >= imagem.length) {
        indice = 0
    }
    //A linha abaixo modifica o estilo CSS das imagens
    //style modifica o CSS
    //transform (deslocamento no eixo X)
    //índice 0: posição inicial | 1: deslocar 512px a esq | 2: deslocar 1024px esq
    //OBS: 512px (sincronizar com o tamnaho das imagens (CSS))
    imgs.style.transform = `translateX(${-indice * 512}px)`
}

// alinha abaixo executa a fução carrossel a cada 2s
setInterval(carrossel, 1800)