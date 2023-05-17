// Define o array de receitas
let receitas = [];

// Define as funções para manipular o LocalStorage
function salvarLocalStorage() {
  localStorage.setItem('receitas', JSON.stringify(receitas));
}

function carregarLocalStorage() {
  const receitasJSON = localStorage.getItem('receitas');
  if (receitasJSON !== null) {
    receitas = JSON.parse(receitasJSON);
  }
}

// Define as funções para manipular as receitas
function adicionarReceita() {
  const nomeInput = document.querySelector('#nome_receita');
  const descricaoInput = document.querySelector('#receita');
  const nome = nomeInput.value.trim();
  const descricao = descricaoInput.value.trim();
  if (nome === '' || descricao === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const novaReceita = {
    nome: nome,
    descricao: descricao
  };
  receitas.push(novaReceita);
  atualizarGrid();
  salvarLocalStorage();
  alert('Receita adicionada com sucesso!');
  fecharPopup();
}

function excluirReceita(index) {
  if (confirm('Tem certeza que deseja excluir esta receita?')) {
    receitas.splice(index, 1);
    atualizarGrid();
    salvarLocalStorage();
    alert('Receita excluída com sucesso!');
  }
}

function editarReceita(index) {
  const receita = receitas[index];
  const nomeInput = document.querySelector('#nome_receita_editar');
  const descricaoInput = document.querySelector('#receita_editar');
  nomeInput.value = receita.nome;
  descricaoInput.value = receita.descricao;

  abrirPopup2('Editar Receita', [nomeInput, descricaoInput, salvarButton, cancelarButton]);

  const salvarButton = document.querySelector('#btn-salvar-editar');
  salvarButton.onclick = () => salvarReceitaEditada(index);
}

function salvarReceitaEditada(index) {
  const nomeInput = document.querySelector('#nome_receita_editar');
  const descricaoInput = document.querySelector('#receita_editar');
  const nome = nomeInput.value.trim();
  const descricao = descricaoInput.value.trim();
  if (nome === '' || descricao === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const receita = receitas[index];
  receita.nome = nome;
  receita.descricao = descricao;
  atualizarGrid();
  salvarLocalStorage();
  alert('Receita atualizada com sucesso!');
  fecharPopup();
}

function atualizarGrid() {
  const grid = document.querySelector('#grid-receitas');
  grid.innerHTML = '';
  for (let i = 0; i < receitas.length; i++) {
    const receita = receitas[i];
    const card = document.createElement('div');
    card.classList.add('card');
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = receita.nome;
    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.textContent = receita.descricao;
    const editarButton = document.createElement('button');
    editarButton.classList.add('btn-editar');
    editarButton.textContent = 'Editar';
    editarButton.onclick = () => editarReceita(i);
    const excluirButton = document.createElement('button');
    excluirButton.classList.add('btn-excluir');
    excluirButton.textContent = 'Excluir';
    excluirButton.onclick = () => excluirReceita(i);
    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(cardDescription);
    cardInfo.appendChild(editarButton);
    cardInfo.appendChild(excluirButton);
    card.appendChild(cardInfo);
    grid.appendChild(card);
  }
}

function abrirPopup(titulo, inputs) {
  const popup = document.querySelector('#popup');
  const popupTitulo = document.querySelector('.popup-titulo');
  const popupInputs = document.querySelector('.popup-inputs');
  popupTitulo.textContent = titulo;
  popupInputs.innerHTML = '';
  inputs.forEach((input) => popupInputs.appendChild(input));
  popup.classList.add('popup-ativo');
}

function abrirPopup2(titulo, inputs) {
  const popup = document.querySelector('#popup-editar');
  const popupTitulo = document.querySelector('.popup-titulo');
  const popupInputs = document.querySelector('.popup-inputs');
  popupTitulo.textContent = titulo;
  popupInputs.innerHTML = '';
  inputs.forEach((input) => popupInputs.appendChild(input));
  popup.classList.add('popup-ativo');
}

function fecharPopup() {
  const popup = document.querySelector('.popup-ativo');
  popup.classList.remove('popup-ativo');
}

// Carrega as receitas do LocalStorage ao iniciar a página
carregarLocalStorage();

// Atualiza a grid de receitas ao iniciar a página
atualizarGrid();

// Adiciona um evento de clique ao botão "Adicionar Receita"
const adicionarButton = document.querySelector('#btn-adicionar');
adicionarButton.onclick = () => abrirPopup('Adicionar Receita', [document.querySelector('#nome_receita'), document.querySelector('#receita'), document.querySelector('#btn-salvar'), document.querySelector('#btn-cancelar')]);