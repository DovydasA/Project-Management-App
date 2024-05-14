import ProjectsStateContext from "./ProjectsStateContext";
import ProjectsStateReducer from "./ProjectsStateReducer";

const ProjectsStateProvider = ({ children }) => {
  return (
    <ProjectsStateContext.Provider value={null}>
      {children}
    </ProjectsStateContext.Provider>
  );
};

export default ProjectsStateProvider;
