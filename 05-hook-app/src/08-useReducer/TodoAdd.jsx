import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { desc, onInputChange, onResetForm } = useForm({
        desc: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(desc.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        }

        onNewTodo( newTodo );
        onResetForm();
    }

  return (
    <form onSubmit={ onFormSubmit }>
      <input type="text" name="desc" placeholder="¿Que hay que hacer?" className="form-control" value={ desc } onChange={ onInputChange } />

      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
