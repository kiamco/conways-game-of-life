import React, {useState, useEffect} from 'react';
import {Container} from '@material-ui/core';
import Controls from '../components/controls';

const Game = () => {
  return(
      <Container>
          <Controls></Controls>
      </Container>
  )  
};

export default Game;
