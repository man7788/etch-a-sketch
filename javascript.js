const gridButton = document.querySelector('#setGrid')

gridButton.addEventListener('click', () => {
  let area;
  area = Number(prompt('Set grid number of square per side (number < 100)'));
  if (area > 100) {
    alert('Number too large (number < 100)')
  } else {
  createGrid(area);
  };
});

function createGrid(squares) {
  containerGrid.replaceChildren()

  let list = [];

  for (i = 0; i < squares; i++) {
  const gridRow = document.createElement('div');
  gridRow.setAttribute('id', 'gridRow'); 
  list.push(gridRow);
  };

  for (const row of list) {
    for (i = 0; i < squares; i++) {
    const grid = document.createElement('div')
    grid.classList.add('grid');
    row.appendChild(grid);
    containerGrid.appendChild(row);
}}};









 