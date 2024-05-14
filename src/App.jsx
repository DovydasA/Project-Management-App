import ProjectsStateProvider from "./contexts/ProjectsStateContext/ProjectsStateProvider.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar";
import Content from "./components/Content.jsx";

function App() {
  return (
    <ProjectsStateProvider>
      <div className="mt-16 flex">
        <ProjectsSidebar />
        <Content />
      </div>
    </ProjectsStateProvider>
  );
}

export default App;
