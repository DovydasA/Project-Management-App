import { useState } from "react";
import { useContext } from "react";
import ProjectsStateContext from "../contexts/ProjectsStateContext/ProjectsStateContext";

function NewTask() {
  const [enteredTask, setEnteredTask] = useState("");
  const { addTask } = useContext(ProjectsStateContext);

  function handleChange(e) {
    const { value } = e.target;
    setEnteredTask(value);
  }

  function handleClick() {
    addTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 rounded-sm bg-stone-200 px-2 py-1 focus:outline-none"
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
