import { createContext } from "react";

const ProjectsStateContext = createContext({
  activeProjectId: undefined,
  projects: [],
  addProject: () => {},
  deleteProject: () => {},
  addTask: () => {},
  deleteTask: () => {},
  setActiveTabId: () => {},
});

export default ProjectsStateContext;
