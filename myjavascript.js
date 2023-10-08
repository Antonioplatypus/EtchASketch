var columns = 16;
var rows = 16;
var colorUsed = "black";
var gridSize = 0;
var gridCreated = 0;
gridContainer = document.getElementById("gridContainer");
//document.getElementById("grid")

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function CreateGrid(gridSize) {
if(gridCreated != 0){ removeAllChildNodes(gridContainer); gridCreated = 0; }
var grid = document.createElement('div');            // creates grid
grid.className = 'grid';
if (gridSize>100) gridSize = 64;
if (gridSize<1) gridsize = 64;
for (var i = 0; i < gridSize; ++i) {
    var column = document.createElement('div');      // creates column
    column.className = 'column';
        for (var j = 0; j < gridSize; ++j) {
            var cell = document.createElement('div');    // creates cell
            cell.className = 'cell';
            cell.textContent = "cell";                   // sets text in cell
            column.appendChild(cell);                    // appends cell to column (as row)
        }
    grid.appendChild(column);                        // appends column to grid
}
document.getElementById("gridContainer").appendChild(grid); gridCreated = 1;
}

document.getElementById("gridSize").addEventListener("click", (event) => { 
    gridSize = window.prompt("How big should the grid be? (100 max)");
    CreateGrid(gridSize)
    ;});


gridContainer.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = colorUsed;
  });


document.getElementById("colorBlack").addEventListener("click", (event) => { colorUsed = "black"; });
document.getElementById("colorRed").addEventListener("click", (event) => { colorUsed = "red"; });
document.getElementById("colorWhite").addEventListener("click", (event) => { colorUsed = "white"; });
document.getElementById("colorBlue").addEventListener("click", (event) => { colorUsed = "blue"; });
document.getElementById("colorPurple").addEventListener("click", (event) => { colorUsed = "purple"; });

