import { useRef, useContext } from "react";
import ProjectsStateContext from "../contexts/ProjectsStateContext/ProjectsStateContext";

import Input from "./Input";
import Modal from "./Modal";

function NewProject() {
  const { addProject, cancelNewProject } = useContext(ProjectsStateContext);
  const modalRef = useRef(null);
  const title = useRef(null);
  const description = useRef(null);
  const dueDate = useRef(null);

  const handleSaveProject = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    const newProject = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };
    addProject(newProject);
  };

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="mb-1 text-xl font-bold text-stone-600">Invalid Input</h2>
        <p>All inputs must be filled with valid values.</p>
      </Modal>
      <div className="flex h-full flex-col gap-8 px-8 py-8">
        <menu className="flex justify-end">
          <li>
            <button
              onClick={cancelNewProject}
              className="rounded px-4 py-1 text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveProject}
              className="rounded-md bg-stone-700 px-4 py-1 text-stone-50 hover:bg-stone-950"
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
    </>
  );
}

export default NewProject;
