class Receita {
    constructor(nome, descricao, imagem) {
      this.nome = nome;
      this.descricao = descricao;
      this.imagem = imagem;
    }
  }
  
  const receitas = [];
  
  const gridContainer = document.querySelector('.grid-container');
  const popup = document.querySelector('.popup');
  const popupTitle = document.querySelector('.popup-title');
  const popupForm = document.querySelector('.popup-form');
  
  // Exibe as receitas na página
  function exibirReceitas() {
    gridContainer.innerHTML = '';
  
    for (const receita of receitas) {
      const card = criarCard(receita);
      gridContainer.appendChild(card);
    }
  }
  
  // Cria um elemento de card para uma receita
  function criarCard(receita) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    if (receita.imagem) {
      const imagem = document.createElement('img');
      imagem.src = receita.imagem;
      imagem.alt = receita.nome;
      card.appendChild(imagem);
    }
  
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
  
    const titulo = document.createElement('h3');
    titulo.classList.add('card-title');
    titulo.textContent = receita.nome;
  
    const descricao = document.createElement('p');
    descricao.classList.add('card-description');
    descricao.textContent = receita.descricao;
  
    const editarButton = document.createElement('button');
    editarButton.classList.add('btn-editar');
    editarButton.textContent = 'Editar';
  
    const excluirButton = document.createElement('button');
    excluirButton.classList.add('btn-excluir');
    excluirButton.textContent = 'Excluir';
  
    cardInfo.appendChild(titulo);
    cardInfo.appendChild(descricao);
    cardInfo.appendChild(editarButton);
    cardInfo.appendChild(excluirButton);
  
    card.appendChild(cardInfo);
  
    return card;
  }
  
  // Exibe o popup com o título e os elementos fornecidos
  function exibirPopup(titulo, elementos) {
    popupTitle.textContent = titulo;
    popupForm.innerHTML = '';
  
    for (const elemento of elementos) {
      popupForm.appendChild(elemento);
    }
  
    popup.classList.remove('hidden');
  }
  
  // Fecha o popup
  function fecharPopup() {
    popup.classList.add('hidden');
  }
  
  // Adiciona uma nova receita à lista e exibe na página
  function adicionarReceita(nome, descricao, imagem) {
    const novaReceita = new Receita(nome, descricao, imagem);
    receitas.push(novaReceita);
    exibirReceitas();
  }
  
  // Atualiza uma receita existente na lista e na página
  function atualizarReceita(nomeAntigo, nomeNovo, descricaoNova, imagemNova) {
    const receita = receitas.find((r) => r.nome === nomeAntigo);
  
    if (receita) {
      receita.nome = nomeNovo;
      receita.descricao = descricaoNova;
      receita.imagem = imagemNova;
      exibirReceitas();
    }
  }
  
  // Remove uma receita da lista e da página
  function removerReceita(nome) {
    const index = receitas.findIndex((r) => r.nome === nome);
  
    if (index !== -1) {
      receitas.splice(index, 1);
      exibirReceitas();
    }
  }
  
  // Manipulador de eventos para o botão "Editar"
  function editarReceita(event) {
    const card = event.target.closest('.card');
    const titulo = card.querySelector('.card-title').textContent;
    const descricao = card.querySelector('.card-description').textContent;
  
    const nomeInput = document.createElement('input');
    nomeInput.type = 'text';
    nomeInput.value = titulo;
  
    const descricaoInput = document.createElement('textarea');
    descricaoInput.value = descricao;
  
    const imagemInput = document.createElement('input');
    imagemInput.type = 'text';
    imagemInput.placeholder = 'URL da imagem';
  
    const salvarButton = document.createElement('button');
    salvarButton.textContent = 'Salvar';
    salvarButton.onclick = function() {
      const nomeNovo = nomeInput.value;
      const descricaoNova = descricaoInput.value;
      const imagemNova = imagemInput.value;
      atualizarReceita(titulo, nomeNovo, descricaoNova, imagemNova);
      fecharPopup();
    };
  
    const cancelarButton = document.createElement('button');
    cancelarButton.textContent = 'Cancelar';
    cancelarButton.onclick = fecharPopup;
  
    exibirPopup('Editar Receita', [nomeInput, descricaoInput, imagemInput, salvarButton, cancelarButton]);
  }
  
  // Manipulador de eventos para o botão "Excluir"
  function excluirReceita(event) {
    const card = event.target.closest('.card');
    const titulo = card.querySelector('.card-title').textContent;
    
    const confirmarButton = document.createElement('button');
    confirmarButton.textContent = 'Confirmar';
    confirmarButton.onclick = function() {
      removerReceita(titulo);
      fecharPopup();
    };
  
    const cancelarButton = document.createElement('button');
    cancelarButton.textContent = 'Cancelar';
    cancelarButton.onclick = fecharPopup;
  
    exibirPopup('Confirmar exclusão', [confirmarButton, cancelarButton]);
  }