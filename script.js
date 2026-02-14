const PHRASE_ORDER = {
    QUERES: 1,
    SER: 2,
    MI: 3,
    SAN: 4,
    VALENTIN: 5
};

const crosswordData = createFixedCrossword();
const GRID_SIZE = { rows: crosswordData.grid.length, cols: crosswordData.grid[0].length };
const CELL_SIZE = 32; // Compact cells keep crossword, botones y pistas visibles a la vez

function createFixedCrossword() {
    const grid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const baseWords = [
        // Horizontales
        { id: 'a-3', number: 3, word: 'VALENTIN', clue: 'Nombre propio masculino asociado al Día de San Valentín.', dir: 'across', row: 1, col: 7, phraseOrder: 4 },
        { id: 'a-10', number: 10, word: 'EL', clue: 'Artículo masculino singular.', dir: 'across', row: 4, col: 23 },
        { id: 'a-11', number: 11, word: 'CHOCOLATE', clue: 'Dulce hecho a base de cacao.', dir: 'across', row: 5, col: 7 },
        { id: 'a-13', number: 13, word: 'ABRAZOS', clue: 'Muestras de afecto con los brazos.', dir: 'across', row: 5, col: 17 },
        { id: 'a-14', number: 14, word: 'SAN', clue: 'Título usado antes del nombre de algunos santos.', dir: 'across', row: 6, col: 15, phraseOrder: 4 },
        { id: 'a-15', number: 15, word: 'IR', clue: 'Verbo que indica movimiento.', dir: 'across', row: 7, col: 23 },
        { id: 'a-16', number: 16, word: 'MAR', clue: 'Gran masa de agua salada.', dir: 'across', row: 8, col: 13 },
        { id: 'a-17', number: 17, word: 'SI', clue: 'Afirmación o conjunción condicional.', dir: 'across', row: 9, col: 12 },
        { id: 'a-18', number: 18, word: 'SOL', clue: 'Estrella que ilumina la Tierra.', dir: 'across', row: 9, col: 22 },
        { id: 'a-19', number: 19, word: 'LUNA', clue: 'Satélite natural de la Tierra.', dir: 'across', row: 10, col: 15 },
        { id: 'a-26', number: 26, word: 'AVENTURA', clue: 'Experiencia emocionante o fuera de lo común.', dir: 'across', row: 12, col: 5 },
        { id: 'a-27', number: 27, word: 'LA', clue: 'Artículo femenino singular.', dir: 'across', row: 12, col: 14 },
        { id: 'a-28', number: 28, word: 'JARDIN', clue: 'Espacio con plantas y flores.', dir: 'across', row: 13, col: 0 },
        { id: 'a-30', number: 30, word: 'ME', clue: '“Yo” en inglés.', dir: 'across', row: 14, col: 9 },
        { id: 'a-33', number: 33, word: 'SONRISA', clue: 'Gesto facial que expresa alegría.', dir: 'across', row: 15, col: 10 },
        { id: 'a-35', number: 35, word: 'AMOR', clue: 'Sentimiento romántico.', dir: 'across', row: 17, col: 9 },
        { id: 'a-37', number: 37, word: 'NO', clue: 'Negación básica.', dir: 'across', row: 17, col: 14 },
        { id: 'a-38', number: 38, word: 'FLOR', clue: 'Parte vistosa de una planta.', dir: 'across', row: 19, col: 9 },
        // Verticales
        { id: 'd-1', number: 1, word: 'SER', clue: 'Verbo fundamental del idioma español.', dir: 'down', row: 0, col: 10, phraseOrder: 2 },
        { id: 'd-2', number: 2, word: 'RISITAS', clue: 'Risas suaves o discretas.', dir: 'down', row: 0, col: 13 },
        { id: 'd-4', number: 4, word: 'QUERES', clue: 'Expresión común al preguntar algo en Argentina.', dir: 'down', row: 2, col: 19, phraseOrder: 1 },
        { id: 'd-5', number: 5, word: 'LUCES', clue: 'Fuentes de iluminación artificial o natural.', dir: 'down', row: 3, col: 7 },
        { id: 'd-6', number: 6, word: 'DESTINO', clue: 'Idea de futuro o rumbo de la vida.', dir: 'down', row: 3, col: 23 },
        { id: 'd-7', number: 7, word: 'ROM', clue: 'Tipo de memoria informática.', dir: 'down', row: 4, col: 9 },
        { id: 'd-8', number: 8, word: 'ROSA', clue: 'Flor muy asociada a San Valentín.', dir: 'down', row: 4, col: 11 },
        { id: 'd-9', number: 9, word: 'CANCION', clue: 'Composición musical con letra.', dir: 'down', row: 4, col: 17 },
        { id: 'd-12', number: 12, word: 'ESTRELLA', clue: 'Astro brillante visible en el cielo nocturno.', dir: 'down', row: 5, col: 15 },
        { id: 'd-16', number: 16, word: 'MI', clue: 'Pronombre posesivo de primera persona.', dir: 'down', row: 8, col: 13, phraseOrder: 3 },
        { id: 'd-20', number: 20, word: 'PAN', clue: 'Alimento básico.', dir: 'down', row: 11, col: 5 },
        { id: 'd-21', number: 21, word: 'BESO', clue: 'Muestra de cariño.', dir: 'down', row: 11, col: 7 },
        { id: 'd-22', number: 22, word: 'TU', clue: 'Pronombre posesivo de segunda persona.', dir: 'down', row: 11, col: 10 },
        { id: 'd-23', number: 23, word: 'CAMINAR', clue: 'Acción de desplazarse a pie.', dir: 'down', row: 11, col: 12 },
        { id: 'd-25', number: 25, word: 'PAZ', clue: 'Estado de tranquilidad.', dir: 'down', row: 12, col: 1 },
        { id: 'd-27', number: 27, word: 'LUCIANA', clue: 'Tu bello nombre.', dir: 'down', row: 12, col: 14 },
        { id: 'd-29', number: 29, word: 'DI', clue: 'Forma del verbo "decir" o "dar".', dir: 'down', row: 13, col: 3 },
        { id: 'd-31', number: 31, word: 'ES', clue: 'Forma del verbo "ser".', dir: 'down', row: 14, col: 10 },
        { id: 'd-32', number: 32, word: 'DA', clue: 'Forma del verbo "dar".', dir: 'down', row: 14, col: 16 },
        { id: 'd-34', number: 34, word: 'YA', clue: 'Indica algo ocurriendo.', dir: 'down', row: 16, col: 9 },
        { id: 'd-36', number: 36, word: 'OSO', clue: 'Animal mamífero.', dir: 'down', row: 17, col: 11 }
    ];

    const words = baseWords.map((entry, index) => {
        const normalizedWord = entry.word.trim().toUpperCase();
        const phraseOrder = entry.phraseOrder ?? PHRASE_ORDER[normalizedWord] ?? null;

        return {
            ...entry,
            id: entry.id ?? `fixed-${index}`,
            word: normalizedWord,
            special: entry.special ?? Boolean(phraseOrder),
            phraseOrder
        };
    });

    const phraseWords = ['QUERES', 'SER', 'MI', 'SAN', 'VALENTIN'];

    return {
        grid,
        words,
        phraseWords,
        phraseText: '¿QUERES SER MI SAN VALENTIN?'
    };
}

