const receitas = [];

function adicionarReceita(nome, descricao, imagem) {
    receitas.push({ nome, descricao, imagem });
    atualizarGrid();
}

function atualizarGrid() {
    const gridContainer = document.querySelector('#SendRecipes');
    gridContainer.innerHTML = '';

    receitas.forEach((receita, index) => {
        const card = criarCard(receita, index);
        gridContainer.appendChild(card);
    });
}

function criarCard(receita, index) {
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

    const editarButton = criarBotao('Editar', 'btn-editar', () => editarReceita(index, receita));
    const excluirButton = criarBotao('Excluir', 'btn-excluir', () => excluirReceita(index));

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

    return receitaDiv;
}

function criarBotao(texto, classe, callback) {
    const botao = document.createElement('button');
    botao.classList.add(classe);
    botao.textContent = texto;
    botao.addEventListener('click', callback);
    return botao;
}

function editarReceita(index, receita) {
    const nomeInput = document.querySelector('#nome_receita');
    const descricaoInput = document.querySelector('#receita');
    nomeInput.value = receita.nome;
    descricaoInput.value = receita.descricao;

    const salvarButton = criarBotao('Salvar', null, () => salvarReceita(index, nomeInput.value, descricaoInput.value));
    const cancelarButton = criarBotao('Cancelar', null, fecharPopup);

    abrirPopup2('Editar Receita', [nomeInput, descricaoInput, salvarButton, cancelarButton]);
}
let receitasObj = [];

function salvarReceita(index, nome, descricao) {
    receitas[index].nome = nome;
    receitas[index].descricao = descricao;
    let TempObj = { nomeReceita: nome, receitaDescricao: descricao };
    this.receitasObj.push(TempObj);
    atualizarGrid();
    fecharPopup();
    console.log(glob.receitasObj);
}





function excluirReceita(index) {
    receitas.splice(index, 1);
    atualizarGrid();
}

function validarCampos() {
    const nome = document.querySelector('#nome').value;
    const nomeReceita = document.querySelector('#nome_receita').value;
    const receita = document.querySelector('#receita').value;

    if (nome === '' || nomeReceita === '' || receita === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }

    return true;
}

function enviarReceita() {
    if (validarCampos()) {
        const nomeReceita = document.querySelector('#nome_receita').value;
        const receita = document.querySelector('#receita').value;

        adicionarReceita(nomeReceita, receita);
        fecharPopup();
    }
}

function abrirPopup2() {
    popup2.style.display = 'block';
}
