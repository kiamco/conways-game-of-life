import React, { useContext, useState, useEffect } from 'react';
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

    // context
    const gridProps = useContext(GridContext);
    const classes = useStyles(gridProps);

    /**
     * renders cells
     * uses gridContext functions to initialize a grid
     */
    const renderCells = () => {
        return gridProps.initGrid(gridProps.createCells(25));
    };

    /**
     * useEffect hook keeps track of change 
     * after componnet is mounted
     */
    useEffect(()=> {
        // gridProps.setGridState(renderCells);
        // if(gridProps.gridState.length !== 0){
        //     console.log(gridProps.countNeighbors(0, 0));
        // };

    }, [gridProps.gridState]);



    return (
        <Container className={classes.wrapper}>
        <Box className={classes.grid}>
           {gridProps.gridState}
        </Box>
        </Container>
    );
};

export default Grid;