// Estado del juego
let gameState = {
    currentCell: null,
    currentWord: null,
    grid: [],
    lockedCells: new Set(),
    completedWords: new Set(),
    activeClue: null,
    currentDirection: 'across',
    isCompleting: false
};

// Inicializar el juego
function initGame() {
    createGrid();
    createClues();
    updateProgress();
    setupEventListeners();
}

// Crear la cuadrícula
function createGrid() {
    const crosswordEl = document.getElementById('crossword');
    crosswordEl.innerHTML = '';
    crosswordEl.style.gridTemplateColumns = `repeat(${GRID_SIZE.cols}, ${CELL_SIZE}px)`;
    crosswordEl.style.gridTemplateRows = `repeat(${GRID_SIZE.rows}, ${CELL_SIZE}px)`;
    
    gameState.grid = Array(GRID_SIZE.rows).fill(null).map(() => Array(GRID_SIZE.cols).fill(null));
    
    // Números de palabras
    const wordNumbers = new Map();
    crosswordData.words.forEach(w => {
        const key = `${w.row},${w.col}`;
        if (!wordNumbers.has(key)) {
            wordNumbers.set(key, w.number);
        }
    });
    
    for (let row = 0; row < GRID_SIZE.rows; row++) {
        for (let col = 0; col < GRID_SIZE.cols; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            if (crosswordData.grid[row][col] === 0) {
                cell.classList.add('blocked');
            } else {
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1;
                input.dataset.row = row;
                input.dataset.col = col;
                
                const key = `${row},${col}`;
                if (wordNumbers.has(key)) {
                    const number = document.createElement('span');
                    number.className = 'cell-number';
                    number.textContent = wordNumbers.get(key);
                    cell.appendChild(number);
                }
                
                cell.appendChild(input);
                
                input.addEventListener('input', handleInput);
                input.addEventListener('keydown', handleKeydown);
                input.addEventListener('click', () => selectCell(row, col));
            }
            
            crosswordEl.appendChild(cell);
            gameState.grid[row][col] = cell;
        }
    }
}

