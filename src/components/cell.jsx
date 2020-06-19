import React, {useContext} from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { GridContext } from '../context/gridContext';

const useStyles = makeStyles({
    cellSize: {
        width: gridProps => `${gridProps.cellSize}px`
    }
});

const Cell = () => {
    const gridProps = useContext(GridContext);
    const classes = useStyles(gridProps);

    return(
        <Box className={classes.cellSize} >
            hi
        </Box>
    );
};

export default Cell;