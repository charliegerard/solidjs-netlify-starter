import { createContext, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, setTodos] = createStore(props.todoItems || { items: [] }),
    store = [
      todos,
      {
        addTodo(text) {
          setTodos("items", [...todos.items, { text, completed: false }]);
        },
        toggleTodo(text) {
          setTodos(
            "items",
            (i) => i.text === text,
            "completed",
            (c) => !c
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
