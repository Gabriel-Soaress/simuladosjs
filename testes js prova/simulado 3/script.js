const produtos = []


const relogio = document.getElementById('horario')
const abrirModal = document.getElementById('adc_produto')
const fechaModal = document.getElementById('botao_cads')
const modal = document.getElementById('cadastro_prod')

const formPro = document.getElementById('formProduto')
const refPro = document.getElementById('refProduto')
const nomePro = document.getElementById('nomeProduto')
const precoPro = document.getElementById('precoProduto')
const itens_painel = document.getElementById('itens_painel')
const carrinho = document.getElementById('carrinho')
const totalPreco = document.getElementById('ValorCar')
const pesquisa = document.getElementById('pesquisa')

ValorCar

let valorCarrinho = 0;

setInterval(() => {
    const agora = new Date();
    relogio.innerText = `${agora.toLocaleTimeString()}`
}, 1000);

abrirModal.addEventListener('click',()=>{
    modal.showModal();
})

function criaProduto(){

    const novo = {
        id: refPro.value,
        nome: nomePro.value,
        preco: precoPro.value,
    }
    formPro.reset()
    produtos.push(novo)
    renderizarPainel(produtos)
}


fechaModal.addEventListener('click',()=>{
    criaProduto()
    console.log(produtos)
    modal.close();
})

function criaCard(Produto){
    const cardDiv = document.createElement('div')


    const refCard = document.createElement('p')
    refCard.classList.add('card_nome')
    refCard.innerText = `Ref: ${Produto.id}`

    const nomeCard = document.createElement('p')
    nomeCard.classList.add('card_nome')
    nomeCard.innerText = `Nome: ${Produto.nome}`

    const precoCard = document.createElement('p')
    precoCard.classList.add('card_veiculo')
    precoCard.innerText = `Preço R$: ${Produto.preco}`

    cardDiv.appendChild(refCard)
    cardDiv.appendChild(nomeCard)
    cardDiv.appendChild(precoCard)
    return cardDiv
}

function atualizaPreco(Produto,tipo){
    if(tipo == 1){
        valorCarrinho = valorCarrinho + Number(Produto.preco)
    }else{
        valorCarrinho = valorCarrinho - Number(Produto.preco)
    }
    totalPreco.innerText = `Valor total: ${valorCarrinho}`
}

pesquisa.addEventListener('input',()=>{
    const textoPesquisa = pesquisa.value.toLowerCase();
    
    if(textoPesquisa === ""){
        renderizarPainel(produtos);
    }else{
        const filtrados = produtos.filter((Produto) => {
            return Produto.nome.toLowerCase().includes(textoPesquisa);
        });
        renderizarPainel(filtrados);
    }
    });


function renderizarPainel(listaParaDesenhar){
    itens_painel.innerHTML = ""

    listaParaDesenhar.forEach((Produto)=>{
        const novoCard = criaCard(Produto)

        novoCard.classList.add('disponivelSty')

        const botaoCar = document.createElement('button')
        botaoCar.classList.add('button_carrinho')
        botaoCar.innerText = "Carrinho"    

        novoCard.appendChild(botaoCar)
        itens_painel.appendChild(novoCard)

        botaoCar.addEventListener('click',()=>{
            atualizaPreco(Produto,1)

            const cardCarrinho = criaCard(Produto)
            cardCarrinho.classList = 'carrinhoSty'

            const botaoDel = document.createElement('button')
            botaoDel.classList.add('button_carrinho')
            botaoDel.innerText = "Remover"   

            cardCarrinho.appendChild(botaoDel)

            botaoDel.addEventListener('click',()=>{
                atualizaPreco(Produto,2)
                cardCarrinho.remove()
            })

            
            carrinho.appendChild(cardCarrinho)
        })
    })
}

