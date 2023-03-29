var button = document.getElementById('botao_cadastro');
const popup = document.querySelector('.popup_wrapper');
const closeButton = document.querySelector('.popup_close');


button.addEventListener('click', abrirPopup)

closeButton.addEventListener('click',()=> {
    popup.style.display='none';
})

function abrirPopup(){
   
    alert("Você clicou na div!");

}

/*<div id="minha-div">Clique aqui</div>

<script>
  function minhaFuncao() {
    alert("Você clicou na div!");
  }

  var minhaDiv = document.getElementById("minha-div");
  minhaDiv.addEventListener("click", minhaFuncao);
</script>*/