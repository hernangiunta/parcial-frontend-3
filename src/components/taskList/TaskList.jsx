import Card from "../card/Card";
import "./TaskList.css";

function TaskList({ tasks, deleteTask }) {
  return (
    <section className="section_task">
      {tasks.length === 0 ? (
        <p>No hay ningun mensaje para mostrar...</p>
      ) : (
        <div className="task_container">
          {tasks.map(({ id, titleFix, description }, index) => {
            return (
              <Card
                key={index}
                id={id}
                title={titleFix}
                description={description}
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default TaskList;
