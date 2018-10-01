import React, {Component} from 'react';



export const AddButton = (props) => {
    return (<button onClick={() => props.handleClick(props.index)}>add to Faves</button>)
}

//first GETs stuff from server and assigns it to a value in state then ADD TO CART/FAVS/BAG button onclick function GETS THE INFO then setsState on new array