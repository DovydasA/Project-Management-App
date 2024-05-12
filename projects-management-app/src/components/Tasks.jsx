import NewTask from "./NewTask";
import Task from "./Task";

function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks ? (
        <ul>
          {tasks.map((task) => (
            <Task key={task} task={task} onDelete={onDelete} />
          ))}
        </ul>
      ) : (
        <p className="my-4 text-stone-800">No tasks available</p>
      )}
    </section>
  );
}

export default Tasks;
