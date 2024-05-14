import React from "react";
import { useContext } from "react";
import ProjectsStateContext from "../contexts/ProjectsStateContext/ProjectsStateContext";
import ProjectItem from "./ProjectItem";
import NewProjectButton from "./NewProjectButton";

function ProjectsSidebar() {
  const {
    projectsState: { activeProjectId, projects },
    startNewProject,
    setActiveTabId,
  } = useContext(ProjectsStateContext);

  return (
    <aside className="h-[calc(100svh-4rem)] w-1/3 min-w-[25rem] rounded-tr-xl bg-black py-16 pl-8 pr-0 text-stone-100">
      <div className="flex content-center items-center justify-around">
        <h1 className="text-2xl font-bold tracking-wider">YOUR PROJECTS</h1>
        <NewProjectButton onClick={startNewProject}>
          + Add Project
        </NewProjectButton>
      </div>

      <ul className="mt-8 grid gap-3">
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            isActive={project.id === activeProjectId}
            onClick={() => setActiveTabId(project.id)}
          />
        ))}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
