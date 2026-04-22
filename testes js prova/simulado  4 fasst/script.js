const botaoFoge = document.getElementById('botaoFoge')


botaoFoge.addEventListener('mouseenter',()=>{
    const posT = Math.floor((Math.random() * 95)+5);
    const posL = Math.floor((Math.random() * 100)+5);
    console.log(posT)
    botaoFoge.style.top = posT + "%";
    botaoFoge.style.left = posL + "%";

})