# 🏆 Simulado Final: Sistema de Triagem "VetCare"

Você foi contratado para desenvolver o painel de recepção de uma Clínica Veterinária. O sistema precisa registrar os pets que chegam, validar os dados, mostrar a fila de espera em tempo real e chamar os animais para os consultórios.

---

## ⏱️ Informações Gerais
* **Tempo sugerido:** 2h 30 minutos.
* **Mecânicas cobradas:** Validação de Form, Arrays, Manipulação DOM, Filtro de Busca, Relógio e Temporizadores.

---

## 🎯 Requisitos Funcionais

### 1. O Relógio da Recepção (`setInterval`)
- [ ] No topo da página, exiba a hora atual. Ela deve se atualizar sozinha a cada 1 segundo.

### 2. O Formulário de Entrada (`submit` e `preventDefault`)
Crie um `<form>` com: Nome do Pet (text), Nome do Tutor (text), Espécie (select com opções: Cachorro, Gato, Outros) e um botão "Registrar Entrada".
- [ ] O formulário **não pode recarregar a página**.
- [ ] **Validação 1:** O "Nome do Pet" precisa ter pelo menos 2 letras.
- [ ] **Validação 2:** O "Nome do Tutor" não pode estar vazio.
- [ ] **Feedback de Erro:** Se alguma regra falhar, exiba uma mensagem de erro em vermelho na tela (ex: em um `<p>` abaixo do form). Não use `alert`.
- [ ] **Sucesso:** Se tudo estiver certo, limpe os campos (`.reset()`) e esconda a mensagem de erro.

### 3. A Fila de Espera (Arrays e DOM)
- [ ] Crie um Array global vazio chamado `filaEspera`.
- [ ] Quando o formulário for validado com sucesso, crie um objeto com os dados do pet (id, nome, tutor, especie) e coloque no Array.
- [ ] Crie uma função `renderizarFila()` que varre esse array e desenha um card ou linha de tabela na tela para cada pet.

### 4. Chamando para o Consultório (`Math.random` e `setTimeout`)
- [ ] Cada card da fila de espera deve ter um botão **"Chamar Pet"**.
- [ ] **O Hover:** Adicione eventos de `mouseenter` e `mouseleave` neste botão. Quando o mouse passar por cima, o botão deve ficar verde e o texto mudar para "Liberar Consultório". Quando sair, volta ao normal.
- [ ] **O Clique:** Ao clicar no botão:
  1. O pet deve ser removido da tela (apenas exclua o card da tela usando `.remove()`).
  2. O sistema deve gerar um número de consultório aleatório entre 1 e 5.
  3. Deve aparecer uma mensagem chamativa na tela: *"Chamando [Nome do Pet] para o Consultório [Número]!"*.
  4. Essa mensagem de chamada deve desaparecer sozinha após 5 segundos.

### 5. Busca Rápida de Tutores (`input` e `filter`)
- [ ] Crie um campo de texto `<input type="text" placeholder="Buscar por Tutor...">` acima da lista de espera.
- [ ] Toda vez que o usuário digitar uma letra, o sistema deve filtrar o Array `filaEspera` e renderizar na tela **apenas** os pets cujo nome do Tutor contenha as letras digitadas. (Não esqueça de converter para minúsculo para a busca não falhar!).

---

## 🧠 Ordem de Batalha (Sugestão)
1. Crie o HTML/CSS base.
2. Faça o Relógio funcionar (Vitória rápida).
3. Trave o formulário com o `preventDefault` e crie as validações com os textos de erro.
4. Faça o cadastro inserir o objeto no Array e aparecer no console.
5. Crie a função de renderizar a lista na tela a partir do Array.
6. Adicione o botão de "Chamar" e a lógica do `setTimeout` + Consultório aleatório.
7. Por último, faça a barra de pesquisa (o filtro).

Boa sorte! Mostre para o navegador quem é que manda.
