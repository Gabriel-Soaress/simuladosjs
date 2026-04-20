# 📝 Simulado Prático: Programação Web 1

Este documento contém o escopo para o treinamento intensivo focado em manipulação da DOM, eventos e lógica de Single Page Application (SPA) com JavaScript Vanilla.

---

## ⏱️ Informações Gerais
* **Tempo sugerido:** 2 horas.
* **Ferramentas:** Apenas HTML5, CSS3 e JavaScript puro.
* **Restrição principal:** Não é permitido o recarregamento da página (`F5`). Todas as ações devem ocorrer de forma dinâmica.

---

## 🏢 Cenário: Controle de Qualidade (Fábrica de Calçados)
Uma fábrica local em Birigui precisa de um sistema digital para que os inspetores da linha de produção registrem defeitos em tempo real antes do empacotamento.

---

## 🎯 Requisitos Funcionais

### 1. Entrada de Dados (Formulário)
Crie uma seção de cadastro que contenha:
- [ ] Campo de texto para **Modelo do Calçado** (ex: Tênis Esportivo X).
- [ ] Campo numérico para o **Tamanho** (ex: 38, 40).
- [ ] Um campo de seleção (`<select>`) ou texto para o **Tipo de Defeito** (ex: Costura, Sola, Colagem).
- [ ] Botão **"Registrar Defeito"**.

### 2. Fluxo de Registro (JavaScript)
- [ ] Ao clicar no botão, os dados devem ser capturados sem recarregar a página.
- [ ] Um novo "Card de Defeito" deve ser gerado dinamicamente em uma lista abaixo do formulário.
- [ ] Os campos de entrada devem ser limpos automaticamente após o registro bem-sucedido.

### 3. Gestão de Cards (Manipulação da DOM)
Cada card gerado deve exibir as informações capturadas e possuir dois botões interativos:
- [ ] **Botão "Resolver":** Ao ser clicado, deve alternar (toggle) o estado visual do card (ex: mudar a cor de fundo para verde ou riscar o texto), indicando que o problema foi tratado.
- [ ] **Botão "Descartar":** Ao ser clicado, o card específico deve ser removido permanentemente da árvore da DOM.

### 4. Indicadores (Diferencial)
- [ ] Exibir um contador no topo da página: `Total de Defeitos Ativos: X`.
- [ ] O contador deve atualizar em tempo real ao adicionar ou remover um card.

---

## 🛠️ Requisitos Técnicos (O que será avaliado)

1.  **Seleção de Elementos:** Uso correto de `document.querySelector` ou `document.getElementById`.
2.  **Criação Dinâmica:** Uso de `document.createElement` e montagem de hierarquia com `appendChild`.
3.  **Gestão de Classes:** Uso de `classList.add` e `classList.toggle` para estilos dinâmicos.
4.  **Escuta de Eventos:** Uso de `addEventListener` (especialmente o evento de `click` e prevenção de comportamento padrão em formulários).
5.  **Limpeza e Organização:** Código JS limpo, variáveis bem nomeadas e separação de responsabilidades.

---

## 📅 Cronograma Sugerido

| Tempo | Atividade |
| :--- | :--- |
| **00:00 - 00:20** | HTML estrutural e CSS básico (Layout e Flexbox). |
| **00:20 - 00:50** | Captura de inputs e criação do Card dinâmico. |
| **00:50 - 01:20** | Lógica de "Resolver" (Toggle) e "Descartar" (Remove). |
| **01:20 - 01:40** | Implementação do contador e limpeza de inputs. |
| **01:40 - 02:00** | Testes de erro (debug) e refinamento visual. |

---

**Boa sorte! Foque na funcionalidade primeiro, o design vem depois.**
