let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        document.querySelector(`#board .cell:nth-child(${index + 1})`).textContent = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            document.getElementById('status').textContent = `${currentPlayer} wins!`;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameActive = false;
        document.getElementById('status').textContent = 'It\'s a draw!';
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    // Reset cell contents
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = '');

    // Reset status message
    document.getElementById('status').textContent = '';
}