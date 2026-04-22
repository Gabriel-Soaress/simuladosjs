# 🧪 Sandbox de Revisão: Validação e Controle

Neste simulado final, não temos clientes ou produtos. O foco é testar a sua capacidade de blindar um formulário contra envios errados e controlar eventos pontuais.

---

## ⏱️ Informações Gerais
* **Tempo sugerido:** 1 hora.
* **Foco:** `event.preventDefault()`, Validação de Dados, Lógica Booleana e Eventos de Teclado.

---

## 🏗️ Parte 1: O Formulário Blindado

Crie um arquivo HTML contendo um `<form>` simples. Não perca tempo com CSS detalhado.

### Requisitos do HTML:
- [ ] Um `<input type="text" id="nome">` para o Nome Completo.
- [ ] Um `<input type="number" id="idade">` para a Idade.
- [ ] Um `<input type="password" id="senha">` para a Senha.
- [ ] Um `<input type="password" id="confirma">` para Confirmar a Senha.
- [ ] Um botão `<button type="submit">Cadastrar</button>`.
- [ ] Um parágrafo vazio `<p id="msgErro"></p>` posicionado logo acima do botão para mostrar os avisos.

### 🛡️ O Desafio JavaScript (A Validação):
Adicione o evento `submit` no formulário (e não no botão). O seu JavaScript deve impedir que a página recarregue e checar as regras abaixo, **nesta ordem**. Se uma regra falhar, o texto da `<p id="msgErro">` deve mudar para a mensagem de erro (em vermelho) e a função deve parar (use o `return`).

1. **A Regra do Nome:** O nome deve ter pelo menos 3 caracteres. (Dica: use `.length`).
   - *Erro:* "O nome deve ter pelo menos 3 letras."
2. **A Regra da Idade:** O usuário deve ter 18 anos ou mais.
   - *Erro:* "Acesso negado para menores de idade."
3. **A Regra da Senha:** O valor digitado no campo `senha` deve ser idêntico ao do campo `confirma`.
   - *Erro:* "As senhas digitadas não coincidem."
4. **O Sucesso:** Se passou por todas as regras sem parar no `return`, o `<p id="msgErro">` deve ficar com texto verde escrito "Cadastro realizado com sucesso!" e o formulário deve ser limpo (`.reset()`).

---

## 🕹️ Parte 2: O Teclado Proibido (Extra)

Fora do formulário, crie uma área de testes para eventos pontuais.

### Requisitos:
- [ ] Um campo `<input type="text" id="campoProibido" placeholder="Tente digitar a letra A">`.

### O Desafio JavaScript:
- Adicione um evento de teclado (como `input` ou `keydown`) neste campo.
- O campo deve aceitar qualquer letra ou número, **EXCETO** a letra "A" (seja maiúscula ou minúscula).
- Se o usuário tentar digitar a letra "A", o JavaScript não deve deixar ela aparecer na tela e deve mostrar um `alert("A letra A é proibida neste campo!")`.

---

**Dicas de Sobrevivência:**
- O evento `submit` é o único que escuta o 'Enter' automaticamente.
- Para pintar o texto de erro via JS: `document.getElementById('msgErro').style.color = 'red';`
- Lembre-se do `event.preventDefault()` logo na primeira linha do seu listener de submit!