// Crear pistas
function createClues() {
    const horizontalClues = document.getElementById('horizontal-clues');
    const verticalClues = document.getElementById('vertical-clues');
    horizontalClues.innerHTML = '';
    verticalClues.innerHTML = '';
    
    const across = crosswordData.words
        .filter(word => word.dir === 'across')
        .sort((a, b) => a.number - b.number);
    const down = crosswordData.words
        .filter(word => word.dir === 'down')
        .sort((a, b) => a.number - b.number);

    const renderClue = (word, container) => {
        const clueEl = document.createElement('div');
        clueEl.className = 'clue';
        clueEl.innerHTML = `<span class="clue-number">${word.number}.</span>${word.clue}`;
        clueEl.addEventListener('click', () => selectWord(word));
        word.clueElement = clueEl;
        container.appendChild(clueEl);
    };

    across.forEach(word => renderClue(word, horizontalClues));
    down.forEach(word => renderClue(word, verticalClues));
}

function getWordsAtCell(row, col) {
    return crosswordData.words.filter(word => {
        if (word.dir === 'across') {
            return word.row === row && col >= word.col && col < word.col + word.word.length;
        }
        return word.col === col && row >= word.row && row < word.row + word.word.length;
    });
}

function getWordCells(word) {
    const cells = [];
    for (let i = 0; i < word.word.length; i++) {
        const row = word.dir === 'across' ? word.row : word.row + i;
        const col = word.dir === 'across' ? word.col + i : word.col;
        cells.push([row, col]);
    }
    return cells;
}

function setActiveClue(word) {
    if (gameState.activeClue) {
        gameState.activeClue.classList.remove('active');
    }
    if (word && word.clueElement) {
        word.clueElement.classList.add('active');
        gameState.activeClue = word.clueElement;
        scrollClueIntoView(word.clueElement);
    }
}

