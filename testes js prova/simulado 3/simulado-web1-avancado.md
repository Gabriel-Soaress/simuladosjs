# 📝 Simulado Prático 3: Eventos Avançados e Tempo (Timers)

Este documento contém o escopo da Fase 3 do seu treinamento. O foco aqui não é apenas criar elementos na tela, mas fazer a página responder instantaneamente às ações do usuário e ao tempo.

---

## ⏱️ Informações Gerais
* **Tempo sugerido:** 2 horas.
* **Foco:** `setInterval`, `setTimeout`, `Math.random`, `input` (tempo real) e Arquitetura de Estado.

---

## 🍔 Cenário: PDV Fast-Food "BurgerTech"
Você está desenvolvendo a tela de Frente de Caixa para uma lanchonete. O atendente precisa buscar produtos rapidamente, fechar o carrinho e o sistema precisa gerar números de pedido automáticos.

---

## 🎯 Requisitos Funcionais

### 1. O Relógio (O Motor Contínuo)
No cabeçalho do seu HTML, deve haver um elemento (`<p>` ou `<h2>`) mostrando a hora atual.
- [ ] Use `setInterval` para atualizar esse relógio a cada 1 segundo (1000ms).
- [ ] *Dica:* Use `new Date().toLocaleTimeString()` para pegar a hora formatada.

### 2. A Vitrine e Busca em Tempo Real (Estado + Evento de Teclado)
Crie um array global `produtos` contendo objetos de exemplo: 
`[{id: 1, nome: "Hambúrguer", preco: 25}, {id: 2, nome: "Batata", preco: 10}, {id: 3, nome: "Refrigerante", preco: 8}]`.
- [ ] Crie uma função que leia esse array e desenhe os cards na tela (você já é mestre nisso).
- [ ] **O Desafio:** Acima da vitrine, coloque um `<input type="text">` de busca. Use o evento `input` ou `keyup` neste campo. 
- [ ] Toda vez que uma letra for digitada, o JavaScript deve filtrar o array e redesenhar a tela mostrando **apenas** os produtos que contêm as letras digitadas. (Pesquise sobre o método `.filter()` e `.includes()`).

### 3. O Carrinho (Lógica de Estado)
- [ ] Nos cards da vitrine, adicione um botão "Adicionar". 
- [ ] Ao clicar, o produto vai para um array global `carrinho`.
- [ ] A tela do carrinho (um painel lateral) deve ser renderizada, mostrando os itens e o **Valor Total** da compra.

### 4. Fechamento de Pedido (A Bomba-Relógio + Matemática)
- [ ] No painel do carrinho, coloque um botão **"Finalizar Pedido"**.
- [ ] Ao clicar, o sistema deve gerar um número de pedido aleatório entre 1 e 1000 usando `Math.random()` e `Math.floor()`.
- [ ] O sistema deve exibir uma mensagem visual bonita na tela: *"Pedido #XXX Finalizado com Sucesso!"*.
- [ ] **O Timer:** Use `setTimeout` para fazer essa mensagem de sucesso **desaparecer sozinha** após 4 segundos (4000ms).
- [ ] O carrinho deve ser zerado e o painel renderizado novamente (vazio).

### 5. O Botão Fofoqueiro (Eventos de Mouse - Opcional / Diferencial)
- [ ] Coloque um botão vermelho na tela chamado **"Cancelar Tudo"**.
- [ ] Adicione o evento `mouseenter` neste botão. Quando o ponteiro do mouse encostar nele, mude o texto dele rapidamente para "Tem certeza?" e mude a cor para laranja.
- [ ] Adicione o evento `mouseleave` para ele voltar a ser "Cancelar Tudo" vermelho quando o mouse sair de cima.

---

## 🧠 Arquitetura Sugerida (Ordem de Batalha)

1.  **O Relógio:** Faça primeiro, é o mais rápido e dá moral.
2.  **A Vitrine:** Crie o HTML, declare o array fixo de produtos no JS e faça a função de renderizar a vitrine.
3.  **A Busca Instantânea:** Coloque o evento no input. Se travar no filtro, tente dar `console.log` no que está sendo digitado primeiro.
4.  **O Carrinho:** Lógica que você já domina (push no array e renderizar).
5.  **A Finalização:** Foque em gerar o número aleatório e fazer a mensagem sumir com o `setTimeout`.
