import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { GridContext } from '../context/gridContext';

const useStyles = makeStyles({
    cellSize: {
        maxWidth: ({gridProps}) => `${gridProps.cellSize}px`,
        height: ({gridProps}) => `${gridProps.cellSize}px`,
        border: 'solid 1px black',
        cursor:'pointer',
        '&:hover': {
            background: 'grey'
        },
        background:({color}) => `${color? 'grey' : 'white'}`
    }
});

const Cell = (props) => {
    // call context
    const gridProps = useContext(GridContext);

    // set color
    const [color, setColor] = useState(props.value ? 1 : 0);

    // multiple props in context and parent 
    const combinedProps = {color,gridProps};
    const classes = useStyles(combinedProps);

    // change color if click
    const onClickHandler = (e) => {
        setColor(color => !color);
        gridProps.updateCell(props.rowNum, props.colNum)
    };

    return(
        < button className = {classes.cellSize}
        onClick={onClickHandler}
        >
        </button>
    );
};

export default Cell;