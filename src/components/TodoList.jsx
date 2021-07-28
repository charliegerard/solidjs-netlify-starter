import styles from "./TodoList.module.css";
import { useTodos } from "../TodosProvider";

const TodoList = () => {
  let input;
  const [todos, { addTodo, toggleTodo }] = useTodos();

  const addTodoItem = (input) => {
    if (!input.value.trim()) return;
    addTodo(input.value);
    input.value = "";
  };

  return (
    <section class={styles.TodoList}>
      <h1>ToDo List</h1>
      <label for="todo-item" class="sr-only">
        Todo item
      </label>
      <input
        ref={input}
        type="text"
        name="todo-item"
        id="todo-item"
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
        <For each={todos.items.filter((t) => !t.completed)}>
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
