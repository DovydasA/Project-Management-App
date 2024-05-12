import { useState } from "react";

function Task({ task, onDelete, ...props }) {
  const [checked, setChecked] = useState(false);

  function handleClick() {
    if (checked === true) {
      onDelete(task);
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
