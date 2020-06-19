import React, { useState, useContext } from 'react';
import { Container } from '@material-ui/core';
import Controls from '../components/controls';
import { GridContext } from '../context/gridContext';
import Grid from '../components/grid';

const Game = () => {

        
    return (

        <Container>
            <Controls></Controls>
            <Grid />
        </Container>
    )
};

export default Game;
