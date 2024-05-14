import { createContext } from "react";

const ProjectsStateContext = createContext({
  projectsState: { activeProjectId: undefined, projects: [] },
  addProject: () => {},
  deleteProject: () => {},
  addTask: () => {},
  deleteTask: () => {},
  setActiveTabId: () => {},
  startNewProject: () => {},
  cancelNewProject: () => {},
});

export default ProjectsStateContext;
