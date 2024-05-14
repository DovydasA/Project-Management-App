import React, { useEffect, useReducer } from "react";

import ProjectsStateContext from "./ProjectsStateContext.js";
import ProjectsStateReducer from "./ProjectsStateReducer.js";

const ProjectsStateProvider = ({ children }) => {
  const [projectsState, dispatchProjectsAction] = useReducer(
    ProjectsStateReducer,
    {
      activeProjectId: undefined,
      projects: [],
    },
    () => {
      const storedProjectsState = JSON.parse(
        localStorage.getItem("projectsState"),
      );
      return (
        storedProjectsState || {
          activeProjectId: undefined,
          projects: [],
        }
      );
    },
  );

  useEffect(() => {
    localStorage.setItem("projectsState", JSON.stringify(projectsState));
  }, [projectsState]);

  function addNewProject(newProject) {
    dispatchProjectsAction({ type: "ADD_PROJECT", payload: newProject });
  }
  const deleteProject = (projectId) => {
    dispatchProjectsAction({ type: "DELETE_PROJECT", payload: projectId });
  };

  function handleAddTask(task) {
    dispatchProjectsAction({ type: "ADD_TASK", payload: task });
  }
  function handleDeleteTask(task) {
    dispatchProjectsAction({ type: "DELETE_TASK", payload: task });
  }

  function setActiveTabId(id) {
    console.log("setActiveTabId", id);
    dispatchProjectsAction({ type: "SET_ACTIVE_PROJECT", payload: id });
  }

  function handleNewProject() {
    dispatchProjectsAction({ type: "NEW_PROJECT_PAGE" });
  }
  function handleCancelNewProject() {
    dispatchProjectsAction({ type: "CANCEL_NEW_PROJECT" });
  }

  const contextValue = {
    projectsState: {
      activeProjectId: projectsState.activeProjectId,
      projects: [...projectsState.projects],
    },
    addProject: addNewProject,
    deleteProject,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
    setActiveTabId,
    startNewProject: handleNewProject,
    cancelNewProject: handleCancelNewProject,
  };

  return (
    <ProjectsStateContext.Provider value={contextValue}>
      {children}
    </ProjectsStateContext.Provider>
  );
};

export default ProjectsStateProvider;
