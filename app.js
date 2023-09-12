const cells = document.querySelectorAll('[data-cell]');
const board = document.querySelector('.board');
const restartButton = document.getElementById('restart');
const playerXScore = document.getElementById('playerX');
const playerOScore = document.getElementById('playerO');
let currentPlayer = 'X';
let xScore = 0;
let oScore = 0;

// cells all event


function checkWin(player) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index] === player;
        });
    });
}

function checkDrow() {
    return [...cells].every(cell => {
        return cell.innerText === 'X' || cell.innerText === 'O';
    });
}