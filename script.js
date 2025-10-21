const form = document.getElementById("presence-form");
const scriptURL = "https://script.google.com/macros/s/AKfycbww3LFITmoMmivRzxYgBtGfakDqM3JBBOuvebJ2ppqt4kMWzUwSlNgzE1vFD_D8dx0/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form); // cria objeto FormData do formulário

  fetch(scriptURL, {
    method: "POST",
    body: formData // envia como POST nativo
  })
    .then(response => response.text())
    .then((result) => {
      alert("Presença confirmada!");
      form.reset();
    })
    .catch(error => {
      alert("Erro ao registrar: " + error);
    });
});
