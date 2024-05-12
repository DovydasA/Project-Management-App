import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import ProjectInfo from "./components/ProjectInfo";
import NoProjectSelected from "./components/NoProjectSelected";

const projectsListArr = [
  {
    id: 1,
    title: "Learning React",
    description: "some description",
    dueDate: "05-07-2024",
  },
  { id: 2, title: "Building Projects", description: "", dueDate: "" },
  { id: 3, title: "Mastering Tailwind CSS", description: "", dueDate: "" },
  { id: 4, title: "Creating Portfolio", description: "", dueDate: "" },
  { id: 5, title: "Deploying Apps", description: "", dueDate: "" },
  { id: 6, title: "Building More Projects", description: "", dueDate: "" },
];

function App() {
  const [projectsState, setProjectsState] = useState({
    activeProjectId: undefined,
    projects: [...projectsListArr],
  });

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
      <ProjectInfo projectsState={projectsState} onDelete={deleteProject} />
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
