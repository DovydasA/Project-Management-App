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
  const [displayNewProjectPage, setDisplayNewProjectPage] = useState(false);
  const [projectsList, setProjectsList] = useState([...projectsListArr]);
  const [activeTabId, setActiveTabId] = useState(null);

  const handleNewProject = () => {
    setDisplayNewProjectPage(true);
  };

  const addNewProject = (newProject) => {
    const newId = projectsList[projectsList.length - 1].id + 1;
    setProjectsList([
      ...projectsList,
      {
        id: newId,
        ...newProject,
      },
    ]);
    setDisplayNewProjectPage(false);
    setActiveTabId(newId);
  };

  const handleCancelNewProject = () => {
    setDisplayNewProjectPage(false);
  };

  const deleteProject = (projectId) => {
    setProjectsList((prev) =>
      prev.filter((project) => project.id !== projectId),
    );
    setActiveTabId(1);
  };

  return (
    <div className="mt-16 flex">
      <ProjectsSidebar
        activeTab={activeTabId}
        setActiveTab={setActiveTabId}
        projectsList={projectsList}
        onNewProject={handleNewProject}
      />
      <main className="container h-[calc(100svh-4rem)] w-full p-8 text-center">
        {displayNewProjectPage ? (
          <NewProject
            onSave={addNewProject}
            onCancel={handleCancelNewProject}
          />
        ) : activeTabId ? (
          <ProjectInfo
            onDelete={deleteProject}
            project={projectsList.find((project) => project.id === activeTabId)}
          />
        ) : (
          <NoProjectSelected />
        )}
      </main>
    </div>
  );
}

export default App;
