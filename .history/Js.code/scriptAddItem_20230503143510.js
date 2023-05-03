
let receitas = [];


function adicionarReceita(nome, descricao, imagem) {
  receitas.push({
    nome: nome,
    descricao: descricao,
    imagem: imagem
  });
  
  atualizarGrid();
}

function atualizarGrid() {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';
  
  for (let i = 0; i < receitas.length; i++) {
    const receita = receitas[i];
    
    const card = document.createElement('div');
    card.classList.add('card');
    
    const imagem = document.createElement('img');
    imagem.src = receita.imagem;
    imagem.alt = receita.nome;
    
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
    editarButton.onclick = function() {
    
    };
    
    const excluirButton = document.createElement('button');
    excluirButton.classList.add('btn-excluir');
    excluirButton.textContent = 'Excluir';
    excluirButton.onclick = function() {
     
    };
    
    cardInfo.appendChild(titulo);
    cardInfo.appendChild(descricao);
    cardInfo.appendChild(editarButton);
    cardInfo.appendChild(excluirButton);
    
    card.appendChild(imagem);
    card.appendChild(cardInfo);
    
    const receitaLink = document.createElement('a');
    receitaLink.href = '#';
    receitaLink.appendChild(card);
    
    const receitaDiv = document.createElement('div');
    receitaDiv.classList.add('receita');
    receitaDiv.appendChild(receitaLink);
    
    gridContainer.appendChild(receitaDiv);
  }
}

function enviarReceita() {
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const tipoReceita = document.querySelector('#tipo_receita').value;
  const nomeReceita = document.querySelector('#nome_receita').value;
  const receita = document.querySelector('#receita').value;
  
  adicionarReceita(nomeReceita, receita, 'imagem-da-receita.jpg');
  fecharPopup();
}

let receitas = [];

function adicionarReceita(nome, descricao, imagem) {
  receitas.push({
    nome: nome,
    descricao: descricao,
    imagem: imagem
  });
  
  atualizarGrid();
}

function atualizarGrid() {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';
  
  for (let i = 0; i < receitas.length; i++) {
    const receita = receitas[i];
    
    const card = document.createElement('div');
    card.classList.add('card');
    
    const imagem = document.createElement('img');
    imagem.src = receita.imagem;
    imagem.alt = receita.nome;
    
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
    editarButton.onclick = function() {
      // Cria um popup de edição com os campos preenchidos com as informações da receita correspondente
      const popup = criarPopup('Editar Receita');
      
      const nomeInput = document.createElement('input');
      nomeInput.type = 'text';
      nomeInput.value = receita.nome;
      const nomeLabel = document.createElement('label');
      nomeLabel.textContent = 'Nome:';
      nomeLabel.appendChild(nomeInput);
      
      const descricaoInput = document.createElement('textarea');
      descricaoInput.value = receita.descricao;
      const descricaoLabel = document.createElement('label');
      descricaoLabel.textContent = 'Descrição:';
      descricaoLabel.appendChild(descricaoInput);
      
      const salvarButton = document.createElement('button');
      salvarButton.textContent = 'Salvar';
      salvarButton.onclick = function() {
        receita.nome = nomeInput.value;
        receita.descricao = descricaoInput.value;
        atualizarGrid();
        fecharPopup(popup);
      };
      
      const cancelarButton = document.createElement('button');
      cancelarButton.textContent = 'Cancelar';
      cancelarButton.onclick = function() {
        fecharPopup(popup);
      };
      
      popup.appendChild(nomeLabel);
      popup.appendChild(descricaoLabel);
      popup.appendChild(salvarButton);
      popup.appendChild(cancelarButton);
      abrirPopup(popup);
    };
    
    const excluirButton = document.createElement('button');
    excluirButton.classList.add('btn-excluir');
    excluirButton.textContent = 'Excluir';
    excluirButton.onclick = function() {
      // Remove a receita correspondente da lista e atualiza a exibição
      receitas.splice(i, 1);
      atualizarGrid();
    };
    
    cardInfo.appendChild(titulo);
    cardInfo.appendChild(descricao);
    cardInfo.appendChild(editarButton);
    cardInfo.appendChild(excluirButton);
    
    card.appendChild(imagem);
    card.appendChild(cardInfo);
    
    const receitaLink = document.createElement('a');
    receitaLink.href = '#';
    receitaLink.appendChild(card);
    
    const receitaDiv = document.createElement('div');
    receitaDiv.classList.add('receita');
    receitaDiv.appendChild(receitaLink);
    
    gridContainer.appendChild(receitaDiv);
  }
}

function enviarReceita() {
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const tipoReceita = document.querySelector('#tipo_receita').value;
  const nomeReceita = document.querySelector('#nome_receita').value;
  const receita = document.querySelector('#receita').value;
  
  adicionarReceita(nomeReceita, receita, 'imagem-da-receita.jpg');
  fecharPopup();
}

function criarPopup(titulo) {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  
  const popupTitulo = document.createElement('h3');
  popupTitulo.textContent = titulo;
  
  const popupFechar = document.createElement('button');
  popupFechar.textContent = 'X';
  popupFechar.onclick = function() {
    fecharPopup(popup);
  };
  
  popup.appendChild(popupTitulo);
  popup.appendChild(popupFechar);
  
  return popup;
}

function abrirPopup(popup) {
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.appendChild(popup);
  popupContainer.classList.add('popup-container--aberto');
}

function fecharPopup(popup) {
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.classList.remove('popup-container--aberto');
  popupContainer.removeChild(popup);
}