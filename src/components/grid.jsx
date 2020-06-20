import React, { useContext } from 'react';
import { Box, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GridContext } from '../context/gridContext';
import Cell from '../components/cell';



const useStyles = makeStyles({
    grid: {
        width: gridProps => `${gridProps.gridWidth}px`,
        height: gridProps => `${gridProps.gridWidth}px`,
        display: 'grid',
        gridTemplateColumns: gridProps =>  `repeat(${gridProps.columns}, 1fr)`
    },
    wrapper: {
        display: 'flex',
        justifyContent:'center'
    }
});

const Grid = () => {

    const gridProps = useContext(GridContext);
    const classes = useStyles(gridProps);

    /**
     * this creates a two dimensinoal array given array size 
     * @param {int} numRows 
     */
    const createCells = (numRows) => {
        let arr = [];

        // create 2 dimensional array
        for(let i = 0; i < gridProps.rows; i++){
            arr[i] = [];
        };

        return arr;
    };

    /**
     * fills a 2d array with false boolean values
     * @param {array} arr2D 
     */
    const initCellValue = (arr2D) => {

        // assing temp value for immutability
        const filledArray = arr2D;

        // iterate 2D array and fill false value
        for (let col = 0; col < gridProps.columns; col++) {
            for (let row = 0; row < gridProps.rows; row++) {
                // for each position add a cell
                filledArray[row][col] = <Cell key={`${row},${col}`} value={false} colNum={col} rowNum={row} />;
            };
        };

        return filledArray;
        
    };


    const renderCells = () => {
        return initCellValue(createCells(25))
    }

    return (
        <Container className={classes.wrapper}>
        <Box className={classes.grid}>
           {renderCells()}
        </Box>
        </Container>
    );
};

export default Grid;