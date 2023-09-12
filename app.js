const cell = document.querySelectorAll('[data-cell]');
const board =document.querySelector('.board');
const restartButton = document.getElementById('restart');
const playerXScore = document.getElementById('playerX');
const playerOScore = document.getElementById('playerO');
let currentPlayer = 'X';
let xScore=0;
let oScore=0;

// cells all event

