import React, { useState, useContext } from 'react';
import { Container, Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Controls from '../components/controls';
import Grid from '../components/grid';

const useStyles = makeStyles({
    bg: {
        minHeight:'100vh',
        display:'flex',
        justifyContent: 'space-evenly',
        // maxWidth:'800px'
    },
    title:{
        display:'flex',
        justifyContent:'center',
        margin:'20px 0',
        textAlign: 'center'
    },
    rulesHeader: {
        display: 'flex',
        margin: '20px 0',
        textAlign: 'left'
    },
    body:{
        margin:'0px 0px 0px 20px'
    },
    left:{
        maxWidth: '500px'
    }
});

const Game = () => {

    const classes = useStyles();
    
    return (
        <Paper className={classes.bg}>
        {/* <Container className={classes.left}>
            <Typography variant='h4' className={classes.rulesHeader}>Rules</Typography>
            <Typography variant='body2' className={classes.body}>
                    The Game of Life (an example of a cellular automaton) is played on an infinite two-dimensional rectangular grid of cells. Each cell can be either alive or dead. The status of each cell changes each turn of the game (also called a generation) depending on the statuses of that cell's 8 neighbors. Neighbors of a cell are cells that touch that cell, either horizontal, vertical, or diagonal from that cell.

                    The initial pattern is the first generation. The second generation evolves from applying the rules simultaneously to every cell on the game board, i.e. births and deaths happen simultaneously. Afterwards, the rules are iteratively applied to create future generations. For each generation of the game, a cell's status in the next generation is determined by a set of rules. These simple rules are as follows:

                    <ul>
                        <li>If the cell is alive, then it stays alive if it has either 2 or 3 live neighbors</li>
                        <li>If the cell is dead, then it springs to life only in the case that it has 3 live neighbors</li>
                    </ul>
            </Typography>
        </Container> */}
        <Container>
            <Typography variant="h4" className={classes.title}>
            Conways Game of Life
            </Typography>
            <Grid />
            <Controls></Controls>

        </Container>
        </Paper>
    )
};

export default Game;
