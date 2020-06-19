import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
import { PlayArrow, RotateLeft } from '@material-ui/icons';

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

    const reset = () => {
        // write reset logic

    }

    const start = () => {
        // write start logic
    }

    const classes = useStyles();

    return (
        <Box className={classes.controlsContainer}>
            <Box >
                <Button className={classes.button}>
                    Reset
            <RotateLeft />
                </Button>
                <Button>
                    Start
            <PlayArrow />
                </Button>
            </Box>
        </Box>

    );
};

export default Controls;
