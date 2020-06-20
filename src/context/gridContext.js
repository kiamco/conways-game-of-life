import React, {useState, createContext} from 'react';
import Cell from '../components/cell';

export const GridContext = createContext();

export const GridProvider = props => {
    // set columns and rows
    const [rows, setRows] = useState(25);
    const [columns, setColumns] = useState(25);
    const [cellSize] = useState(15);
    const [gridState, setGridState] = useState([]);

    /**
     * gets the grid by getting the pro of row and cellSize
     */
    const getGridWidth = () => {
        return rows * cellSize;
    };

      /**
     * this creates a two dimensinoal array given array size 
     * @param {int} numRows 
     */
    const createCells = (numRows) => {
        let arr = [];

        // create 2 dimensional array
        for(let i = 0; i < rows; i++){
            arr[i] = [];
        };

        return arr;
    };

    /**
     * fills a 2d array with false boolean values
     * @param {array} arr2D 
     */
    const initGrid = (arr2D) => {

        // assing temp value for immutability
        const filledArray = arr2D;

        // iterate 2D array and fill false value
        for (let col = 0; col < columns; col++) {
            for (let row = 0; row < rows; row++) {
                // for each position add a cell
                filledArray[row][col] = <Cell key={`${row},${col}`} value={false} colNum={col} rowNum={row} />;
            };
        };
    
        return filledArray;
        
    };

    /**
     * updates cell value given row an col
     * @param {int} row 
     * @param {int} col 
     */
    const updateCell = (row, col) => {
        gridState[row][col] =  <Cell key={`${row},${col}`} value={true} rowNum={row} colNum={col} />;
    };

    /**
     * apply games rules and update  
     * @param {arr} arr2D 
     */
    const updateGrid = (arr2D) => {
        let newGrid = [];

        // get neig


    };

    // combine state and functions for easy read
    const combinedValues = {
        rows,
        setRows,
        columns,
        setColumns,
        cellSize,
        getGridWidth,
        createCells,
        initGrid,
        gridState,
        setGridState,
        updateCell
    };

    return (
        <GridContext.Provider value={combinedValues}>
            {props.children}
        </GridContext.Provider>
    );
};
