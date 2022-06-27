import { createContext, ReactNode, useEffect, useState } from "react";
import useTodoListStorage from "../hooks/useTodosStorage";
import { Todo } from "../interfaces/Todo";

interface TodoListContextValue {
  todos: Array<Todo>;
  addTodo(description: string): void;
  toggleIsDone(id: number): void;
  removeTodo(id: number): void;
}

export const TodoListContext = createContext<TodoListContextValue>(
  {} as TodoListContextValue
);

interface TodoListProviderProps {
  children: ReactNode;
}

export function TodoListProvider({ children }: TodoListProviderProps) {
  const todosStorage = useTodoListStorage();
  const [todos, setTodos] = useState<Array<Todo>>(todosStorage.load());

  useEffect(() => {
    todosStorage.save(todos);
  }, [todos]);

  function createTodo(id: number, description: string): Todo {
    return {
      id,
      description,
      isDone: false,
      createdAt: new Date(),
    };
  }

  function addTodo(description: string) {
    const lastTodoId = todos[todos.length - 1]?.id || 0;
    const nextTodoId = lastTodoId + 1;

    const newTodo = createTodo(nextTodoId, description);

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function toggleIsDone(id: number) {
    const toggleFn = (todo: Todo): Todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        isDone: !todo.isDone,
      };
    };

    setTodos((prevTodos) => prevTodos.map(toggleFn));
  }

  function removeTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <TodoListContext.Provider
      value={{ todos, addTodo, removeTodo, toggleIsDone }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
