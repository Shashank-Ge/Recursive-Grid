import React from 'react';
import { Grid as GridType } from '../engine/gridEngine';
import { Cell } from './Cell';

interface GridProps {
    grid: GridType;
    onCellClick: (row: number, col: number) => void;
}

export function Grid({ grid, onCellClick }: GridProps) {
    return (
        <div className="inline-block p-6 sm:p-8 md:p-10 bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-pink-500/30 backdrop-blur-md rounded-[20px] sm:rounded-[24px] border-2 border-purple-400/50 hover:border-purple-300/70 transition-all duration-300 float-animation" style={{
            boxShadow: '0 0 80px rgba(168, 85, 247, 0.6), 0 0 120px rgba(168, 85, 247, 0.4), 0 0 160px rgba(168, 85, 247, 0.2), 0 20px 40px rgba(0, 0, 0, 0.3)'
        }}>
            {/* Map over rows */}
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-2 sm:gap-[10px] mb-2 sm:mb-[10px] last:mb-0">
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