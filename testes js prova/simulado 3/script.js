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
const finalizar = document.getElementById('pConcluido')
const limpar = document.getElementById('pLimpar')
const btnLimparTudo = document.getElementById('limpaTudo')

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

            limpar.addEventListener('click',()=>{
                valorCarrinho = 0;
                totalPreco.innerText = `Valor total: ${valorCarrinho}`
                cardCarrinho.remove()
            })


            
            carrinho.appendChild(cardCarrinho)
        })
    })
}

finalizar.addEventListener('click',()=>{
    let numPedido  = Math.floor(Math.random() * 100) + 1;

    const modalFinal = document.createElement('dialog')
        modalFinal.classList.add('modal_final')
        modalFinal.innerHTML = `
        <h1>Pedido Nº ${numPedido}</h1>
        <h2>Compra finalizada!</h2>
        <p>Valor total: R$ ${valorCarrinho}</p>
        <br/>
        <p>Agradecemos pela sua compra e pela confiança em nosso trabalho. Ficamos muito felizes em poder atendê-lo e esperamos que o produto atenda às suas expectativas. Qualquer dúvida ou necessidade, estamos à disposição. Esperamos vê-lo novamente em breve!</p>
        `
        document.body.appendChild(modalFinal)
        modalFinal.showModal()
    setTimeout(()=>{
        modalFinal.close()
        document.body.removeChild(modalFinal)
    },4000)
})

btnLimparTudo.addEventListener('click',()=>{
    if(confirm("Tem certeza que deseja limpar tudo?")){
    window.location.reload()}
})


btnLimparTudo.addEventListener('mouseenter',()=>{
    btnLimparTudo.innerText = "Tem certeza?"
    btnLimparTudo.style.backgroundColor = 'orange';
})

btnLimparTudo.addEventListener('mouseleave',()=>{
    btnLimparTudo.innerText = "Limpar Tudo"
    btnLimparTudo.style.backgroundColor = '';
})

// // Tire o evento do limpar de dentro do renderizarPainel e coloque solto no final do script:

// limpar.addEventListener('click', () => {
//     // 1. Zera a matemática
//     valorCarrinho = 0;
//     totalPreco.innerText = `Valor total: ${valorCarrinho}`;
    
//     // 2. Apaga o HTML de todos os cards do carrinho de uma vez só!
//     carrinho.innerHTML = ""; 
// });