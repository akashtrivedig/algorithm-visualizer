// let array_to_sorted = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// let array_to_sorted = [20, 19, 18, 17, 16, 15]
let array_to_sorted = [3, 16, 12, 17, 6, 5, 4, 15, 20, 1, 9, 11, 13, 7, 8, 14, 2, 19, 10, 18]
let sorted_array = [2, 3, 6, 8, 9, 10, 13, 14, 17, 21, 22, 25, 28, 29, 34, 41, 42, 44, 47, 49]

function createGrid() {
  let grid_container = document.getElementById('grid')
  for (let i = 0; i < 420; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    grid_container.appendChild(block)
  }
}

function createArrayUnder(args) {
  let number_container = document.getElementById('numbers-container')
  document.getElementById('numbers').remove()
  let numbers = document.createElement('div')
  numbers.classList.add('numbers')
  numbers.id = 'numbers'
  number_container.appendChild(numbers)
  let counter = 0
  args[0].forEach((number) => {
    let number_div = document.createElement('div')
    number_div.classList.add('number')
    if (counter == args[1]) {
      number_div.classList.add('active-number')
    }
    number_div.innerText = number
    numbers.appendChild(number_div)
    ++counter
  })
}

function createGraph(args) {
  let bars_container = document.getElementById('bars-container')
  document.getElementById('bars').remove()
  let bars = document.createElement('div')
  bars.classList.add('bars')
  bars.id = 'bars'
  bars_container.appendChild(bars)

  let counter = 0
  args[0].forEach((number) => {
    let bar_container = document.createElement('div')
    bar_container.classList.add('bar-container')
    let bar = document.createElement('div')
    bar.style.height = `${number * 2}%`
    bar.classList.add('bar')
    if (counter == args[1]) {
      bar.classList.add('active-bar')
    }
    bars.appendChild(bar_container)
    bar_container.appendChild(bar)
    ++counter
  })
  createArrayUnder(args)
}

function pass_bubbelSort(pass, array, active_index, callback) {
  for (let j = 1; j < array.length - pass; j++) {
    if (array[j - 1] > array[j]) {
      let temp = array[j]
      array[j] = array[j - 1]
      array[j - 1] = temp
      active_index = j
    }
  }
  document.getElementById('counter').innerText = Number(document.getElementById('counter').innerText) + (array.length - pass - 2)
  callback([array, active_index])
}
function bubbleSort() {
  let array = array_to_sorted
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => { pass_bubbelSort(i, array, i, createGraph) }, 600 * i)
  }
}


function binarySearch(array, target) {
  let comparisions = 0
  let start = 0, end = array.length - 1, mid = Math.round(end - ((end - start) / 2))
  while (start <= end) {
    comparisions += 1
    document.getElementById('counter').innerText = comparisions
    setTimeout(createGraph, 1000 * comparisions, [array, mid])
    if (array[mid] === target) {
      return mid
    }
    if (array[mid] > target) {
      end = mid - 1
      mid = Math.round(end - ((end - start) / 2))
    } else {
      start = mid + 1
      mid = Math.round(end - ((end - start) / 2))
    }
  }
  return -1
}

function linearSearch(array, target) {
  let comparisions = 0
  for (let i = 0; i < array.length; i++) {
    ++comparisions
    if (array[i] === target) {
      return i
    }
    setTimeout(createGraph, 600 * i, [array, i + 1])
  }
  return -1
}


let selection_id = document.getElementById('selection')
let current_selection = selection_id.value
selection_id.addEventListener('change', (event) => {
  current_selection = event.target.value
  console.log(current_selection);
  switch (current_selection) {
    case '0':
      createGraph([array_to_sorted, 0])
      break;
    case '1':
      createGraph([array_to_sorted, 0])
      break;
    case '2':
      createGraph([array_to_sorted, 0])
      break;
    case '3':
      createGraph([array_to_sorted, 0])
      break;
    case '4':
      createGraph([sorted_array, 0])
      break;

    default:
      break;
  }
})

document.getElementById('run').addEventListener('click', () => {
  switch (current_selection) {
    case '0':
      bubbleSort()
      break;
    case '1':
      bubbleSort()
      break;
    case '2':
      bubbleSort()
      break;
    case '3':
      linearSearch(sorted_array, 6)
      break;
    case '4':
      binarySearch(sorted_array, 44)
      break;

    default:
      break;
  }
})

document.getElementById('array-length').innerText = array_to_sorted.length
// createGrid()
createGraph([array_to_sorted, 0])