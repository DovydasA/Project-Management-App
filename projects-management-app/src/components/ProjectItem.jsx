function ProjectItem({ Title, isActive }) {
  return (
    <li
      className={
        "my-8 mr-0 cursor-pointer rounded p-4 hover:bg-stone-600 " +
        (isActive ? "bg-stone-500" : undefined)
      }
    >
      {Title}
    </li>
  );
}

export default ProjectItem;
