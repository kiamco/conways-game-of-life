import React, {useContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, FormControl,MenuItem, Select, InputLabel } from '@material-ui/core';
import { PlayArrow, RotateLeft,Stop, AddBox, ExposurePlus1 } from '@material-ui/icons';
import { GridContext } from '../context/gridContext';

const useStyles = makeStyles({
    controlsContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0'
    },
    button: {
        margin:'10px'
    },
    speedFrom: {
        minWidth: '100px'
    }
});

const Controls = () => {

    const gridProps = useContext(GridContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(1000);

    /**
     * reset grid
     */
    const reset = () => {
        // write reset logic
        gridProps.setGridState(
            gridProps.initGrid(
                gridProps.createCells(gridProps.rows)
            )
        );
    };

    /**
     * starts games
     */
    const start = () => {
        // write start logic
        setIsPlaying(true);
        gridProps.setRunning(true);

    };
    
    /**
     * Stops game
     */
    const stop = () => {
        setIsPlaying(false);
        gridProps.setRunning(false);
    };

    /**
     * inserts random cel values
     */
    const random = () => {
        const randomGrid = gridProps.initRandomGrid(
            gridProps.createCells(
                gridProps.rows
                )
            );
        gridProps.setGridState(randomGrid);
    };

    /**
     * moves 1 step
     */
    const step = () => {
        gridProps.updateGrid();
    };

    const speedChangeHandler = (e) => {
        console.log(e.target.value)
        setSpeed(e.target.value);
    };


    const classes = useStyles();

    useEffect(() => {
        while(isPlaying){
            const timeout = setTimeout(() => {
                gridProps.updateGrid();
            }, speed);
            return () => clearTimeout(timeout);

        };
    },[gridProps.updateGrid, gridProps.updateCell, isPlaying,gridProps.isRand, gridProps.running])

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
                <Button className={classes.button} onClick={random}>
                    Randomize 
                    <AddBox />
                </Button>
                <Button onClick={step}>
                    Step
                    <ExposurePlus1 />
                </Button>
                <FormControl variant="outlined" className={classes.speedFrom} >
                    <InputLabel id="demo-simple-select-filled-label">Speed</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={speed}
                        onChange={speedChangeHandler}
                        label='speed'
                    >
                        <MenuItem value={1000}>1 sec</MenuItem>
                        <MenuItem value={500}>.5 sec</MenuItem>
                        <MenuItem value={100}>.1 sec</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>

    );
};

export default Controls;
