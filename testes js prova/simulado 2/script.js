// const nomep = 'lucas'
// const idadep = 18

//const { createElement } = require("react")

// const ser1 = {
//     id: 1,
//     nome: nomep,
//     idade: idadep
// }


// const ser2 = {
//     id: 2,
//     nome: nomep,
//     idade: idadep
// }


// const ser3 = {
//     id: 3,
//     nome: nomep,
//     idade: idadep
// }

// const listaP = [ser1,ser2,ser3]

// console.log(listaP[0].nome)

var frota = []

const formulario = document.getElementById('dadosEntrega')
const nome = document.getElementById('nomeInp')
const veiculo = document.getElementById('veiculoSL')
const disponivelDiv = document.getElementById('disponivelBase')
const RotaDiv = document.getElementById('emRotaDiv')




function atualizaDash(){
    const totalRotaP = document.getElementById('totalRota');
    const totalEntregaP = document.getElementById('totalEntrega');

    let contadorRota = 0;
    let contadorEntregas = 0;


    frota.forEach((Entregador) => {

        if (Entregador.status === "Em rota") {
            contadorRota++; 
        }

        contadorEntregas = contadorEntregas + Entregador.entregasrealizada;
    });


    totalRotaP.innerText = `Em rota: ${contadorRota}`;
    totalEntregaP.innerText = `Entregas concluídas: ${contadorEntregas}`;
}

function cadastraEntregador(){
    if(nome.value == ""){
        alert("Preencha o nome!")
    }else{
        const novo = {
        nome: nome.value,
        veiculo: veiculo.value,
        status: "disponivel",
        entregasrealizada: 0
    }

    frota.push(novo)
    formulario.reset()
    console.log(frota)

    renderizarPainel()
    }


}



function criaCard(Entregador){
    const cardDiv = document.createElement('div')

    const nomeCard = document.createElement('p')
    nomeCard.classList.add('card_nome')
    nomeCard.innerText = `Nome: ${Entregador.nome}`

    const veiculoDiv = document.createElement('p')
    veiculoDiv.classList.add('card_veiculo')
    veiculoDiv.innerText = `Veiculo: ${Entregador.veiculo}`

    cardDiv.appendChild(nomeCard)
    cardDiv.appendChild(veiculoDiv)

    return cardDiv
}

function renderizarPainel(){
    disponivelDiv.innerHTML = ""
    RotaDiv.innerHTML =""
    
    frota.forEach((Entregador)=>{
        const novoCard = criaCard(Entregador)
        if(Entregador.status == "disponivel"){

            novoCard.classList = 'disponivelSty'
            const botaoDes = document.createElement('button')
            botaoDes.classList.add('card_button')
            botaoDes.innerText = "Despachar"

            botaoDes.addEventListener('click',()=>{
                Entregador.status = "Em rota"
                renderizarPainel()
            })

            novoCard.appendChild(botaoDes)
            disponivelDiv.appendChild(novoCard)
        }
        
        if(Entregador.status == "Em rota"){
            novoCard.className ='emRotaSty'
            const botaoConc = document.createElement('button')
            botaoConc.classList.add('card_button')
            botaoConc.innerText = "Concluir"

            botaoConc.addEventListener('click',()=>{
                Entregador.status = "disponivel"
                Entregador.entregasrealizada +=1
                renderizarPainel()
            })

            novoCard.appendChild(botaoConc)
            RotaDiv.appendChild(novoCard)
        }

        
    })
    atualizaDash()
}

// [ ] A tela deve ter duas colunas (divs): "Base (Disponíveis)" e "Em Rota".
// [ ] A função deve limpar o conteúdo (innerHTML = '') das duas colunas toda vez que for chamada.
// [ ] A função deve percorrer o array frota (usando forEach).
// [ ] Se o status for "disponivel", crie o card na coluna da Base.
// [ ] Se o status for "em_rota", crie o card na coluna Em Rota.

