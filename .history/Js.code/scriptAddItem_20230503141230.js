// Array para armazenar as informações das receitas
let receitas = [];

// Função para adicionar uma nova receita
function adicionarReceita(nome, descricao, imagem) {
  receitas.push({
    nome: nome,
    descricao: descricao,
    imagem: imagem
  });
  
  atualizarGrid();
}

// Função para atualizar a exibição das receitas na grade
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
      // Implementar a lógica para editar a receita aqui
    };
    
    const excluirButton = document.createElement('button');
    excluirButton.classList.add('btn-excluir');
    excluirButton.textContent = 'Excluir';
    excluirButton.onclick = function() {
      // Implementar a lógica para excluir a receita aqui
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

// Função para abrir o formulário de envio de receitas
function abrirPopup2() {
  const popup = document.querySelector('#popup2');
  popup.classList.add('show');
}

// Função para fechar o formulário de envio de receitas
function fecharPopup() {
  const popup = document.querySelector('#popup2');
  popup.classList.remove('show');
}

// Função para enviar uma nova receita do formulário
function enviarReceita() {
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const tipoReceita = document.querySelector('#tipo_receita').value;
  const nomeReceita = document.querySelector('#nome_receita').value;
  const receita = document.querySelector('#receita').value;
  
  adicionarReceita(nomeReceita, receita, 'imagem-da-receita.jpg');
  fecharPopup();
}
