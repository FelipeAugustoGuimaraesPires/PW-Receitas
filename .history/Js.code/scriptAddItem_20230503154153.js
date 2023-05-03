
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

        };

        const excluirButton = document.createElement('button');
        excluirButton.classList.add('btn-excluir');
        excluirButton.textContent = 'Excluir';
        excluirButton.onclick = function () {

        };

        cardInfo.appendChild(titulo);
        cardInfo.appendChild(descricao);
        cardInfo.appendChild(editarButton);
        cardInfo.appendChild(excluirButton);


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


    fecharPopup();
}

function adicionarReceita(nome, descricao) {
    receitas.push({
        nome: nome,
        descricao: descricao,

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
        editarButton.onclick = function () {
            button.addEventListener('click', abrirPopup);

            closeButton.addEventListener('click', () => {
                popup.style.display = 'none';
            });

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

            const pop = document.querySelector('.edit-card');

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

function enviarReceita() {
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const tipoReceita = document.querySelector('#tipo_receita').value;
    const nomeReceita = document.querySelector('#nome_receita').value;
    const receita = document.querySelector('#receita').value;

    adicionarReceita(nomeReceita, receita, 'imagem-da-receita.jpg');
    fecharPopup();
}
// Seleciona todos os botões de edição de cada card
const editButtons = document.querySelectorAll(".card-edit-button");

// Seleciona o formulário de edição
const editForm = document.querySelector(".edit-card-form");

// Adiciona um manipulador de eventos para cada botão de edição
editButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Seleciona o título e a descrição do card atual
        const title = button.parentElement.querySelector(".card-title").textContent;
        const desc = button.parentElement.querySelector(".card-desc").textContent;

        // Define o valor dos campos de entrada do formulário de edição
        editForm.querySelector("#nome_receita").value = title;
        editForm.querySelector("#receita").value = desc;

        // Exibe o formulário de edição
        document.querySelector(".edit-card").classList.remove("hidden");
    });
});

// Adiciona um manipulador de eventos para o botão "Cancelar" do formulário de edição
editForm.querySelector(".edit-card-cancel").addEventListener("click", () => {
    // Oculta o formulário de edição
    document.querySelector(".edit-card").classList.add("hidden");
});

// Adiciona um manipulador de eventos para o botão "Salvar" do formulário de edição
editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Seleciona o título e a descrição do card atual
    const title = editForm.querySelector("#nome_receita").value;
    const desc = editForm.querySelector("#receita").value;

    // Define o valor do título e descrição do card atual
    editForm.parentElement.querySelector(".card-title").textContent = title;
    editForm.parentElement.querySelector(".card-desc").textContent = desc;

    // Oculta o formulário de edição
    document.querySelector(".edit-card").classList.add("hidden");
});