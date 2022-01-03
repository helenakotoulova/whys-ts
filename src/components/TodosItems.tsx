import React from "react";
import classes from './TodosItems.module.css';

const TodosItems:React.FC<{text:string; onRemoveItem: ()=> void}> = (props) => {
    return(
            <li className={classes.item} onClick={props.onRemoveItem}>{props.text}</li>
          )}

export default TodosItems;