const user = []

const meuForm  = document.getElementById('meuForm')
const nomeF  = document.getElementById('nomeF')
const idadeF  = document.getElementById('idadeF')
const senhaf  = document.getElementById('senhaf')
const senhaConf  = document.getElementById('senhaConf')
const msgErro = document.getElementById('msgErro')
const login = document.getElementById('login')
const nomeL = document.getElementById('nomeL')
const senhaL = document.getElementById('senhaL')
const msgErroL = document.getElementById('msgErroL')
const cadBotao = document.getElementById('cadBotao')
const loginForm  = document.getElementById('loginForm')
const botaoLogin = document.getElementById('botaoLogin')
// const = document.getElementById('')
// const = document.getElementById('')
// const = document.getElementById('')

meuForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    const nomeTam = nomeF.value
    

    if(nomeTam.length <= 3){
        msgErro.innerText = 'Nome deve ter mais que 3 letras!'
        msgErro.classList.add('msgErro')
        return
    }


    if(idadeF.value < 18){
        msgErro.innerText = 'Idade invalida!'
        msgErro.classList.add('msgErro')
        return
    }

    if(senhaf.value != senhaConf.value){
        msgErro.innerText = 'Senhas não batem!'
        msgErro.classList.add('msgErro')
        return
    }

    msgErro.innerText = 'Cadastro Concluido'
    msgErro.classList.add('msgAcerto')
    meuForm.reset()

    setTimeout(()=>{
        msgErro.style.display = 'none'
    },3000)
})

function salvaUser(){
    const novo = {
        nome: nomeF.value,
        idade: idadeF.value,
        senhaf: senhaf.value
    }

    user.push(novo)
    console.log(user)
}

login.addEventListener('click',()=>{
    meuForm.reset()
    meuForm.style.display = 'none'
    loginForm.style.display = 'flex'
})

cadBotao.addEventListener('click',()=>{
    loginForm.reset()
    meuForm.style.display = 'flex'
    loginForm.style.display = 'none'
})

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let encontrou = false

    user.forEach((pessoa) => {
        if (pessoa.nome === nomeL.value && pessoa.senha === senhaL.value) {
            encontrou = true
        }
    })

    if (encontrou) {
        msgErroL.innerText = 'Login Realizado'
        msgErroL.className = 'msgAcerto'
    } else {
        msgErroL.innerText = 'Dados Incorretos'
        msgErroL.className ='msgErro'
    }
})