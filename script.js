//
document.getElementById("play-btn").addEventListener("click", startGame);

//let clickedCells = [];
// Funzuone principale del gioco
function startGame() {
const level = document.getElementById("level").value;
    //console.log(level);
//aggiungo al title classe hidden
    document.getElementById("title").classList.add("hidden");
//rimuoviamo griglia nascosta
    const gridElem = document.getElementById("grid");
    gridElem.innerHTML = "";
    gridElem.classList.remove("hidden");

    for (let i = 1; i <= 100; i++) {
        const newCell = createGridCell(i);
        newCell.addEventListener("click", handleCellClick);
       gridElem.append(newCell);
    }
}

function createGridCell(innerNumber, cellSize) {
    const cell = document.createElement("div");
    cell.classList.add("square");
    //cell.style.width =`calc(100% / ${cellSize})`;
    //cell.style.height =`calc(100% / ${cellSize})`;
    cell.innerHTML = `<span>${innerNumber}</span>`
    return cell;
}
//console.log(createGridCell(23));

function handleCellClick() {
    this.classList.add("clicked");
    const clickedNumber = this.textContent;
    console.log(clickedNumber);
}