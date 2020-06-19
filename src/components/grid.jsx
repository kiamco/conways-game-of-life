import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GridContext } from '../context/gridContext';
import Cell from '../components/cell';


const useStyles = makeStyles({
    grid: {
        width: gridProps => `${gridProps.gridWidth}px`
    }
});

const Grid = () => {

    const gridProps = useContext(GridContext);
    const classes = useStyles(gridProps);


    const renderCells = () => {
        let boxes = "";
        let rowsArr = []

        for (let i = 0; i < gridProps.rows; i ++){
            rowsArr.push(<Cell />)
        }

        return rowsArr
    }

    return (
        <Box className={classes.grid}>
           {renderCells().map(el => el)}
        </Box>
    );
};

export default Grid;