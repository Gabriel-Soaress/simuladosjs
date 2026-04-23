const registro = []
let idAtual = 0

const relogio = document.getElementById('relogio')
const nomeP = document.getElementById('nomeP')
const nomeT = document.getElementById('nomeT')
const especieS  = document.getElementById('especieS')
const btnForm  = document.getElementById('btnForm')
const meuForm = document.getElementById('meuForm')
const msgform = document.getElementById('msgform')
const listaEspera = document.getElementById('listaEspera')
const modalChamar  = document.getElementById('modalChamar')
const textoChamar = document.getElementById('textoChamar')
const inputPes  = document.getElementById('inputPes')
//const  = document.getElementById('')


setInterval(() => {
    const hora = new Date();
    relogio.innerText = `${hora.toLocaleTimeString()}`
}, 1000);


function criaRegistro(){

    idAtual = idAtual + 1
    const novo = {
        id: idAtual,
        nomeP: nomeP.value,
        nomeT: nomeT.value,
        especie: especieS.value
    }

    registro.push(novo)
    console.log(registro)
    renderizarRegistros(registro)
}


meuForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    const nomeTam = nomeT.value.length

    if(nomeTam <= 2){
        msgform.style.display = 'block'
        msgform.innerText = 'O nome do tutor precisa ser maior que 2 letras'
        msgform.className ='msgErro'
        return
    }else{
        msgform.innerText = 'Cadastro Bem Sucedido!'
        msgform.className ='msgAcerto'

        setTimeout(() => {
            msgform.style.display = 'none'
        }, 3000);
    }

    criaRegistro();
    meuForm.reset()
})

inputPes.addEventListener('input',()=>{
    const textoPesquisa = inputPes.value.toLowerCase();
    console.log('pesquisa')
    
    if(textoPesquisa === ""){
        renderizarRegistros(registro);
    }else{
        const filtrados = registro.filter((registroN) => {
            return registroN.nomeT.toLowerCase().includes(textoPesquisa);
        });
        renderizarRegistros(filtrados);
    }
    });



function renderizarRegistros(listaParaDesenhar){
    listaEspera.innerHTML = `<h2>Lista de Espera: </h2> `
    listaParaDesenhar.forEach((animalAtual)=>{

        if(animalAtual != ''){
            const novoRegistro = document.createElement('div')
        novoRegistro.classList.add('divRegistro')

        const spanRegistro = document.createElement('span')
        spanRegistro.classList.add('spanRegistro')

        const nomeCard = document.createElement('p')
        novoRegistro.classList.add('tituloRegistro')
        nomeCard.innerText = `${animalAtual.nomeP}`

        const tutorCard = document.createElement('p')
        tutorCard.classList.add('textoRegistro')
        tutorCard.innerText = `${animalAtual.nomeT}`

        const especieCard = document.createElement('p')
        especieCard.classList.add('textoRegistro')
        especieCard.innerText = `${animalAtual.especie}`

        const botaoCard = document.createElement('button')
        botaoCard.className ='botaoGeral'
        botaoCard.innerText = `Chamar Pet`

        botaoCard.addEventListener('mouseenter',()=>{
            botaoCard.style.backgroundColor = 'green'
            botaoCard.innerText = `Liberar Consultório`
        })

        botaoCard.addEventListener('mouseleave',()=>{
            botaoCard.style.backgroundColor = 'aquamarine'
            botaoCard.innerText = `Chamar Pet`
        })

        botaoCard.addEventListener('click',()=>{

            registro.forEach((animalApagar)=>{
                if(animalApagar.id == animalAtual.id){
                    novoRegistro.remove()
                    
                    let numC = Math.floor((Math.random() * 5)+1)
                    modalChamar.showModal();
                    textoChamar.innerText =  `Chamando ${animalAtual.nomeP}, para o consultorio ${numC}`

                    setTimeout(() => {
                        modalChamar.close()
                    }, 3000);

                    let numRegistro = Number(animalApagar.id) - 1
                    registro[numRegistro] = ''
                }

            })
        })

        spanRegistro.appendChild(nomeCard)
        spanRegistro.appendChild(tutorCard)
        spanRegistro.appendChild(especieCard)

        novoRegistro.appendChild(spanRegistro)
        novoRegistro.appendChild(botaoCard)

        listaEspera.appendChild(novoRegistro)
        }
        
    })
}

