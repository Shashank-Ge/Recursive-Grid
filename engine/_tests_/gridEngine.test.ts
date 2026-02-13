import {
    createInitialGrid,
    handleCellClick,
    getCellBackgroundColor,
    getCellTextColor,
    GRID_SIZE,
    type Cell,
    type Grid,
} from '../gridEngine';

// describe : groups related Tests
describe('gridEngine', () => {


    //Test 1 : Initial Grid creation
    describe('createInitialGrid', () => {
        it('should create a 3x3 grid', () => {
            const grid = createInitialGrid();

            // check grid has 3 rows
            expect(grid).toHaveLength(GRID_SIZE);

            // check each row has 3 columns
            grid.forEach(row => {
                expect(row).toHaveLength(GRID_SIZE);
            });
        });

        it('should initialize all cels with value 0 and unlocked', () => {
            const grid = createInitialGrid();

            //check every cell
            grid.forEach(row => {
                row.forEach(cell => {
                    expect(cell.value).toBe(0);
                    expect(cell.locked).toBe(false);
                });
            });
        });
    });


    // Test 2 : Cell click behavior
    describe('handleCellClick', () => {
        let grid: Grid;

        //beforeEach : Runs before each test (fresh grid )
        beforeEach(() => {
            grid = createInitialGrid();
        })

        it('should increment cell value by 1', () => {
            const newGrid = handleCellClick(grid, 0, 0);

            expect(newGrid[0][0].value).toBe(1);
        })

        it('should not modify lcoked cells', () => {
            grid[0][0].locked = true;
            grid[0][0].value = 15;

            const newGrid = handleCellClick(grid, 0, 0);

            expect(newGrid[0][0].value).toBe(15);

        });

        it('should decrement right neighbor when divisible by 3', () => {
            // Set cell to 2 (clicking makes it 3)
            grid[0][0].value = 2;

            const newGrid = handleCellClick(grid, 0, 0);

            expect(newGrid[0][0].value).toBe(3);      // Clicked cell
            expect(newGrid[0][1].value).toBe(0);      // Right neighbor (clamped to 0, not -1)
        });


        it('should increment bottom neighbor when divisible by 5', () => {
            grid[0][0].value = 4;  // Clicking makes it 5

            const newGrid = handleCellClick(grid, 0, 0);

            expect(newGrid[0][0].value).toBe(5);   // Clicked cell
            expect(newGrid[1][0].value).toBe(2);   // Bottom neighbor (incremented by 2)
        });

        it('should lock cell when value reaches 15', () => {
            grid[0][0].value = 14;  // Clicking makes it 15

            const newGrid = handleCellClick(grid, 0, 0);

            expect(newGrid[0][0].value).toBe(15);
            expect(newGrid[0][0].locked).toBe(true);
        });

        it('should not affect neighbors at grid edges', () => {
            // Bottom-right corner (no right or bottom neighbor)
            grid[2][2].value = 4;

            const newGrid = handleCellClick(grid, 2, 2);

            // Should not crash, just increment
            expect(newGrid[2][2].value).toBe(5);
        });

        it('should maintain immutability', () => {
            const originalGrid = createInitialGrid();
            const newGrid = handleCellClick(originalGrid, 0, 0);

            // Original should be unchanged
            expect(originalGrid[0][0].value).toBe(0);
            // New grid should be different
            expect(newGrid[0][0].value).toBe(1);
            // Should be different objects
            expect(newGrid).not.toBe(originalGrid);
        });
    });

    describe('getCellBackgroundColor', () => {
        it('should return red gradient for locked cells', () => {
            const cell: Cell = { value: 15, locked: true };
            expect(getCellBackgroundColor(cell)).toBe('linear-gradient(135deg, #ef4444 0%, #dc2626 100%)');
        });

        it('should return light gray gradient for even unlocked cells', () => {
            const cell: Cell = { value: 4, locked: false };
            expect(getCellBackgroundColor(cell)).toBe('linear-gradient(135deg, #f5f5f5 0%, #d4d4d4 100%)');
        });

        it('should return navy blue gradient for odd unlocked cells', () => {
            const cell: Cell = { value: 3, locked: false };
            expect(getCellBackgroundColor(cell)).toBe('linear-gradient(135deg, #1e3a8a 0%, #1a237e 100%)');
        });
    });

    // Test 4 : Text Color
    describe('getCellTextColor', () => {
        it('should return white for locked cells', () => {
            const cell: Cell = { value: 15, locked: true };
            expect(getCellTextColor(cell)).toBe('#ffffff');
        });

        it('should return dark gray for even unlocked cells', () => {
            const cell: Cell = { value: 4, locked: false };
            expect(getCellTextColor(cell)).toBe('#1f2937');
        });

        it('should return white for odd unlocked cells', () => {
            const cell: Cell = { value: 3, locked: false };
            expect(getCellTextColor(cell)).toBe('#ffffff');
        });
    });
})