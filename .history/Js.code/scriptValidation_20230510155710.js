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
    const gridContainer = document.querySelector('#SendRecipes');
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
        editarButton.onclick = function () {
            // Abre um popup com os campos preenchidos com as informações da receita correspondente
            const nomeInput = document.querySelector('#nome_receita');
            const descricaoInput = document.querySelector('#receita');
            nomeInput.value = receita.nome;
            descricaoInput.value = receita.descricao;

            // Adiciona um botão "Salvar" ao popup que atualiza a receita na lista e fecha o popup
            const salvarButton = document.createElement('button');
            salvarButton.textContent = 'Salvar';
            salvarButton.onclick = function () {
                receita.nome = nomeInput.value;
                receita.descricao = descricaoInput.value;
                atualizarGrid();
                fecharPopup();
            };

            // Adiciona um botão "Cancelar" ao popup que fecha o popup sem fazer alterações
            const cancelarButton = document.createElement('button');
            cancelarButton.textContent = 'Cancelar';
            cancelarButton.onclick = function () {
                fecharPopup();
            };

            // Abre o popup com os campos preenchidos e os botões "Salvar" e "Cancelar"
            abrirPopup('Editar Receita', [nomeInput, descricaoInput, salvarButton, cancelarButton]);
        };

        const excluirButton = document.createElement('button');
        excluirButton.classList.add('btn-excluir');
        excluirButton.textContent = 'Excluir';
        excluirButton.onclick = function () {
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

const campos = document.querySelectorAll("")

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
        const nome = document.querySelector('#nome').value;
        const tipoReceita = document.querySelector('#tipo_receita').value;
        const nomeReceita = document.querySelector('#nome_receita').value;
        const receita = document.querySelector('#receita').value;

        adicionarReceita(nomeReceita, receita);
        fecharPopup();
    }
}
