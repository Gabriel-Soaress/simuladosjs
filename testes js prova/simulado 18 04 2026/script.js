const nomeP = document.getElementById('nomeInp')
const tamanhoP = document.getElementById('tamanhoInp')
const tipoP = document.getElementById('tipoInp')
const contar = document.getElementById('Contar')
const divCards = document.getElementById('divCards')


let contagem = 0;



function criaCard(){
    const cardNovo = document.createElement('div')
    cardNovo.classList.add('card_defeito')

    const nomeCard = document.createElement('p')
    nomeCard.classList.add('card_titulo')
    nomeCard.innerText=`Produto: ${nomeP.value}`

    const tamCard = document.createElement('p')
    tamCard.classList.add('card_texto')
    tamCard.innerText=`tamanho: ${tamanhoP.value}`
    
    const tipoCard=  document.createElement('p')
    tipoCard.classList.add('card_texto')
    tipoCard.innerText=`Categoria: ${tipoP.value}`

    const divBtn = document.createElement('div')

    const btnResolve = document.createElement('button')
    btnResolve.classList.add('card_botao')
    btnResolve.innerHTML =`Ok!`
    btnResolve.style.margin='5px'

    const btnApaga = document.createElement('button')
    btnApaga.classList.add('card_botao')
    btnApaga.innerHTML =`X`
    btnApaga.style.backgroundColor='red'

    if(tipoP.value == "Costura"){
        cardNovo.style.borderLeft = 'solid 5px blue'
    }else if(tipoP.value == "Sola"){
        cardNovo.style.borderLeft = 'solid 5px yellow'
    }else if(tipoP.value == "Tecido"){
        cardNovo.style.borderLeft = 'solid 5px red'
    }else if(tipoP.value == "Cores"){
        cardNovo.style.borderLeft = 'solid 5px purple'
    }

    cardNovo.appendChild(nomeCard)
    cardNovo.appendChild(tamCard)
    cardNovo.appendChild(tipoCard)
    divBtn.appendChild(btnResolve)
    divBtn.appendChild(btnApaga)
    cardNovo.appendChild(divBtn)

    divCards.appendChild(cardNovo)

    contagem++
    contar.innerHTML = `Num de Defeitos: ${contagem}`



    document.getElementById('formDados').reset();

    btnResolve.addEventListener('click',()=>{
        cardNovo.classList.toggle('resolvido')
    })

    btnApaga.addEventListener('click',()=>{
        contagem--
        contar.innerHTML = `Num de Defeitos: ${contagem}`
        cardNovo.remove()
    })
}
