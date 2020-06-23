import React, { useState, createContext, useEffect } from 'react';
import Cell from '../components/cell';

export const GridContext = createContext();

export const GridProvider = props => {
    // set columns and rows
    const [rows, setRows] = useState(25);
    const [columns, setColumns] = useState(25);
    const [cellSize] = useState(20);

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
        for (let i = 0; i < rows; i++) {
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

    const cloneReactCell = () => {

        let newGrid = createCells(25)

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                newGrid[row][col] = React.cloneElement(gridState[row][col]);
            }
        }

        console.log(newGrid)
        return newGrid;

    }

    /**
     * updates cell value given row an col
     * @param {int} row 
     * @param {int} col 
     */
    const updateCell = (row, col) => {

        const newGrid = cloneReactCell();
        newGrid[row][col] = <Cell key={`${row},${col}`} value={true} rowNum={row} colNum={col} />;
        setGridState(newGrid)
    };



    /**
     * count the neigbors of the cell of the
     * givex x and y coordinates
     * @param {int} x 
     * @param {int} y 
     */
    const countNeighbors = (x, y) => {
        let count = 0

        // check neighbors, add count if value is true  
        try {
            const NW = gridState[x - 1][y - 1].props.value ? count++ : false;
            // console.log(`row:${x} col:${y} `,gridState[x - 1][y - 1])
        } catch (e) {
            // console.log('cell undefined')
        }

        try {
            const N = gridState[x][y - 1].props.value ? count++ : false;
            // console.log(`row:${x} col:${y} `,gridState[x ][y - 1])
        } catch (e) {
            // console.log('cell undefined')
        }

        try {
            const NE = gridState[x + 1][y - 1].props.value ? count++ : false;
            // console.log(`row:${x} col:${y} `,gridState[x + 1][y + 1])

        } catch (e) {
            // console.log('cell undefined')
        }

        try {
            const E = gridState[x + 1][y].props.value ? count++ : false;
            // console.log(`row:${x} col:${y} `,gridState[x + 1][y])
        } catch (e) {
            // console.log('cell undefined')
        }

        try {
            const SE = gridState[x + 1][y + 1].props.value ? count++ : false;
            // console.log(`row:${x} col:${y} `,gridState[x + 1][y + 1])

        } catch (e) {
            // console.log('cell undefined')
        }

        try {
            const S = gridState[x][y + 1].props.value ? count++ : false;
            // console.log(`row:${x} col:${y} `,gridState[x][y + 1])

        } catch (e) {
            // console.log('cell undefined')
        }

        try {
            const SW = gridState[x - 1][y + 1].props.value ? count++ : false;
            // console.log(`row:${x} col:${y} `,gridState[x - 1][y + 1])

        } catch (e) {
            // console.log('cell undefined')
        }

        try {
            const W = gridState[x - 1][y].props.value ? count++ : false;
            // console.log(`row:${x} col:${y} `,gridState[x - 1][y])

        } catch (e) {
            // console.log('cell undefined')
        }



        return count;
    }

    /**
     * apply games rules and update  
     * @param {arr} arr2D 
     */
    const updateGrid = () => {
        let newGrid = cloneReactCell();

        // iterate through
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                console.log(row,col,countNeighbors(row, col))
                if (countNeighbors(row, col) >= 3) {
                    newGrid[row][col] = <Cell key={`${row},${col}`} value={true} rowNum={row} colNum={col} />
                    setGridState(newGrid)
                } else {
                    newGrid[row][col] = <Cell key={`${row},${col}`} value={false} rowNum={row} colNum={col} />
                    setGridState(newGrid)
                };

            };
        };



        // console.log(gridState)

    };

    // if(gridState.length !== 0){
    //     updateGrid()
    // };

    // useEffect(() => {
    //     setGridState(initGrid(createCells(25)))

    // }, [gridState])

    // combine state and functions for easy read
    const [gridState, setGridState] = useState(initGrid(createCells(25)));

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
        updateCell,
        countNeighbors,
        updateGrid
    };

    return (
        <GridContext.Provider value={combinedValues}>
            {props.children}
        </GridContext.Provider>
    );
};
