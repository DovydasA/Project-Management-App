import { useRef, useState } from "react";
import Input from "./Input";

function NewProject({ onSave, onCancel }) {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const title = useRef(null);
  const description = useRef(null);
  const dueDate = useRef(null);

  const handleSaveProject = () => {
    if (
      title.current.value === "" ||
      description.current.value === "" ||
      dueDate.current.value === ""
    )
      return;

    const newProject = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };
    onSave(newProject);
  };
  return (
    <div
      // onSubmit={(e) => {
      //   e.preventDefault();
      // }}
      className="mt-8 flex h-full flex-col justify-start gap-8 py-8 pl-8 pr-40"
    >
      <span className="flex">
        <button className="ml-auto rounded px-8 py-2 text-[1.5rem]">
          Cancel
        </button>
        <button
          onClick={handleSaveProject}
          className="rounded bg-stone-900 px-8 py-2 text-[1.5rem] text-stone-300"
        >
          Save
        </button>
      </span>
      <Input ref={title} label="Title" type="text" />
      <Input ref={description} label="Description" type="textarea" />
      <Input ref={dueDate} label="Due Date" type="date" />
    </div>
  );
}

export default NewProject;
