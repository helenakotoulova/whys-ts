import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  // children jsou default props, takze je nemusime popisovat
  // const todos = [ new Todo('Learn React'), new Todo('Learn TypeScript')];
  const [todos, setTodos] = useState<Todo[]>([]); // pokud nechame useState([]) tak typescript infers, ze todos jsou of type never[], tzn ze budou vzdy prazdne,
  // proto tam pridame ten generic type <Todo[]>

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeItemHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.id !== todoId);
    });
  };

  const todoContextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeItemHandler,
  };
  return (
    <TodosContext.Provider value={todoContextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
