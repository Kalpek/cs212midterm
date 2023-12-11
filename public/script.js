document.addEventListener('DOMContentLoaded', () => {
  const boardSize = 5;
  const board = document.getElementById('board');

  function initializeBoard() {
    for (let i = 0; i < boardSize * boardSize; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('click', () => toggleSquare(square));
      board.appendChild(square);
    }

    randomizeBoard();
  }

  function toggleSquare(square) {
    square.classList.toggle('is-off');
    
    // Get the row and column index of the clicked square
    const rowIndex = Math.floor(Array.from(square.parentNode.children).indexOf(square) / boardSize);
    const colIndex = Array.from(square.parentNode.children).indexOf(square) % boardSize;

    // Toggle adjacent squares
    toggleAdjacentSquare(rowIndex - 1, colIndex); // Top
    toggleAdjacentSquare(rowIndex + 1, colIndex); // Bottom
    toggleAdjacentSquare(rowIndex, colIndex - 1); // Left
    toggleAdjacentSquare(rowIndex, colIndex + 1); // Right

    checkWin();
  }

  function toggleAdjacentSquare(row, col) {
    if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
      const index = row * boardSize + col;
      const square = document.querySelectorAll('.square')[index];
      square.classList.toggle('is-off');
    }
  }

  function randomizeBoard() {
    const squares = document.querySelectorAll('.square');

    // Simulate random clicks to create a solvable initial configuration
    for (let i = 0; i < boardSize * boardSize * 2; i++) {
      const randomIndex = Math.floor(Math.random() * squares.length);
      toggleSquare(squares[randomIndex]);
    }
  }

  function checkWin() {
    const blackSquares = document.querySelectorAll('.square.is-off');
    if (blackSquares.length === boardSize * boardSize) {
      window.alert('You win!');
      resetBoard();
    }
  }

  function resetBoard() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.classList.remove('is-off'));
    randomizeBoard();
  }

  initializeBoard();
});
