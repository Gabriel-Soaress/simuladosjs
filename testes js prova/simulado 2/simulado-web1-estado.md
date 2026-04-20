# 📝 Simulado Prático 2: Lógica e Gestão de Estado

Este documento contém o escopo avançado focado na separação entre **Dados (JavaScript)** e **Visualização (DOM)**. 

---

## ⏱️ Informações Gerais
* **Tempo sugerido:** 2 horas e 30 minutos.
* **Ferramentas:** HTML5, CSS3 e JavaScript puro (Vanilla).
* **Restrição principal:** Proibido recarregar a página. A tela deve ser um reflexo exato do que existe no seu Array.

---

## 📦 Cenário: Painel de Frota de Entregas
Uma transportadora precisa de um painel de logística para controlar os motoboys e motoristas que estão na base aguardando chamados, e os que estão na rua fazendo entregas.

---

## 🎯 Requisitos Funcionais

### 1. Entrada de Dados (Cadastro)
- [ ] Campo de texto: **Nome do Entregador**.
- [ ] Seleção (`<select>`): **Veículo** (Moto, Carro, Van).
- [ ] Botão: **"Cadastrar na Frota"**.
- [ ] *Regra de Negócio:* Mostrar um `alert()` e não cadastrar se o nome estiver vazio.

### 2. O Estado da Aplicação (O Cérebro)
Você deve criar um **Array Global** vazio no topo do seu script: `let frota = [];`
Toda vez que cadastrar alguém, empurre (`push`) um **Objeto** para este array com a estrutura:
```javascript
{
    id: Date.now(), // Gera um número único
    nome: "João",
    veiculo: "Moto",
    status: "disponivel", // Todos nascem disponíveis
    entregasRealizadas: 0
}
```

### 3. A Tela (Motor de Renderização)
Crie uma única função chamada `renderizarPainel()`. Ela será responsável por desenhar a tela inteira.
- [ ] A tela deve ter duas colunas (divs): **"Base (Disponíveis)"** e **"Em Rota"**.
- [ ] A função deve **limpar** o conteúdo (innerHTML = '') das duas colunas toda vez que for chamada.
- [ ] A função deve percorrer o array `frota` (usando `forEach`).
- [ ] Se o status for `"disponivel"`, crie o card na coluna da Base.
- [ ] Se o status for `"em_rota"`, crie o card na coluna Em Rota.

### 4. Interatividade (Mudando o Status)
Ao desenhar os cards no `renderizarPainel()`, adicione botões de ação:
- [ ] **Botão "Despachar" (Para cards na Base):** Altera o status do objeto atual para `"em_rota"` e chama `renderizarPainel()` novamente.
- [ ] **Botão "Concluir" (Para cards Em Rota):** Altera o status para `"disponivel"`, soma `+1` na propriedade `entregasRealizadas` do objeto, e chama `renderizarPainel()`.

### 5. Dashboard (Contadores Topo)
Exiba no topo da tela e atualize a cada renderização:
- [ ] **Entregadores na Rua:** Quantidade de itens no array com status `"em_rota"`.
- [ ] **Total de Entregas do Dia:** A soma de todas as `entregasRealizadas` de todos os entregadores.

---

## 🧠 Arquitetura Sugerida (Siga esta ordem)

1.  **Passo 1 (HTML/CSS):** Crie o layout básico. Formulário em cima, Dashboard no meio, e as Duas Colunas grandes embaixo.
2.  **Passo 2 (Lógica Bruta):** Faça o botão de cadastro apenas dar um `push` no array e dar um `console.log(frota)`. Garanta que os objetos estão sendo criados corretamente antes de ir para a tela.
3.  **Passo 3 (Renderização):** Escreva o `renderizarPainel()`. Faça ele ler o array e criar as `divs` no lugar certo. Teste cadastrando pessoas.
4.  **Passo 4 (Ação):** Coloque os botões de "Despachar" e "Concluir" dentro do `renderizarPainel()`, mudando os valores do objeto e mandando renderizar de novo.
