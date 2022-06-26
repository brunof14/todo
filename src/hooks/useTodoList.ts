import { useContext } from "react";
import { TodoListContext } from "../contexts/TodoList";

const useTodoList = () => useContext(TodoListContext);

export default useTodoList;
