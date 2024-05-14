const ProjectStateReducer = (state, action) => {
  if (action.type === "ADD_PROJECT") {
    const newProject = action.payload;
    const newId =
      state.projects.length <= 1
        ? 1
        : state.projects[state.projects.length - 1].id + 1;

    return {
      ...state,
      activeProjectId: newId,
      projects: [
        ...state.projects,
        {
          id: newId,
          ...newProject,
          tasks: [],
        },
      ],
    };
  }
  if (action.type === "DELETE_PROJECT") {
    const projectId = action.payload;
    return {
      ...state,
      activeProjectId: undefined,
      projects: state.projects.filter((project) => project.id !== projectId),
    };
  }
  if (action.type === "SET_ACTIVE_PROJECT") {
    const id = action.payload;
    console.log("SET_ACTIVE_PROJECT", id);
    return { ...state, activeProjectId: id };
  }
  if (action.type === "ADD_TASK") {
    const task = action.payload;
    return {
      ...state,
      projects: [
        ...state.projects.map((project) =>
          project.id === state.activeProjectId
            ? { ...project, tasks: [...project.tasks, task] }
            : project,
        ),
      ],
    };
  }
  if (action.type === "DELETE_TASK") {
    const task = action.payload;
    return {
      ...state,
      projects: [
        ...state.projects.map((project) =>
          project.id === projectsState.activeProjectId
            ? { ...project, tasks: [...project.tasks.filter((t) => t != task)] }
            : project,
        ),
      ],
    };
  }
  if (action.type === "NEW_PROJECT_PAGE") {
    return {
      ...state,
      activeProjectId: -1,
    };
  }
  if (action.type === "CANCEL_NEW_PROJECT") {
    return {
      ...state,
      activeProjectId: undefined,
    };
  }
};

export default ProjectStateReducer;
