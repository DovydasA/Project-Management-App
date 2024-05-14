import { useState } from "react";
import { useContext } from "react";
import ProjectsStateContext from "../contexts/ProjectsStateContext/ProjectsStateContext";

function Task({ task, ...props }) {
  const [checked, setChecked] = useState(false);
  const { deleteTask } = useContext(ProjectsStateContext);

  function handleClick() {
    if (checked === true) {
      deleteTask(task);
    } else {
      setChecked(true);
    }
  }

  return (
    <li
      className={checked ? "line-through" : undefined}
      onClick={handleClick}
      {...props}
    >
      {task}
    </li>
  );
}

export default Task;