function scrollClueIntoView(clueElement) {
    if (!clueElement || typeof clueElement.scrollIntoView !== 'function') {
        return;
    }
    clueElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Seleccionar celda
function selectCell(row, col) {
    document.querySelectorAll('.cell.selected').forEach(c => c.classList.remove('selected'));
    
    const cell = gameState.grid[row][col];
    if (!cell.classList.contains('blocked')) {
        const wasSameCell = gameState.currentCell && gameState.currentCell.row === row && gameState.currentCell.col === col;
        gameState.currentCell = { row, col };
        const wordsHere = getWordsAtCell(row, col);

        let preferred = null;
        if (wordsHere.length > 1 && wasSameCell) {
            const alternate = wordsHere.find(w => !gameState.currentWord || w.dir !== gameState.currentWord.dir);
            preferred = alternate || wordsHere[0];
        } else {
            preferred = wordsHere.find(w => w.dir === gameState.currentDirection) || wordsHere[0];
        }
        if (preferred) {
            highlightWord(preferred);
            setActiveClue(preferred);
        } else {
            cell.classList.add('selected');
        }
        
        const input = cell.querySelector('input');
        if (input && !input.disabled) {
            input.focus();
            input.select();
        }
    }
}

// Seleccionar palabra
function selectWord(word) {
    gameState.currentDirection = word.dir;
    setActiveClue(word);

    const target = getWordCells(word).find(([row, col]) => {
        const input = gameState.grid[row][col].querySelector('input');
        return input && !input.disabled && !input.value;
    }) || [word.row, word.col];

    selectCell(target[0], target[1]);
}

// Resaltar palabra
function highlightWord(word) {
    if (!word) return;
    const cells = getWordCells(word);
    cells.forEach(([row, col]) => {
        gameState.grid[row][col].classList.add('selected');
    });
    gameState.currentWord = word;
    gameState.currentDirection = word.dir;
}

// Manejar entrada
function handleInput(e) {
    const input = e.target;
    const value = input.value.toUpperCase();
    
    if (value.match(/[A-ZÑ]/)) {
        input.value = value;
        moveToNextCell(parseInt(input.dataset.row), parseInt(input.dataset.col));
    } else {
        input.value = '';
    }
    
    updateProgress();
    checkVictory();
}

// Manejar teclado
function handleKeydown(e) {
    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);
    
    if (e.key === 'Backspace' && !e.target.value) {
        moveToPrevCell(row, col);
    } else if (e.key === 'ArrowRight') {
        gameState.currentDirection = 'across';
        moveToNextCell(row, col, true);
    } else if (e.key === 'ArrowLeft') {
        gameState.currentDirection = 'across';
        moveToPrevCell(row, col, true);
    } else if (e.key === 'ArrowDown') {
        gameState.currentDirection = 'down';
        if (row < GRID_SIZE.rows - 1) selectCell(row + 1, col);
    } else if (e.key === 'ArrowUp') {
        gameState.currentDirection = 'down';
        if (row > 0) selectCell(row - 1, col);
    }
}

// Moverse a siguiente celda
function moveToNextCell(row, col, force = false) {
    if (gameState.currentWord) {
        const cells = getWordCells(gameState.currentWord);
        const currentIndex = cells.findIndex(([r, c]) => r === row && c === col);
        for (let i = currentIndex + 1; i < cells.length; i++) {
            const [nextRow, nextCol] = cells[i];
            const nextInput = gameState.grid[nextRow][nextCol].querySelector('input');
            if (nextInput && !nextInput.disabled) {
                selectCell(nextRow, nextCol);
                return;
            }
        }
    }
    
    if (force) {
        let nextCol = col + 1;
        while (nextCol < GRID_SIZE.cols) {
            const targetCell = gameState.grid[row][nextCol];
            if (!targetCell.classList.contains('blocked')) {
                const targetInput = targetCell.querySelector('input');
                if (targetInput && !targetInput.disabled) {
                    selectCell(row, nextCol);
                    break;
                }
            }
            nextCol++;
        }
    }
}

