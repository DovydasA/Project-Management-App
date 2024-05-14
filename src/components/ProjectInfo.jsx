import { useContext } from "react";
import ProjectsStateContext from "../contexts/ProjectsStateContext/ProjectsStateContext";
import Tasks from "./Tasks";

function ProjectInfo() {
  const {
    projectsState: { activeProjectId, projects },
    deleteProject,
  } = useContext(ProjectsStateContext);

  const { id, title, description, dueDate, tasks } = projects.find(
    (project) => project.id === activeProjectId,
  );

  const formattedDueDate = new Date(dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col justify-start gap-2 px-4 text-left">
      <header className="border-b-2 pb-4">
        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-stone-600">{title}</h2>
          <button
            onClick={() => deleteProject(id)}
            className="my-2 rounded-md bg-stone-700 px-4 py-1 font-semibold text-stone-400 hover:bg-stone-600 hover:text-stone-300"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDueDate}</p>
        <p className="whitespace-pre-wrap text-stone-600">{description}</p>
      </header>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default ProjectInfo;
