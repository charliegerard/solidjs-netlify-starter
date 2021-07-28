import { useTodos } from "../TodosProvider";
import { Show } from "solid-js";

const TodosCompleted = () => {
  const [todos, { toggleTodo }] = useTodos();

  return (
    <section>
      <h1>Completed:</h1>
      <Show
        when={todos.items.filter((t) => t.completed).length}
        fallback={() => <p>No completed items (yet!)</p>}
      >
        <For each={todos.items.filter((t) => t.completed)}>
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
