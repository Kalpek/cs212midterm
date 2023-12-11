document.addEventListener('DOMContentLoaded', () => 
  {
  const boardSize = 5;
  const board = document.getElementById('LOboard');

  function createTheGame() 
  {
    for (let i = 0; i < boardSize * boardSize; i++) 
    {
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('click', () => flipSquare(square));
      board.appendChild(square);
    }
    randomizeForNextGame();
  }

  function flipSquare(square)
  {
    square.classList.toggle('is-off');
    
    const rowIndex = Math.floor(Array.from(square.parentNode.children).indexOf(square) / boardSize);
    const colIndex = Array.from(square.parentNode.children).indexOf(square) % boardSize;

    flipNearbySquaresAfterClick(rowIndex - 1, colIndex);
    flipNearbySquaresAfterClick(rowIndex + 1, colIndex);
    flipNearbySquaresAfterClick(rowIndex, colIndex - 1);
    flipNearbySquaresAfterClick(rowIndex, colIndex + 1);

    checkWin();
  }

  function flipNearbySquaresAfterClick(row, col) 
  {
    if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) 
    {
      const index = row * boardSize + col;
      const square = document.querySelectorAll('.square')[index];
      square.classList.toggle('is-off');
    }
  }

  function randomizeForNextGame() 
  {
    const squares = document.querySelectorAll('.square');

    // Simulate clicks! thanks for the tip on the assingment page for this
    for (let i = 0; i < boardSize * boardSize * 2; i++) 
    {
      const randomIndex = Math.floor(Math.random() * squares.length);
      flipSquare(squares[randomIndex]);
    }
  }

  function checkWin() 
  {
    const blackSquares = document.querySelectorAll('.square.is-off');
    if (blackSquares.length === boardSize * boardSize) {
      window.alert('You win!');
      resetIfTheyWon();
    }
  }

  function resetIfTheyWon() 
  {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.classList.remove('is-off'));
    randomizeForNextGame();
  }

  createTheGame();
});
