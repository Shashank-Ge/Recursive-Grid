// Cell represents one square in the grid

export interface Cell {
    value: number,
    locked: boolean
}

// Grid is a 2D array of cells
export type Grid = Cell[][]


// CREATING AN EMPTY 3 X 3 GRID

export const GRID_SIZE = 3;

export function createInitialGrid(): Grid {
    //array of 3 elements, each mapped to a row
    return Array(GRID_SIZE)
        .fill(null)
        .map(() =>  // mapping a column to each row
            Array(GRID_SIZE)
                .fill(null)
                .map(() => ({ value: 0, locked: false }) // mapping an empty cell to each column
                ));
}




// MAIN FUNCTION THAT HANDLES THE CLICK ON CELL

export function handleCellClick(
    grid: Grid,
    row: number,
    col: number
): Grid {
    // Rule 1 : can't click locked cells
    if (grid[row][col].locked) {
        // returning unchanged grid
        return grid;
    }

    //creating a deep copy to change nested objects
    const newGrid = grid.map(rowArray =>
        rowArray.map(cell => ({ ...cell }))
    )

    // Rule 2 : increment clicked cell by 1
    newGrid[row][col].value += 1;
    const newValue = newGrid[row][col].value;

    //Rule 3 : Divisible by 3 -> righ column cell decrease by 1
    if (newValue % 3 == 0) {
        const rightCol = col + 1;
        if (rightCol < GRID_SIZE && !newGrid[row][rightCol].locked) {
            newGrid[row][rightCol].value = Math.max(0, newGrid[row][rightCol].value - 1);
        }
    }

    //Rule 4 : Divisible by 5 -> bottom row cell increase by 2
    if (newValue % 5 == 0) {
        const bottomRow = row + 1;
        if (bottomRow < GRID_SIZE && !newGrid[bottomRow][col].locked) {
            newGrid[bottomRow][col].value += 2;
        }
    }

    //Rule 5 : lock cell if value >= 15
    if (newValue >= 15) {
        newGrid[row][col].locked = true;
    }

    return newGrid;
}




// FUNCTION TO GET THE BACKGROUND COLOR/GRADIENT OF THE CELL

export function getCellBackgroundColor(cell: Cell): string {
    if (cell.locked) {
        return 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'; // red gradient for locked
    }

    // Light Gray gradient for even, Navy Blue gradient for odd
    return cell.value % 2 === 0
        ? 'linear-gradient(135deg, #f5f5f5 0%, #d4d4d4 100%)' // subtle gray gradient
        : 'linear-gradient(135deg, #1e3a8a 0%, #1a237e 100%)'; // navy blue gradient
}

// FUNCTION TO GET THE TEXT COLOR OF THE CELL
export function getCellTextColor(cell: Cell): string {
    if (cell.locked) {
        return '#ffffff'; // white for locked
    }

    // Black for even (light gray bg), White for odd (navy blue bg)
    return cell.value % 2 === 0 ? '#1f2937' : '#ffffff';
}

