import React from "react";
import ProjectItem from "./ProjectItem";
import NewProjectButton from "./NewProjectButton";

function ProjectsSidebar({
  projectsState: { activeProjectId: activeTab, projects },
  setActiveTab,
  onNewProject,
}) {
  return (
    <aside className="h-[calc(100svh-4rem)] w-1/3 min-w-[25rem] rounded-tr-xl bg-black py-16 pl-8 pr-0 text-stone-100">
      <div className="flex content-center items-center justify-around">
        <h1 className="text-2xl font-bold tracking-wider">YOUR PROJECTS</h1>
        <NewProjectButton onClick={onNewProject}>
          + Add Project
        </NewProjectButton>
      </div>

      <ul className="mt-8 grid gap-3">
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            isActive={project.id === activeTab}
            onClick={() => setActiveTab(project.id)}
          />
        ))}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
