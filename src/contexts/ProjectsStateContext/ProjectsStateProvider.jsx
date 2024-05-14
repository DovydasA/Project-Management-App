import React, { useState, useEffect } from "react";

import ProjectsStateContext from "./ProjectsStateContext.js";
import ProjectsStateReducer from "./ProjectsStateReducer.js";

const ProjectsStateProvider = ({ children }) => {
  const [projectsState, setProjectsState] = useState(() => {
    const storedProjectsState = JSON.parse(
      localStorage.getItem("projectsState"),
    );
    return (
      storedProjectsState || {
        activeProjectId: undefined,
        projects: [],
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("projectsState", JSON.stringify(projectsState));
  }, [projectsState]);

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
    console.log("Setting activeProjectId to -1"); // Debugging log
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
          tasks: [],
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

  const contextValue = {
    projectsState: {
      activeProjectId: projectsState.activeProjectId,
      projects: [...projectsState.projects],
    },
    addProject: addNewProject,
    deleteProject: deleteProject,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
    setActiveTabId: setActiveTabId,
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
