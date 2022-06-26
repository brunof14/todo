import { Todo } from "../../interfaces/Todo";
import EmptyTodoList from "./EmptyTodoList";
import TodoListItem from "./TodoListItem";

export interface TodoListProps {
  todos: Array<Todo>;
}

function TodoList({ todos }: TodoListProps) {
  const sortBy = (a: Todo, b: Todo) => {
    if (!a.isDone && b.isDone) {
      return -1;
    }

    if (!b.isDone && a.isDone) {
      return 1;
    }

    if (a.createdAt.getTime() > b.createdAt.getTime()) {
      return -1;
    }

    if (a.createdAt.getTime() < b.createdAt.getTime()) {
      return 1;
    }

    return 0;
  };

  if (!todos || todos.length === 0) {
    return <EmptyTodoList />;
  }

  const todosOrder = [...todos];
  todosOrder.sort(sortBy);

  return (
    <ul className="flex flex-col gap-3">
      {todosOrder.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
