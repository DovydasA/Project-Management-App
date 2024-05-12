import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import ProjectInfo from "./components/ProjectInfo";
import NoProjectSelected from "./components/NoProjectSelected";

import projectsListArr from "./utils/projectsListArr";

function App() {
  const [projectsState, setProjectsState] = useState({
    activeProjectId: undefined,
    projects: [...projectsListArr],
  });

  function handleAddTask(task) {
    setProjectsState((prev) => ({
      ...prev,
      projects: [
        ...prev.projects.map((project) =>
          project.id === projectsState.activeProjectId
            ? { ...project, tasks: [...project.tasks, task] }
            : project,
        ),
      ],
    }));
  }
  function handleDeleteTask(task) {
    setProjectsState((prev) => ({
      ...prev,
      projects: [
        ...prev.projects.map((project) =>
          project.id === projectsState.activeProjectId
            ? { ...project, tasks: [...project.tasks.filter((t) => t != task)] }
            : project,
        ),
      ],
    }));
  }

  function setActiveTabId(id) {
    setProjectsState((prev) => ({ ...prev, activeProjectId: id }));
  }

  const handleNewProject = () => {
    setProjectsState((prev) => ({ ...prev, activeProjectId: -1 }));
  };

  const addNewProject = (newProject) => {
    const newId =
      projectsState.projects.length <= 1
        ? 1
        : projectsState.projects[projectsState.projects.length - 1].id + 1;

    setProjectsState((prev) => ({
      ...prev,
      activeProjectId: newId,
      projects: [
        ...prev.projects,
        {
          id: newId,
          ...newProject,
        },
      ],
    }));
  };

  const handleCancelNewProject = () => {
    setProjectsState((prev) => ({
      ...prev,
      activeProjectId: undefined,
    }));
  };

  const deleteProject = (projectId) => {
    setProjectsState((prev) => ({
      ...prev,
      activeProjectId: undefined,
      projects: prev.projects.filter((project) => project.id !== projectId),
    }));
  };

  let content;
  if (projectsState.activeProjectId === -1) {
    content = (
      <NewProject onSave={addNewProject} onCancel={handleCancelNewProject} />
    );
  } else if (projectsState.activeProjectId === undefined) {
    content = <NoProjectSelected onNewProject={handleNewProject} />;
  } else {
    content = (
      <ProjectInfo
        projectsState={projectsState}
        onDelete={deleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }
  return (
    <div className="mt-16 flex">
      <ProjectsSidebar
        projectsState={projectsState}
        setActiveTab={setActiveTabId}
        onNewProject={handleNewProject}
      />
      <main className="container h-[calc(100svh-4rem)] w-full p-8 text-center">
        {content}
      </main>
    </div>
  );
}

export default App;
