import { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";

const useTodoList = () => useContext(TodoListContext);

export default useTodoList;
