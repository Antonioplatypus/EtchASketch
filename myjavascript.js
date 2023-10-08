var columns = 16;
var rows = 16;
var colorUsed = "black";

var grid = document.createElement('div');            // creates grid
grid.className = 'grid';
for (var i = 0; i < columns; ++i) {
    var column = document.createElement('div');      // creates column
    column.className = 'column';
        for (var j = 0; j < rows; ++j) {
            var cell = document.createElement('div');    // creates cell
            cell.className = 'cell';
            cell.textContent = "cell";                   // sets text in cell
            column.appendChild(cell);                    // appends cell to column (as row)
        }
    grid.appendChild(column);                        // appends column to grid
}
document.body.appendChild(grid);

grid.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = colorUsed;
  });


document.getElementById("colorBlack").addEventListener("click", (event) => { colorUsed = "black"; });
document.getElementById("colorRed").addEventListener("click", (event) => { colorUsed = "red"; });
document.getElementById("colorWhite").addEventListener("click", (event) => { colorUsed = "white"; });
document.getElementById("colorBlue").addEventListener("click", (event) => { colorUsed = "blue"; });
document.getElementById("colorPurple").addEventListener("click", (event) => { colorUsed = "purple"; });

