import { useEffect, useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

const projectsListArr = [
  { title: "Learning React", description: "", dueDate: "" },
  { title: "Building Projects", description: "", dueDate: "" },
  { title: "Mastering Tailwind CSS", description: "", dueDate: "" },
  { title: "Creating Portfolio", description: "", dueDate: "" },
  { title: "Deploying Apps", description: "", dueDate: "" },
  { title: "Building More Projects", description: "", dueDate: "" },
];

function App() {
  const [displayNewProjectPage, setDisplayNewProjectPage] = useState(false);
  const [projectsList, setProjectsList] = useState([...projectsListArr]);

  const handleNewProject = () => {
    setDisplayNewProjectPage(true);
  };

  const addNewProject = (newProject) => {
    setProjectsList([...projectsList, newProject]);
    setDisplayNewProjectPage(false);
  };

  const handleCancelNewProject = () => {
    setDisplayNewProjectPage(false);
  };

  return (
    <div className="mt-16 flex">
      <ProjectsSidebar
        projectsList={projectsList}
        onNewProject={handleNewProject}
      />
      <main className="h-[calc(100svh-4rem)] w-full p-8 text-center">
        {displayNewProjectPage ? (
          <NewProject
            onSave={addNewProject}
            onCancel={handleCancelNewProject}
          />
        ) : (
          <h1> info for the selected project</h1>
        )}
      </main>
    </div>
  );
}

export default App;
