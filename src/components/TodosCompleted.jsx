import { useTodos } from "../TodosProvider";
import { createSignal, createEffect, Show } from "solid-js";

const TodosCompleted = () => {
  const [todos, { toggleTodo }] = useTodos();
  const [completedTodos, setCompletedTodos] = createSignal([]);

  createEffect(() => {
    const completed = todos.todos.filter((todo) => todo.completed);
    setCompletedTodos(completed);
  });

  return (
    <section>
      <h1>Completed:</h1>
      <Show
        when={completedTodos().length}
        fallback={() => <p>No completed items (yet!)</p>}
      >
        <For each={completedTodos()}>
          {(item) => {
            return (
              <li>
                <input
                  type="checkbox"
                  name={item.text}
                  checked={true}
                  onClick={() => toggleTodo(item.text)}
                />
                <label for={item.text}>{item.text}</label>
              </li>
            );
          }}
        </For>
      </Show>
    </section>
  );
};

export default TodosCompleted;
