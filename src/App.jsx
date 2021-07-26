import styles from "./App.module.css";
import TodoList from "./components/TodoList";
import { createSignal } from "solid-js";
import TodosCompleted from "./components/TodosCompleted";
import Nav from "./components/Nav";
import { TodosProvider } from "./TodosProvider";

const AllTodos = () => {
  return (
    <section>
      <TodoList />
      <TodosCompleted />
    </section>
  );
};

function App() {
  const [viewSelected, setViewSelected] = createSignal("all");

  return (
    <TodosProvider>
      <div class={styles.App}>
        <Nav setView={setViewSelected} />
        <Switch fallback={<AllTodos />}>
          <Match when={viewSelected() === "to do"}>
            <TodoList />
          </Match>
          <Match when={viewSelected() === "completed"}>
            <TodosCompleted />
          </Match>
        </Switch>
      </div>
    </TodosProvider>
  );
}

export default App;
