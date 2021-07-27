import styles from "./TodoList.module.css";
import { useTodos } from "../TodosProvider";
import { createSignal, createEffect } from "solid-js";

const TodoList = () => {
  let input;

  const [todos, { addTodo, toggleTodo }] = useTodos();
  const [incompleteTodos, setIncompleteTodos] = createSignal([]);

  createEffect(() => {
    const incomplete = todos.todos.filter((todo) => !todo.completed);
    setIncompleteTodos(incomplete);
  });

  const addTodoItem = (input) => {
    if (!input.value.trim()) return;
    addTodo(input.value);
    input.value = "";
  };

  return (
    <section class={styles.TodoList}>
      <h1>ToDo List</h1>
      <input
        ref={input}
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodoItem(input);
          }
        }}
      />
      <button
        onClick={() => {
          addTodoItem(input);
        }}
        aria-label="add item"
      >
        +
      </button>
      <ul>
        <For each={incompleteTodos()}>
          {(item) => (
            <li>
              <input
                type="checkbox"
                name={item.text}
                onClick={() => toggleTodo(item.text)}
              />
              <label for={item.text}>{item.text}</label>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
};

export default TodoList;
