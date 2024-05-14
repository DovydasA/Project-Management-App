import { useContext } from "react";
import ProjectsStateContext from "../contexts/ProjectsStateContext/ProjectsStateContext";
import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import ProjectInfo from "./ProjectInfo";

function Content() {
  const {
    projectsState,
    addProject,
    cancelNewProject,
    deleteProject,
    addTask,
    deleteTask,
  } = useContext(ProjectsStateContext);
  let content;
  console.log("Active Project ID:", projectsState.activeProjectId); // Debugging line

  if (projectsState.activeProjectId === -1) {
    console.log("here2");
    content = <NewProject onSave={addProject} onCancel={cancelNewProject} />;
  } else if (projectsState.activeProjectId === undefined) {
    console.log("here3");
    content = <NoProjectSelected />;
  } else {
    console.log("here4");
    content = (
      <ProjectInfo
        projectsState={projectsState}
        onDelete={deleteProject}
        onAddTask={addTask}
        onDeleteTask={deleteTask}
      />
    );
  }
  return (
    <main className="container h-[calc(100svh-4rem)] w-full p-8 text-center">
      {content}
    </main>
  );
}

export default Content;
