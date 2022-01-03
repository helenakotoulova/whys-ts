import React, {useRef, useContext} from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => { //nadefinujeme prop onAddTodo jako function, ktera nebude mit zadnou return value (zde jen passujeme tu hodnotu do parent komponenty), tzn type void
    const todosCtx = useContext(TodosContext);
    
    const todoTextInputRef = useRef<HTMLInputElement>(null); // meli bychom pridat starting value => null
    
    const submitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredTodoText=todoTextInputRef.current!.value; 
        if (enteredTodoText.trim().length === 0) {
            // throw an error
            return;
        }
        todosCtx.addTodo(enteredTodoText);
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef}></input>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;

/*
PRED CONTEXTEM:
const NewTodo: React.FC<{onAddTodo: (text:string)=>void}> = (props) => { //nadefinujeme prop onAddTodo jako function, ktera nebude mit zadnou return value (zde jen passujeme tu hodnotu do parent komponenty), tzn type void
    const todoTextInputRef = useRef<HTMLInputElement>(null); // meli bychom pridat starting value => null
    const submitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredTodoText=todoTextInputRef.current!.value; 
        if (enteredTodoText.trim().length === 0) {
            // throw an error
            return;
        }
        props.onAddTodo(enteredTodoText);
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef}></input>
            <button>Add Todo</button>
        </form>
    )
}
*/

/*
const enteredTodoText=todoTextInputRef.current!.value; // takhle jsme si jisti, ze to bude string
const enteredTodoText=todoTextInputRef.current?.value; // takhle si nejsme jisti, ze to bude string. muze to byt string nebo null/undefined
*/