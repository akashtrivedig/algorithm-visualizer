let grid_container = document.getElementById('grid')
for (let i = 0; i < 420; i++) {
  const block = document.createElement('div')
  grid_container.appendChild(block)
  block.classList.add('block')
}