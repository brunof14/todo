import logoSVG from "./assets/logo.svg";
import FormTodo from "./components/FormTodo";
import Todos from "./components/Todos";
import { TodoListProvider } from "./contexts/TodoList";

function App() {
  return (
    <TodoListProvider>
      <header className="flex h-[12.5rem] items-center justify-center bg-gray-700">
        <img src={logoSVG} alt="Todo"></img>
      </header>
      <main className="mx-auto mt-[-1.625rem] max-w-[46rem] px-4">
        <FormTodo />
        <Todos />
      </main>
    </TodoListProvider>
  );
}

export default App;
