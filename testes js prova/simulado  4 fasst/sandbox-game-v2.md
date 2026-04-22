# 🎮 Sandbox Game: Hackeando o Sistema (Versão Expandida)

Este é um mini-game focado em eventos sensíveis ao movimento e estado dos elementos. O objetivo é praticar a troca rápida de estilos e textos.

---

## ⏱️ Informações Gerais
* **Tempo sugerido:** 50 a 60 minutos.
* **Foco:** `mouseenter`, `mouseleave`, `focus`, `blur`, `dblclick`, `keydown`, `Math.random()`, `setInterval` e `setTimeout`.

---

## 🎯 Missão: Sobreviver ao Sistema

### 🖱️ Módulo 1: O Botão Arisco e Debochado (Mouse Events)
Crie um botão chamado **"Desativar Firewall"**.
- [ ] **Ação de Fuga (`mouseenter`):** Quando o mouse encostar, o botão pula para uma posição aleatória (`top` e `left` aleatórios com `position: absolute`).
- [ ] **Ação de Deboche (`mouseleave`):** Quando o mouse sair de cima da área onde o botão estava (ou se você não conseguir clicar), o texto do botão deve mudar para *"Muito lento!"* ou *"Tente de novo!"*.
- [ ] **Ação de Vitória (`dblclick`):** Se conseguir dar um clique duplo, o botão para de fugir, fica verde, o texto muda para *"SISTEMA INVADIDO"* e o fundo da página (`body`) ganha uma cor de "sucesso".

### ⌨️ Módulo 2: O Terminal de Acesso (Focus & Teclado)
Crie um campo `<input type="text" id="terminal" placeholder="Digite o código...">`.
- [ ] **Ação de Alerta (`focus`):** Quando você clicar no campo para digitar, a borda do input deve ficar amarela e aparecer uma mensagem embaixo: *"Terminal Monitorado..."*.
- [ ] **Ação de Bloqueio (`keydown`):** Impeça que qualquer **número** seja digitado (`event.preventDefault()`). Se o usuário tentar, mostre um alerta rápido ou mude o fundo do input para vermelho por 200ms.
- [ ] **Ação de Saída (`blur`):** Quando o usuário clicar fora do campo, o input deve ficar cinza e a mensagem deve mudar para *"Conexão Suspensa"*.

### ⏱️ Módulo 3: O Fio Vermelho Sob Tensão (Tempo & Hover)
Crie o relógio de 15s e o botão **"Cortar Fio"**.
- [ ] **Ação de Tensão (`mouseover`):** Quando o mouse estiver sobre o botão de cortar, o botão deve "tremer" (mude o `padding` ou a `margin` levemente via JS) e a cor deve ficar um vermelho mais vivo.
- [ ] **Ação de Alívio (`mouseleave`):** Quando o mouse sair do botão, ele volta ao estado normal.
- [ ] **Ação de Corte (`click`):** Para o cronômetro (`clearInterval`) e exibe *"Bomba Desativada"*.
- [ ] **Ação de Explosão (Timer):** Se o tempo acabar, limpe o HTML da página e escreva apenas *"GAME OVER"* em letras gigantes.

---
**Dica de Ouro:** Para o botão que foge, use `window.innerWidth` e `window.innerHeight` no `Math.random()` para garantir que ele não fuja para fora da parte visível da tela!
