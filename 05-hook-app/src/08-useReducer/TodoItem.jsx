export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`noselect align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' } `}
        onDoubleClick={() => onToggleTodo(todo.id)}
      >
        {todo.desc}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};
