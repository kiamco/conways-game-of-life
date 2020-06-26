import React, {useContext, useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { GridContext } from '../context/gridContext';

const useStyles = makeStyles({
    cellSize: {
        minWidth: ({gridProps}) => `${gridProps.cellSize}px`,
        minHeight: ({gridProps}) => `${gridProps.cellSize}px`,
        padding:'5px',
        border: 'solid 1px  rgba(0, 0, 0, .5)',
        cursor:'pointer',
        '&:hover': {
            background: 'black'
        },
        background:({color}) => `${color? `#${Math.floor(Math.random()*16777215).toString(16)}` : 'white'}`,
    }
});

const Cell = (props) => {
    // call context
    const gridProps = useContext(GridContext);

    // set color
    const [color, setColor] = useState(0);

    // multiple props in context and parent 
    const combinedProps = {color,gridProps};
    const classes = useStyles(combinedProps);

    // change color if click
    const onClickHandler = (e) => {
        // setColor(color => !color);
        gridProps.updateCell(props.rowNum, props.colNum);
        // console.log(gridProps.gridState)
    };

    useEffect(()=> {
        setColor(props.value ? 1 : 0);
    },[gridProps.updateCell,props.value,color])
    // console.log(color, props.value)

    return(
        < button className = {classes.cellSize}
        onClick={onClickHandler}
        >
        </button>
    );
};

export default Cell;