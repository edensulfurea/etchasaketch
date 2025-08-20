// Riferimenti al DOM
const grid = document.getElementById("grid");
const resizeBtn = document.getElementById("resizeBtn");

// Crea una griglia n x n
function buildGrid(n) {
  grid.style.setProperty("--size", n); // comunica al CSS quante colonne
  grid.innerHTML = "";                 // reset griglia

  const total = n * n;
  for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    grid.appendChild(cell);
  }
}

// Effetto scia: aggiunge la classe quando il mouse passa su una cella
grid.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.classList.add("hovered");
  }
});

// Bottone: chiede nuova dimensione e ricrea la griglia
if (resizeBtn) {
  resizeBtn.addEventListener("click", () => {
    const input = prompt("Quante celle per lato? (max 100)", "16");
    if (input === null) return;

    const n = parseInt(input, 10);
    if (Number.isNaN(n) || n <= 0) {
      alert("Inserisci un numero valido maggiore di 0.");
      return;
    }
    if (n > 100) {
      alert("Massimo 100 per lato per evitare rallentamenti.");
      return;
    }

    buildGrid(n);
  });
}

// Griglia iniziale
buildGrid(16);
