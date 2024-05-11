import { useRef, useState } from "react";
import Input from "./Input";

function NewProject({ onSave, onCancel }) {
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
    <div className="flex h-full flex-col gap-8 px-8 py-8">
      <menu className="flex justify-end">
        <li>
          <button
            onClick={onCancel}
            className="rounded px-8 py-2 text-[1.5rem] text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSaveProject}
            className="rounded-md bg-stone-700 px-8 py-2 text-[1.5rem] text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <fieldset className="border-2 p-8">
        <legend className="ml-8 text-left text-2xl font-semibold">
          New Project
        </legend>
        <Input ref={title} label="Title" type="text" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" type="date" />
      </fieldset>
    </div>
  );
}

export default NewProject;
