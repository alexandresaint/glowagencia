const form = document.getElementById("presence-form");
const scriptURL = "https://script.google.com/macros/s/AKfycbyORwdGRehK9_cehM_d68U_YXv4t0V8y4-BiMOzNWp8d22eXx1wnUuS7k5Dr0yfrOTo/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form); // cria objeto FormData do formulário

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if(data.status === "ok") {
        alert("Presença confirmada!");
        form.reset();

        // Atualiza lista local na página
        const ul = document.getElementById("name-list");
        const li = document.createElement("li");
        li.textContent = document.getElementById("name").value;
        ul.appendChild(li);
      } else {
        alert("Erro: " + data.mensagem);
      }
    })
    .catch(err => alert("Erro ao registrar: " + err));
});
