import React, {Component} from 'react';



export const AddButton = (props) => {
    return (<button onClick={() => props.handleClick(props.index)}>add to Faves</button>)
}