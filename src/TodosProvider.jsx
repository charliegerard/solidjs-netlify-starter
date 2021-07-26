import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, setTodos] = createStore(props.todos || { todos: [] }),
    store = [
      todos,
      {
        addTodo(text) {
          setTodos("todos", (todos) => [...todos, { text, completed: false }]);
        },
        toggleTodo(text) {
          setTodos(
            "todos",
            (todos) => todos.text === text,
            "completed",
            (completed) => !completed
          );
        },
      },
    ];

  return (
    <TodosContext.Provider value={store}>
      {props.children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}
