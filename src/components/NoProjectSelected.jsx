import { useContext } from "react";
import ProjectsStateContext from "../contexts/ProjectsStateContext/ProjectsStateContext";

import logo from "../assets/logo.png";
import NewProjectButton from "./NewProjectButton";

function NoProjectSelected() {
  const { startNewProject } = useContext(ProjectsStateContext);

  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-4 text-center">
      <img
        src={logo}
        alt="clipboard and pen"
        className="size-16 object-contain"
      />
      <h2 className="text-xl font-bold text-stone-600">No projects selected</h2>
      <p className="mb-4">Select a project or get started with a new one</p>
      <NewProjectButton onClick={startNewProject}>
        Create New Project
      </NewProjectButton>
    </div>
  );
}

export default NoProjectSelected;