// Moverse a celda anterior
function moveToPrevCell(row, col, force = false) {
    if (gameState.currentWord) {
        const cells = getWordCells(gameState.currentWord);
        const currentIndex = cells.findIndex(([r, c]) => r === row && c === col);
        for (let i = currentIndex - 1; i >= 0; i--) {
            const [prevRow, prevCol] = cells[i];
            const prevInput = gameState.grid[prevRow][prevCol].querySelector('input');
            if (prevInput && !prevInput.disabled) {
                selectCell(prevRow, prevCol);
                return;
            }
        }
    }
    
    if (force) {
        let prevCol = col - 1;
        while (prevCol >= 0) {
            const targetCell = gameState.grid[row][prevCol];
            if (!targetCell.classList.contains('blocked')) {
                const targetInput = targetCell.querySelector('input');
                if (targetInput && !targetInput.disabled) {
                    selectCell(row, prevCol);
                    break;
                }
            }
            prevCol--;
        }
    }
}

// Verificar letra
function verifyLetter() {
    if (!gameState.currentCell) {
        alert('Selecciona una celda primero');
        return;
    }
    
    const { row, col } = gameState.currentCell;
    const cell = gameState.grid[row][col];
    const input = cell.querySelector('input');
    
    if (!input || !input.value) {
        alert('La celda está vacía');
        return;
    }
    
    const correctLetter = getCorrectLetter(row, col);
    
    if (input.value.toUpperCase() === correctLetter) {
        cell.classList.add('correct');
        cell.classList.remove('incorrect');
        gameState.lockedCells.add(`${row},${col}`);
        cell.classList.add('locked');
        input.disabled = true;
        checkVictory();
    } else {
        cell.classList.add('incorrect');
        setTimeout(() => cell.classList.remove('incorrect'), 1000);
    }
}

// Verificar palabra
function verifyWord() {
    if (!gameState.currentWord) {
        alert('Selecciona una palabra primero');
        return;
    }
    
    const word = gameState.currentWord;
    let allCorrect = true;
    
    for (let i = 0; i < word.word.length; i++) {
        const [row, col] = word.dir === 'across'
            ? [word.row, word.col + i]
            : [word.row + i, word.col];
        
        const cell = gameState.grid[row][col];
        const input = cell.querySelector('input');
        
        if (!input || input.value.toUpperCase() !== word.word[i]) {
            allCorrect = false;
            cell.classList.add('incorrect');
            setTimeout(() => cell.classList.remove('incorrect'), 1000);
        }
    }
    
    if (allCorrect) {
        for (let i = 0; i < word.word.length; i++) {
            const [row, col] = word.dir === 'across'
                ? [word.row, word.col + i]
                : [word.row + i, word.col];
            
            const cell = gameState.grid[row][col];
            const input = cell.querySelector('input');
            
            cell.classList.add('correct');
            cell.classList.add('locked');
            gameState.lockedCells.add(`${row},${col}`);
            input.disabled = true;
        }
        
        gameState.completedWords.add(word.id);
        checkVictory();
    }
}

// Revelar letra
function revealLetter() {
    if (!gameState.currentCell) {
        alert('Selecciona una celda primero');
        return;
    }
    
    const { row, col } = gameState.currentCell;
    const cell = gameState.grid[row][col];
    const input = cell.querySelector('input');
    
    if (input) {
        const correctLetter = getCorrectLetter(row, col);
        input.value = correctLetter;
        cell.classList.add('correct');
        cell.classList.add('locked');
        gameState.lockedCells.add(`${row},${col}`);
        input.disabled = true;
        
        updateProgress();
        checkVictory();
    }
}

