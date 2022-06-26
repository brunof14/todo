import { useCallback } from "react";
import { Todo } from "../interfaces/Todo";

const LOCAL_STORAGE_KEY = "todo-app--todos";

type TodoList = Array<Todo>;

type TodoFromStorage = {
  id: number;
  description: string;
  isDone: boolean;
  createdAt: string;
};

const useTodoListStorage = () => {
  const load = useCallback((): TodoList => {
    const todosData = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!todosData) {
      return [];
    }

    const todos: Array<TodoFromStorage> = JSON.parse(todosData);

    return todos.map((todo) => ({
      ...todo,
      createdAt: new Date(todo.createdAt),
    }));
  }, []);

  const save = useCallback((todos: TodoList): void => {
    const todosData = JSON.stringify(todos);

    localStorage.setItem(LOCAL_STORAGE_KEY, todosData);
  }, []);

  return { load, save };
};

export default useTodoListStorage;
