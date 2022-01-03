import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {
  
  return (
    <TodosContextProvider>
      <NewTodo/>
      <Todos/>
    </TodosContextProvider>
  );
}


export default App;

/* PRED POUZITIM CONTEXTU:
  //tenhle kod ted presuneme do contextu
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

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveItem={removeItemHandler} />
    </div>
  );
}
*/
