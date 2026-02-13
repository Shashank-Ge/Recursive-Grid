import React from 'react';
import { Cell as CellType } from '../engine/gridEngine';
import { getCellBackgroundColor, getCellTextColor } from '../engine/gridEngine';

interface CellProps {
    cell: CellType;
    onClick: () => void  // function to call when clicked
}

// Cell Component ( used 9 times in the grid )

export function Cell({ cell, onClick }: CellProps) {
    // get colors based on cell state
    const backgroundColor = getCellBackgroundColor(cell);
    const textColor = getCellTextColor(cell);

    return (
        <button
            onClick={onClick}
            disabled={cell.locked}
            style={{
                backgroundImage: backgroundColor,
                color: textColor,
                width: '96px',
                height: '96px',
                fontSize: '24px',
                fontWeight: 'bold',
                borderRadius: '4px',
                boxShadow: '2px 2px 0px black, inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                border: 'none',
                cursor: cell.locked ? 'not-allowed' : 'pointer',
                opacity: cell.locked ? 0.75 : 1,
                transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
                if (!cell.locked) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '3px 3px 0px black, inset 0 1px 3px rgba(255, 255, 255, 0.4)';
                }
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '2px 2px 0px black, inset 0 1px 2px rgba(255, 255, 255, 0.3)';
            }}
            onMouseDown={(e) => {
                if (!cell.locked) {
                    e.currentTarget.style.transform = 'scale(0.95)';
                    e.currentTarget.style.boxShadow = '1px 1px 0px black, inset 0 2px 4px rgba(0, 0, 0, 0.2)';
                }
            }}
            onMouseUp={(e) => {
                if (!cell.locked) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '3px 3px 0px black, inset 0 1px 3px rgba(255, 255, 255, 0.4)';
                }
            }}
        >
            {cell.value}
        </button>
    );
}