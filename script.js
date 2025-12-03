// Массив победных комбинаций
const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // строки
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // столбцы
    [0, 4, 8], [2, 4, 6]               // диагонали
];

let turnInfo = document.getElementById('turn-info');
let board = document.getElementById('game-board');
let cells = []; // Массив клеток
let currentPlayer = 'X'; // Текущий игрок ('X' или 'O')
let gameActive = true; // Признак активного состояния игры

// Функция инициализации игры
function initGame() {
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement('td');
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', makeMove);
        board.appendChild(cell);
        cells.push(cell);
    }
}

// Функция совершения хода
function makeMove(event) {
    if (!gameActive || this.textContent !== '') return;

    this.textContent = currentPlayer;
    checkWin(); // Проверяем условия победы
    changePlayer(); // Меняем текущего игрока
}

// Функция проверки условий выигрыша
function checkWin() {
    for (let combo of winCombos) {
        let a = cells[combo[0]].textContent;
        let b = cells[combo[1]].textContent;
        let c = cells[combo[2]].textContent;

        if (a === '' || b === '' || c === '') continue;
        if (a === b && b === c) {
            gameActive = false;
            turnInfo.textContent = `${currentPlayer} выиграл!`;
            return;
        }
    }

    // Проверка ничьей
    if (!cells.some(c => c.textContent === '')) {
        gameActive = false;
        turnInfo.textContent = 'Ничья!';
    }
}

// Изменение текущего игрока
function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnInfo.textContent = `${currentPlayer}, Ваш ход!`;
}

// Перезапуск игры
function restartGame() {
    cells.forEach((cell) => cell.textContent = '');
    gameActive = true;
    currentPlayer = 'X';
    turnInfo.textContent = 'Ваш ход!';
}

// Инициализация игры
initGame();
