const grid = document.getElementById("grid");

const size= 16;
const totalCells= size * size;

for(let i=0;i< totalCells;i++){
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
}