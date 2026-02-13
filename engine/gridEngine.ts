// Cell represents one square in the grid

export interface Cell {
    value : number ,
    locked : boolean
}

// Grid is a 2D array of cells
export type Grid = Cell[][]


// CREATING AN EMPTY 3 X 3 GRID

export const GRID_SIZE = 3 ;

export function createInitialGrid () : Grid {
    //array of 3 elements, each mapped to a row
    return Array(GRID_SIZE)
    .fill(null)
    .map( () =>  // mapping a column to each row
        Array(GRID_SIZE)
        .fill(null)
        .map( () => ({ value : 0 , locked : false }) // mapping an empty cell to each column
));
}




// MAIN FUNCTION THAT HANDLES THE CLICK ON CELL

export function handleCellClick (
    grid : Grid ,
    row : number ,
    col : number
) : Grid {
    // Rule 1 : can't click locked cells
    if (grid[row][col].locked) {
        // returning unchanged grid
        return grid ;
    }

    //creating a deep copy to change nested objects
    const newGrid = grid.map(rowArray =>
        rowArray.map(cell => ({...cell}))
    )

    // Rule 2 : increment clicked cell by 1
    newGrid[row][col].value += 1 ;
    const newValue = newGrid[row][col].value;

    //Rule 3 : Divisible by 3 -> righ column cell decrease by 1
    if (newValue % 3 == 0 ) {
        const rightCol = col + 1 ;
        if ( rightCol < GRID_SIZE && !newGrid[row][rightCol].locked) {
            newGrid[row][rightCol].value -= 1 ;
        }
    }

    //Rule 4 : Divisible by 5 -> bottom row cell increase by 2
    if (newValue % 5 == 0 ) {
        const bottomRow = row + 1 ;
        if (bottomRow < GRID_SIZE && !newGrid[bottomRow][col].locked) {
            newGrid[bottomRow][col].value += 2;
        }
    }

    //Rule 5 : lock cell if value >= 15
    if (newValue >= 15) {
        newGrid[row][col].locked = true ;
    }

    return newGrid ;
}




// FUNCTION TO GET THE COLOR OF THE CELL

export function getCellColorClass (cell : Cell) : string {
    if (cell.locked){
        return 'bg-red-500' ;
    }

    // returning blue if even, green if odd
    return cell.value % 2 === 0 ? 'bg-blue-500' : 'bg-green-500' ;
}

