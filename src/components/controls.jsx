import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
import { PlayArrow, RotateLeft } from '@material-ui/icons';
import { GridContext } from '../context/gridContext';

const useStyles = makeStyles({
    controlsContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        margin:'10px'
    }
});

const Controls = () => {

    const gridProps = useContext(GridContext);

    const reset = () => {
        // write reset logic

    }

    const start = () => {
        // write start logic
        gridProps.updateGrid()
    }

    const classes = useStyles();

    useEffect(() => {

    },[gridProps.updateGrid, gridProps.updateCell])

    return (
        <Box className={classes.controlsContainer}>
            <Box >
                <Button className={classes.button}>
                    Reset
            <RotateLeft />
                </Button>
                <Button onClick={start}>
                    Start
            <PlayArrow />
                </Button>
            </Box>
        </Box>

    );
};

export default Controls;
