const grid = document.getElementById("grid");
const resizeBtn = document.getElementById("resizeBtn");

function buildGrid(n) {
  grid.style.setProperty("--size", n);
  grid.innerHTML = "";

  const total = n * n;
  for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    grid.appendChild(cell);
  }
}

// Colora ogni cella con un RGB casuale ad ogni passaggio del mouse
grid.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("cell")) return;

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

resizeBtn?.addEventListener("click", () => {
  const input = prompt("Quante celle per lato? (max 100)", "16");
  if (input === null) return;

  const n = parseInt(input, 10);
  if (Number.isNaN(n) || n <= 0) return alert("Inserisci un numero valido > 0.");
  if (n > 100) return alert("Massimo 100 per lato.");

  buildGrid(n);
});

buildGrid(16);
