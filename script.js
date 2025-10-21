const scriptURL = "https://script.google.com/macros/s/AKfycbww3LFITmoMmivRzxYgBtGfakDqM3JBBOuvebJ2ppqt4kMWzUwSlNgzE1vFD_D8dx0/exec";

document.getElementById("formPresenca").addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;

  fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome }),
  })
    .then((res) => res.text())
    .then((msg) => {
      alert("Presença confirmada!");
      document.getElementById("nome").value = "";
    })
    .catch((err) => alert("Erro ao registrar: " + err.message));
});
