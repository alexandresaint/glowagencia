// Pega os elementos do HTML
const form = document.getElementById('presence-form');
const nameInput = document.getElementById('name');
const nameList = document.getElementById('name-list');

// Função para adicionar nome
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  if (name === '') return;

  // Adiciona o nome à lista na tela
  const li = document.createElement('li');
  li.textContent = name;
  nameList.appendChild(li);

  // Salva no LocalStorage (temporário)
  saveName(name);

  // Limpa o campo
  nameInput.value = '';
});

// Salvar nomes localmente (teste inicial)
function saveName(name) {
  const stored = JSON.parse(localStorage.getItem('presencaGlow')) || [];
  stored.push(name);
  localStorage.setItem('presencaGlow', JSON.stringify(stored));
}

// Carrega nomes ao abrir a página
window.onload = function() {
  const stored = JSON.parse(localStorage.getItem('presencaGlow')) || [];
  stored.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    nameList.appendChild(li);
  });
};
