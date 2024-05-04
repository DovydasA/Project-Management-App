import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

function App() {
  const [displayNewProjectPage, setDisplayNewProjectPage] = useState(false);

  const handleNewProject = () => {
    setDisplayNewProjectPage(true);
  };
  return (
    <div className="mt-16 flex">
      <ProjectsSidebar onNewProject={handleNewProject} />
      <main className="h-[calc(100svh-4rem)] w-full p-8 text-center">
        {displayNewProjectPage && <NewProject />}
      </main>
    </div>
  );
}

export default App;
