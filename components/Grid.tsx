import React from 'react' ;
import { Grid as GridType } from '../engine/gridEngine';
import { Cell } from './Cell';

interface GridProps {
    grid: GridType;
    onCellClick: (row: number, col: number) => void;
}

export function Grid ({grid, onCellClick} : GridProps) {
    return (
        <div className="inline-block p-8 bg-gray-800 rounded-x1 shadow-2x1">
            {/* Map over rows */}
            {grid.map ((row,rowIndex) => (
                <div key={rowIndex} className="flex gap-2 mb-2 last:mb-0">
                    {/* Map over columns */}
                    {row.map((cell, colIndex) => (
                        <Cell
                        key={`${rowIndex}-${colIndex}`}
                        cell={cell}
                        onClick={() => onCellClick(rowIndex, colIndex)}
                    />
                    ))}
                </div>
            ))}
        </div>
    );
}