function fillAllButOne() {
    if (!gameState.grid.length) {
        return;
    }

    clearSpecialHighlights();
    gameState.isCompleting = false;

    const fillableCells = [];
    for (let row = 0; row < GRID_SIZE.rows; row++) {
        for (let col = 0; col < GRID_SIZE.cols; col++) {
            if (!gameState.grid[row][col].classList.contains('blocked')) {
                fillableCells.push({ row, col });
            }
        }
    }

    if (!fillableCells.length) {
        return;
    }

    const targetCell = fillableCells.find(({ row, col }) => {
        const input = gameState.grid[row][col].querySelector('input');
        return input && !input.disabled;
    }) || fillableCells[fillableCells.length - 1];

    gameState.lockedCells.clear();
    gameState.completedWords.clear();

    fillableCells.forEach(({ row, col }) => {
        const cell = gameState.grid[row][col];
        const input = cell.querySelector('input');
        if (!input) return;

        const key = `${row},${col}`;
        if (row === targetCell.row && col === targetCell.col) {
            input.disabled = false;
            input.value = '';
            cell.classList.remove('correct', 'locked', 'incorrect');
            gameState.lockedCells.delete(key);
        } else {
            const correctLetter = getCorrectLetter(row, col);
            input.value = correctLetter;
            input.disabled = true;
            cell.classList.remove('incorrect');
            cell.classList.add('correct', 'locked');
            gameState.lockedCells.add(key);
        }
    });

    selectCell(targetCell.row, targetCell.col);
    updateProgress();
}

function highlightPhraseWords() {
    clearSpecialHighlights();
    const specials = crosswordData.words.filter(word => word.special);
    specials.forEach(word => {
        getWordCells(word).forEach(([row, col]) => {
            const cell = gameState.grid[row][col];
            if (cell) {
                cell.classList.add('special-highlight');
            }
        });
    });
}

function clearSpecialHighlights() {
    document.querySelectorAll('.cell.special-highlight').forEach(cell => {
        cell.classList.remove('special-highlight');
    });
}

function runCompletionSequence() {
    if (gameState.isCompleting) return;
    gameState.isCompleting = true;
    highlightPhraseWords();
    setTimeout(() => {
        gameState.isCompleting = false;
        showVictoryModal();
    }, 2500);
}

// Obtener letra correcta
function getCorrectLetter(row, col) {
    for (const word of crosswordData.words) {
        if (word.dir === 'across' && word.row === row && col >= word.col && col < word.col + word.word.length) {
            return word.word[col - word.col];
        }
        if (word.dir === 'down' && word.col === col && row >= word.row && row < word.row + word.word.length) {
            return word.word[row - word.row];
        }
    }
    return '';
}

// Actualizar progreso
function updateProgress() {
    let filled = 0;
    let total = 0;
    
    for (let row = 0; row < GRID_SIZE.rows; row++) {
        for (let col = 0; col < GRID_SIZE.cols; col++) {
            const cell = gameState.grid[row][col];
            if (!cell.classList.contains('blocked')) {
                total++;
                const input = cell.querySelector('input');
                if (input && input.value) filled++;
            }
        }
    }
    
    const progressEl = document.getElementById('progress');
    if (progressEl) {
        const progress = Math.round((filled / total) * 100);
        progressEl.textContent = `${progress}%`;
    }
}

// Verificar victoria
function checkVictory() {
    let allCorrect = true;
    
    for (let row = 0; row < GRID_SIZE.rows; row++) {
        for (let col = 0; col < GRID_SIZE.cols; col++) {
            const cell = gameState.grid[row][col];
            if (!cell.classList.contains('blocked')) {
                const input = cell.querySelector('input');
                const correctLetter = getCorrectLetter(row, col);
                
                if (!input || input.value.toUpperCase() !== correctLetter) {
                    allCorrect = false;
                    break;
                }
            }
        }
        if (!allCorrect) break;
    }
    
    if (allCorrect) {
        runCompletionSequence();
    }
}

// Mostrar modal de victoria
function showVictoryModal() {
    const modal = document.getElementById('victory-modal');
    const messageEl = document.getElementById('special-message');
    
    if (messageEl) {
        messageEl.textContent = 'Luchi, ¿Queres ser mi San Valentín?';
    }

    modal.classList.add('visible');
}

// Event listeners
function setupEventListeners() {
    document.getElementById('verify-letter').addEventListener('click', verifyLetter);
    document.getElementById('verify-word').addEventListener('click', verifyWord);
    document.getElementById('reveal-letter').addEventListener('click', revealLetter);
}

// Iniciar al cargar
window.addEventListener('DOMContentLoaded', initGame);
