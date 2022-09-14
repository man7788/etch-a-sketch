const gridButton = document.querySelector('#setGrid')

gridButton.addEventListener('click', () => {
  let area;
  area = Number(prompt('Set grid number of square per side'));
  let gridCal = area * area;
  createGrid(gridCal);
});

function createGrid(squares) {
  for (i = 0; i < squares; i++) {
  const grid = document.createElement('div');
  grid.classList.add('grid');      
  grid.style.width = '10px';
  grid.style.height = '10px';
  grid.style.border = '1px solid black';
  grid.style.flex = '1 0 auto';
  container.appendChild(grid);
}};

// console.log(typeof(gridCal));
// console.log(area);