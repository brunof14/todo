import { Trash } from "phosphor-react";
import { useId } from "react";
import useTodoList from "../../hooks/useTodoList";
import { Todo } from "../../interfaces/Todo";

interface TodoListItemProps {
  todo: Todo;
}
function TodoListItem({ todo }: TodoListItemProps) {
  const { removeTodo, toggleIsDone } = useTodoList();
  const htmlFor = useId();

  function handleClick() {
    removeTodo(todo.id);
  }

  function handleChange() {
    toggleIsDone(todo.id);
  }

  if (!todo.isDone) {
    return (
      <li className="flex items-center gap-3 rounded-lg border border-gray-400 bg-gray-500 p-6 transition-colors">
        <input
          className="h-6 w-6 shrink-0 appearance-none self-start rounded-full border-2 border-blue p-2 transition-colors hover:cursor-pointer hover:border-blueDark hover:bg-blueDark hover:bg-opacity-20"
          id={htmlFor}
          type="checkbox"
          checked={todo.isDone}
          onChange={handleChange}
        />
        <label
          className="block flex-1 self-stretch hover:cursor-pointer"
          htmlFor={htmlFor}
        >
          {todo.description}
        </label>

        <button
          onClick={handleClick}
          className="self-start rounded p-1 text-gray-300 transition-colors hover:bg-gray-400 hover:text-danger"
        >
          <Trash size={24} />
        </button>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-3 rounded-lg border border-gray-500 bg-gray-500 p-6 transition-colors">
      <input
        className="checked:hover-border-purple h-6 w-6 shrink-0 cursor-pointer appearance-none self-start rounded-full bg-[url('src/assets/check.svg')] bg-[length:14px_14px] bg-center bg-no-repeat p-2 transition-colors checked:border-purpleDark checked:bg-purpleDark hover:cursor-pointer checked:hover:bg-purple"
        id={htmlFor}
        type="checkbox"
        checked={todo.isDone}
        onChange={handleChange}
      />
      <label
        className="block flex-1 self-stretch text-gray-300 line-through hover:cursor-pointer"
        htmlFor={htmlFor}
      >
        {todo.description}
      </label>

      <button
        onClick={handleClick}
        className="self-start rounded p-1 text-gray-300 transition-colors hover:bg-gray-400 hover:text-danger"
      >
        <Trash size={24} />
      </button>
    </li>
  );
}

export default TodoListItem;
