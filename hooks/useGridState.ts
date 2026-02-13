import { useState, useCallback } from 'react';
import { createInitialGrid, handleCellClick, type Grid } from '../engine/gridEngine';

export function useGridState() {
    const [grid, setGrid] = useState<Grid>(createInitialGrid);

    // using callback - memoizes function (optimization)
    const onCellClick = useCallback((row: number, col: number) => {
        setGrid((currentGrid: Grid) => {
            return handleCellClick(currentGrid, row, col);
        });
    }, []);

    return { grid, onCellClick };
}
