import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectsSidebar({
  activeTab,
  setActiveTab,
  projectsList,
  onNewProject,
}) {
  return (
    <section className="h-[calc(100svh-4rem)] w-1/3 min-w-[20rem] rounded-r-2xl bg-black p-16 pr-0 text-white">
      <div className="flex content-center items-center justify-center">
        <h1 className="mr-4 text-3xl font-bold tracking-wider">
          YOUR PROJECTS
        </h1>
        <button
          onClick={onNewProject}
          className="ml-auto mr-4 rounded bg-neutral-700 p-4 hover:bg-neutral-600"
        >
          + Add Project
        </button>
      </div>

      <ul>
        {projectsList.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            isActive={project.id === activeTab}
            onClick={() => setActiveTab(project.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSidebar;
