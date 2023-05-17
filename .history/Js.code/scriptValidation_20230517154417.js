let receitas = [];

function adicionarReceita() {
  const nome = document.querySelector('#nome').value;
  const tipoReceita = document.querySelector('#tipo_receita').value;
  const nomeReceita = document.querySelector('#nome_receita').value;
  const receita = document.querySelector('#receita').value;
  adicionarReceita(nomeReceita, receita, '');
  fecharPopup();
  salvarLocalStorage();
}

function abrirPopup() {
  const popup = document.querySelector('#popup');
  popup.style.display = 'block';
}

function fecharPopup() {
  const popup = document.querySelector('#popup');
  popup.style.display = 'none';
  const popup2 = document.querySelector('#popup2');
  popup2.style.display = 'none';
}

function abrirPopup2(titulo, elementos) {
  const popup2 = document.querySelector('#popup2');
  popup2.querySelector('h2').textContent = titulo;
  const popupInner = popup2.querySelector('.popup-inner');
  popupInner.innerHTML = '';
  elementos.forEach(elemento => {
    popupInner.appendChild(elemento);
  });
  popup2.style.display = 'block';
}

function salvarReceita(index, nome, descricao) {
  receitas[index].nome = nome;
  receitas[index].descricao = descricao;
  atualizarGrid();
  fecharPopup();
  salvarLocalStorage();
  alert('Receita salva com sucesso!');
}

function removerReceita(index) {
  receitas.splice(index, 1);
  atualizarGrid();
  salvarLocalStorage();
  alert('Receita removida com sucesso!');
}

function salvarLocalStorage() {
  localStorage.setItem('receitas', JSON.stringify(receitas));
}

function carregarLocalStorage() {
  const receitasJSON = localStorage.getItem('receitas');
  if (receitasJSON !== null) {
    receitas = JSON.parse(receitasJSON);
    atualizarGrid();
  }
}

function atualizarGrid() {
  const grid = document.querySelector('#grid');
  grid.innerHTML = '';
  receitas.forEach((receita, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${receita.nome}</h3>
      <p>${receita.descricao}</p>
      <button onclick="editarReceita(${index})">Editar</button>
      <button onclick="removerReceita(${index})">Remover</button>
    `;
    grid.appendChild(card);
  });
}

function editarReceita(index) {
  const nome = receitas[index].nome;
  const descricao = receitas[index].descricao;
  const inputNome = document.createElement('input');
  inputNome.setAttribute('type', 'text');
  inputNome.setAttribute('value', nome);
  const textareaDescricao = document.createElement('textarea');
  textareaDescricao.textContent = descricao;
  const salvarButton = document.createElement('button');
  salvarButton.textContent = 'Salvar';
  salvarButton.addEventListener('click', () => salvarReceita(index, inputNome.value, textareaDescricao.value));
  abrirPopup2('Editar Receita', [inputNome, textareaDescricao, salvarButton]);
}

function adicionarReceita(nome, descricao, categoria) {
  receitas.push({
    nome: nome,
    descricao: descricao,
    categoria: categoria
  });
  atualizarGrid();
  salvarLocalStorage();
  alert('Receita adicionada com sucesso!');
}

function pesquisarReceitas() {
  const termoPesquisa = document.querySelector('#pesquisa').value.toLowerCase();
  const receitasFiltradas = receitas.filter(receita => {
    const nome = receita.nome.toLowerCase();
    const descricao = receita.descricao.toLowerCase();
    return nome.includes(termoPesquisa) || descricao.includes(termoPesquisa);
  });
  atualizarGridFiltrado(receitasFiltradas);
}

function atualizarGridFiltrado(receitas) {
  const grid = document.querySelector('#grid');
  grid.innerHTML = '';
  receitas.forEach((receita, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${receita.nome}</h3>
      <p>${receita.descricao}</p>
      <button onclick="editarReceita(${index})">Editar</button>
      <button onclick="removerReceita(${index})">Remover</button>
    `;
    grid.appendChild(card);
  });
}

carregarLocalStorage();

document.querySelector('#adicionar_receita').addEventListener('click', abrirPopup);
document.querySelector('#salvar_receita').addEventListener('click', adicionarReceita);
document.querySelector('#pesquisa').addEventListener('keyup', pesquisarReceitas);