// URL do seu Google Apps Script
const scriptURL = "https://script.google.com/macros/s/AKfycbww3LFITmoMmivRzxYgBtGfakDqM3JBBOuvebJ2ppqt4kMWzUwSlNgzE1vFD_D8dx0/exec";

const form = document.getElementById("presence-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("name").value.trim();

  if (!nome) {
    alert("Por favor, digite seu nome completo.");
    return;
  }

  fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        alert("Presença confirmada!");

        // Limpa input
        document.getElementById("name").value = "";

        // Atualiza lista local na página
        const ul = document.getElementById("name-list");
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
      } else {
        alert("Erro ao registrar: " + data.mensagem);
      }
    })
    .catch((err) => alert("Erro ao registrar: " + err.message));
});
