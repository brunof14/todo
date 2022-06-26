import clipboardIconPNG from "../../assets/clipboard-icon.png";
function EmptyTodoList() {
  return (
    <div className="flex flex-col items-center py-16 text-center text-gray-300">
      <img src={clipboardIconPNG} alt="Clipboard" className="mb-4" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

export default EmptyTodoList;
