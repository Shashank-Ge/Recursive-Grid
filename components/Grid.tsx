import React from 'react';
import { Grid as GridType } from '../engine/gridEngine';
import { Cell } from './Cell';

interface GridProps {
    grid: GridType;
    onCellClick: (row: number, col: number) => void;
}

export function Grid({ grid, onCellClick }: GridProps) {
    return (
        <div className="inline-block p-8 bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-pink-500/30 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-purple-400/50 hover:border-purple-300/70 transition-all duration-300">
            {/* Map over rows */}
            {grid.map((row, rowIndex) => (
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