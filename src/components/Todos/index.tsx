import useTodoList from "../../hooks/useTodoList";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";

function Todos() {
  const { todos } = useTodoList();

  return (
    <div>
      <TodoListHeader todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default Todos;
