import { TodoListProps } from "./TodoList";

function TodoListHeader({ todos }: TodoListProps) {
  const totalTodosComplete = todos?.filter((todo) => todo.isDone).length || 0;

  return (
    <div className="mb-6 flex flex-wrap justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-blue">Tarefas criadas</span>
        <span className="rounded-full bg-gray-400 py-1 px-3 text-xs font-bold">
          {todos.length}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-purple">Concluídas</span>
        <span className="rounded-full bg-gray-400 py-1 px-3 text-xs font-bold">
          {totalTodosComplete} de {todos.length}
        </span>
      </div>
    </div>
  );
}

export default TodoListHeader;
