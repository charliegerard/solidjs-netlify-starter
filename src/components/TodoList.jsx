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

  return (
    <section class={styles.TodoList}>
      <h1>To do list:</h1>
      <input ref={input} type="text" />
      <button
        onClick={() => {
          if (!input.value.trim()) return;
          addTodo(input.value);
          input.value = "";
        }}
      >
        Add item
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
