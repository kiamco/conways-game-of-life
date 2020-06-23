import React, {useContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
import { PlayArrow, RotateLeft,Stop } from '@material-ui/icons';
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
    const [isPlaying, setIsPlaying] = useState(false);

    const reset = () => {
        // write reset logic
        gridProps.setGridState(
            gridProps.initGrid(
                gridProps.createCells(gridProps.rows)
            )
        );

    };

    const start = () => {
        // write start logic
        setIsPlaying(true);
        console.log(isPlaying)

    };
    
    const stop = () => {
        setIsPlaying(false);
    };

    const classes = useStyles();

    useEffect(() => {
        while(isPlaying){
            const timeout = setTimeout(() => {
                console.log('running')
                gridProps.updateGrid()
            }, 100)   
            return () => clearTimeout(timeout);

        };
    },[gridProps.updateGrid, gridProps.updateCell, isPlaying])

    return (
        <Box className={classes.controlsContainer}>
            <Box >
                <Button className={classes.button} onClick={reset}>
                    Reset
                    <RotateLeft />
                </Button>
                <Button className={classes.button} onClick={start}>
                    Start
                    <PlayArrow />
                </Button>
                <Button className={classes.button} onClick={stop}>
                    Stop
                    <Stop />
                </Button>
            </Box>
        </Box>

    );
};

export default Controls;
