const form = document.getElementById("presence-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("name").value.trim();
  if(!nome) return;

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      alert("Presença confirmada!");
      
      // Adiciona na lista local
      const ul = document.getElementById("name-list");
      const li = document.createElement("li");
      li.textContent = nome;
      ul.appendChild(li);

      form.reset();
    } else {
      alert("Erro ao registrar presença.");
    }
  })
  .catch(err => alert("Erro ao registrar: " + err));
});
