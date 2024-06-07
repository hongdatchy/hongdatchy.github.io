document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    let initialGrid = [
        [3, 0, 6, 5, 0, 8, 4, 0, 0],
        [5, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 8, 7, 0, 0, 0, 0, 3, 1],
        [0, 0, 3, 0, 1, 0, 0, 8, 0],
        [9, 0, 0, 8, 6, 3, 0, 0, 5],
        [0, 5, 0, 0, 9, 0, 6, 0, 0],
        [1, 3, 0, 0, 0, 0, 2, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 4],
        [0, 0, 5, 2, 0, 6, 3, 0, 0]
    ];

    const grid = JSON.parse(JSON.stringify(initialGrid)); // Clone mảng để tránh thay đổi trực tiếp

    const easyButton = document.getElementById("easy");
    easyButton.classList.add("btn-resolve")

    const mediumButton = document.getElementById("medium");
    mediumButton.classList.add("btn-resolve")
    const hardButton = document.getElementById("hard");
    hardButton.classList.add("btn-resolve")

    easyButton.addEventListener("click", function() {
        fetchAndUpdateGrid("easy");
    });

    mediumButton.addEventListener("click", function() {
        fetchAndUpdateGrid("medium");
    });

    hardButton.addEventListener("click", function() {
        fetchAndUpdateGrid("hard");
    });

    const checkButton = document.getElementById("resolve");
        checkButton.textContent = "Giải";
        checkButton.classList.add("btn-resolve")
        checkButton.addEventListener("click", function () {
            if (solveSudoku(grid, 0, 0)) {
                console.log("Resolved");
                console.log(grid);
                initialGrid = grid
                render()
            }
            else
                document.write("no solution exists ")
        });


    // Generate Sudoku cells
    function render() {
        board.innerHTML = '';
        for (let i = 0; i < 81; i++) {
            const cell = document.createElement("input");
            cell.type = "text";
            cell.maxLength = 1;
            const value = initialGrid[Math.floor(i / 9)][i % 9];
            cell.value = value === 0 ? '' : value; // Nếu giá trị là 0, ẩn giá trị, ngược lại hiển thị giá trị
            cell.classList.add("cell");
            if (value !== 0) {
                cell.readOnly = true; // Không cho phép nhập nếu giá trị không phải là 0
            }
            cell.addEventListener("input", function () {
                const row = Math.floor(i / 9);
                const col = i % 9;
                const inputValue = parseInt(this.value) || 0;
                if (inputValue === 0) {
                    this.value = ''; // Nếu nhập số 0, làm cho ô trống
                }
                grid[row][col] = inputValue;
            });
            board.appendChild(cell);
        }
    }


    function parseSudokuString(sudokuString) {
        const grid = [];
        let index = 0;
        for (let i = 0; i < 9; i++) {
            const row = [];
            for (let j = 0; j < 9; j++) {
                if (sudokuString[index] === '.') {
                    row.push(0);
                } else {
                    row.push(parseInt(sudokuString[index]));
                }
                index++;
            }
            grid.push(row);
        }
        return grid;
    }
    
    function fetchAndUpdateGrid(difficulty) {
        try {
            initialGrid = parseSudokuString(sudoku.generate(difficulty))
            render()
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render()

    // N is the size of the 2D matrix N*N
    let N = 9;

    /* Takes a partially filled-in grid and attempts
        to assign values to all unassigned locations in
        such a way to meet the requirements for
        Sudoku solution (non-duplication across rows,
        columns, and boxes) */
    function solveSudoku(grid, row, col) {

        /* If we have reached the 8th
        row and 9th column (0
        indexed matrix) ,
        we are returning true to avoid further
        backtracking	 */
        if (row == N - 1 && col == N)
            return true;

        // Check if column value becomes 9 ,
        // we move to next row
        // and column start from 0
        if (col == N) {
            row++;
            col = 0;
        }

        // Check if the current position
        // of the grid already
        // contains value >0, we iterate
        // for next column
        if (grid[row][col] != 0)
            return solveSudoku(grid, row, col + 1);

        for (let num = 1; num < 10; num++) {

            // Check if it is safe to place
            // the num (1-9) in the given 
            // row ,col ->we move to next column
            if (isSafe(grid, row, col, num)) {

                /* assigning the num in the current
                (row,col) position of the grid and
                assuming our assigned num in the position
                is correct */
                grid[row][col] = num;

                // Checking for next
                // possibility with next column
                if (solveSudoku(grid, row, col + 1))
                    return true;
            }

            /* removing the assigned num , since our
            assumption was wrong , and we go for next
            assumption with diff num value */
            grid[row][col] = 0;
        }
        return false;
    }

    /* A utility function to print grid */

    // Check whether it will be legal
    // to assign num to the
    // given row, col
    function isSafe(grid, row, col, num) {

        // Check if we find the same num
        // in the similar row , we
        // return false
        for (let x = 0; x <= 8; x++)
            if (grid[row][x] == num)
                return false;

        // Check if we find the same num
        // in the similar column ,
        // we return false
        for (let x = 0; x <= 8; x++)
            if (grid[x][col] == num)
                return false;

        // Check if we find the same num
        // in the particular 3*3
        // matrix, we return false
        let startRow = row - row % 3,
            startCol = col - col % 3;

        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (grid[i + startRow][j + startCol] == num)
                    return false;

        return true;
    }

});
