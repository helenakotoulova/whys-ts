import React, {useContext} from "react";
import TodosItems from "./TodosItems";
import classes from './Todos.module.css';
import {TodosContext} from '../store/todos-context';

// pouzijeme type annotation ( React.FC<{ items: string[] }>) a generic type - takhle to bylo puvodne,
// ted pouzijeme tu class Todo nadefinovanou v todo.ts (jde pouzit tu class Todo jako type)

const Todos: React.FC = () => {
  // React.FC je type definition - function component

    const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodosItems key={item.id} text={item.text} onRemoveItem={todosCtx.removeTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;

/*
PRED CONTEXTEM:
const Todos: React.FC<{ items: Todo[]; onRemoveItem: (id:string)=>void }> = (props) => {
  // React.FC je type definition - function component

return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodosItems key={item.id} text={item.text} onRemoveItem={props.onRemoveItem.bind(null, item.id)}/>
      ))}
    </ul>
*/

// slo by i takhle: props: {items: string[]}, ale to vic vyse je lepsi.
