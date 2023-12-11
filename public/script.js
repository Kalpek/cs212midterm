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
    checkWin();
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
