import { useContext } from "react";
import ProjectsStateContext from "../contexts/ProjectsStateContext/ProjectsStateContext";
import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import ProjectInfo from "./ProjectInfo";

function Content() {
  const {
    projectsState: { activeProjectId },
  } = useContext(ProjectsStateContext);

  let content;
  switch (activeProjectId) {
    case undefined:
      content = <NoProjectSelected />;
      break;
    case -1:
      content = <NewProject />;
      break;
    default:
      content = <ProjectInfo />;
      break;
  }

  return (
    <main className="container h-[calc(100svh-4rem)] w-full p-8 text-center">
      {content}
    </main>
  );
}

export default Content;
