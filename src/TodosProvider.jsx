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
            produce((s) => {
              s.items.map((item) => {
                if (item.text === text) {
                  item.completed = !item.completed;
                }
                return item;
              });
            })
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
