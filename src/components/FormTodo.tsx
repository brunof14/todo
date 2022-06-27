import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import useTodoList from "../hooks/useTodoList";

function FormTodo() {
  const { addTodo } = useTodoList();
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    addTodo(description);
    setDescription("");
  }

  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    setDescription(e.currentTarget.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-16 flex flex-col gap-2 sm:flex-row"
    >
      <input
        className="h-[3.25rem] flex-1 basis-[3.25rem] rounded-lg border border-gray-500 bg-gray-500 px-4  outline-none transition-colors placeholder:text-gray-300 focus:border-purpleDark"
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={handleInputChange}
        required
      />
      <button
        type="submit"
        className="flex h-[3.25rem] items-center justify-center gap-2 rounded-lg bg-blueDark px-4 text-gray-100 transition-colors hover:bg-blue"
      >
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}

export default FormTodo;
