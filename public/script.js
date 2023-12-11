document.addEventListener('DOMContentLoaded', () => 
  {
  const gameGrid = 5;
  const grid = document.getElementById('LOboard');

  function createTheGame() 
  {
    for (let i = 0; i < gameGrid * gameGrid; i++) 
    {
      const square = document.createElement('div');
      
      square.classList.add('square');
      square.addEventListener('click', () => flipSquare(square));
      grid.appendChild(square);
    }
    randomizeForNextGame();
  }

  function flipSquare(square)
  {
    square.classList.toggle('is-off');
    
    const currentRow = Math.floor(Array.from(square.parentNode.children).indexOf(square) / gameGrid);
    const currentColumn = Array.from(square.parentNode.children).indexOf(square) % gameGrid;

    flipNearbySquaresAfterClick(currentRow - 1, currentColumn);
    flipNearbySquaresAfterClick(currentRow + 1, currentColumn);
    flipNearbySquaresAfterClick(currentRow, currentColumn - 1);
    flipNearbySquaresAfterClick(currentRow, currentColumn + 1);

    checkWin();
  }

  function flipNearbySquaresAfterClick(row, col) 
  {
    if (row >= 0 && row < gameGrid && col >= 0 && col < gameGrid) 
    {
      const index = row * gameGrid + col;
      const square = document.querySelectorAll('.square')[index];
      
      square.classList.toggle('is-off');
    }
  }

  function randomizeForNextGame() 
  {
    const squares = document.querySelectorAll('.square');
    
    for (let i = 0; i < gameGrid * gameGrid * 2; i++) 
    {
      const randomSquare = Math.floor(Math.random() * squares.length);
      
      flipSquare(squares[randomSquare]);
    }
  }

  function checkWin() 
  {
    const blackSquares = document.querySelectorAll('.square.is-off');
    
    if (blackSquares.length === gameGrid * gameGrid) 
    {
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
