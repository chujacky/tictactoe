const readline = require('readline');

let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let player = 'X';

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.name < 10 && key.name > 0) {
    runGame(key.name);
  } 
  if (key.name === 'escape') {
    process.exit();
  }
})

console.log('welcome to tic tac toe');

const checkRow = (row) => {
  return board[row].every((move) => {
    return move === player;
  })
}

const checkCol = (col) => {
  for (let i = 0; i < board.length; i+=1) {
    if (board[i][col] !== player) {
      return false;
    }
  }
  return true;
}

const runGame = (coordinate) => {
  coordinate -= 1;
  const row = Math.floor(coordinate/3);
  const col = coordinate % 3;
  board[row][col] = player;
  if (checkRow(row) || checkCol(col)) {
    console.log(`${player} won`);
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    process.exit();
  }
  player = player === 'X' ? 'O' : 'X';
  console.log(`${player}'s turn`);
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

const startGame = () => {
  console.log(`${player}'s turn`);
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}
startGame();

