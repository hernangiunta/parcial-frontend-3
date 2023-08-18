import "./TaskForm.css";

export default function TaskForm({ form, createTask, changed, message }) {
  const saveTask = (e) => {
    e.preventDefault();

    createTask(form);
  };

  return (
    <form onSubmit={saveTask} className="form">
      <h1>Formulario</h1>
      <div className="container_input_form">
        <label htmlFor="title" className="label_form">
          Nombre
        </label>
        <input
          type="text"
          name="title"
          onChange={changed}
          placeholder="Ingrese su nombre..."
        />
      </div>
      <div className="container_input_form">
        <label htmlFor="description" className="label_form">
          Color
        </label>
        <textarea
          name="description"
          onChange={changed}
          placeholder="Ingrese su color favorito..."
        ></textarea>
      </div>
      <button type="submit" className="btn_save">
        Enviar
      </button>
      <h5>{message}</h5>
    </form>
  );
}
