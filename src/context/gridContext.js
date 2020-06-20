import React, {useState, createContext} from 'react';

export const GridContext = createContext();

export const GridProvider = props => {
    // set columns and rows
    const [rows, setRows] = useState(25);
    const [columns, setColumns] = useState(25);
    const [cellSize] = useState(15);
    const gridWidth = rows * cellSize  

    const combinedValues = {
        rows,
        setRows,
        columns,
        setColumns,
        cellSize,
        gridWidth
    }

    return (
        <GridContext.Provider value={combinedValues}>
            {props.children}
        </GridContext.Provider>
    )
}
