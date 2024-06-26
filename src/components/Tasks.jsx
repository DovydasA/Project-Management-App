import NewTask from "./NewTask";
import Task from "./Task";

function Tasks({ tasks }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-stone-700">Tasks</h2>
      <NewTask />
      {tasks && tasks.length > 0 ? (
        <ul className="ml-4 mt-4 grid list-disc gap-2">
          {tasks.map((task) => (
            <Task key={task} task={task} />
          ))}
        </ul>
      ) : (
        <p className="my-4 text-stone-800">No tasks available</p>
      )}
    </section>
  );
}

export default Tasks;
