const button = document.getElementById('botao_cadastro');
const popup = document.querySelector('.popup_wrapper');
const closeButton = document.querySelector('.popup_close');

button.addEventListener('click', abrirPopup);

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

function abrirPopup() {
  popup.style.display = 'block';
}

function mostrarSenha() {
  var inputPass = document.getElementById('senha');
  var btnShowPass = document.getElementById('olhoaberto');

  if (inputPass.type === 'password') {
    inputPass.type = 'text';
    btnShowPass.classList.replace('bi-eye', 'bi-eye-slash');
  } else {
    inputPass.type = 'password';
    btnShowPass.classList.replace('bi-eye-slash', 'bi-eye');
  }
}

const button2 = document.getElementById('headerHamburg');
const menu = document.getElementById('myNav');

function toggleMenu() {
  menu.classList.toggle('show');
}

button2.addEventListener('click', toggleMenu);

function closeNav() {
  menu.classList.remove('show');
}

let posicaoInicial = 0;
const slidesPorVez = 3;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function mudarSlide(direcao) {
  posicaoInicial += direcao * slidesPorVez;

  if (posicaoInicial < 0) {
    posicaoInicial = totalSlides - slidesPorVez;
  }

  if (posicaoInicial >= totalSlides) {
    posicaoInicial = 0;
  }

  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.transform = `translateX(-${posicaoInicial * (100 / slidesPorVez)}%)`;
  }
}

const menuBtn = document.querySelector('#headerHamburg');
const menuContainer = document.querySelector('.menu-container');
const closeMenuBtn = document.querySelector('#closeMenuBtn');

menuBtn.addEventListener('click', () => {
  menuContainer.style.display = 'block';
});

closeMenuBtn.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});

const form = document.querySelector('#popup2 .popup-content2');
const botaoEnviar = document.querySelector('#botao-enviar');

// Adicione um manipulador de eventos ao botão Enviar
botaoEnviar.addEventListener('click', (event) => {
  // Impedir que o formulário seja enviado via POST
  event.preventDefault();

  // Obter os valores do formulário
  const nome = form.querySelector('#nome').value;
  const email = form.querySelector('#email').value;
  const tipoReceita = form.querySelector('#tipo_receita').value;
  const nomeReceita = form.querySelector('#nome_receita').value;
  const receita = form.querySelector('#receita').value;

  // Crie um novo card de receita com os valores do formulário
  const cardReceita = document.createElement('div');
  cardReceita.classList.add('receita');

  const imagemReceita = document.createElement('div');
  imagemReceita.classList.add('imagem-receita');
  // Defina a imagem da receita, se tiver uma

  const nomeReceitaElemento = document.createElement('div');
  nomeReceitaElemento.classList.add('nome-receita');
  nomeReceitaElemento.innerText = nomeReceita;

  const descricaoReceita = document.createElement('div');
  descricaoReceita.classList.add('descricao-receita');
  descricaoReceita.innerText = receita;

  cardReceita.appendChild(imagemReceita);
  cardReceita.appendChild(nomeReceitaElemento);
  cardReceita.appendChild(descricaoReceita);

  // Adicione o novo card de receita à grade de receitas
  const gradeReceitas = document.querySelector('#grade-receitas');
  gradeReceitas.appendChild(cardReceita);

  // Feche o formulário popup
  fecharPopup();
});