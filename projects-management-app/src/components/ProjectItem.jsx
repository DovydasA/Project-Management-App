function ProjectItem({ title, isActive, ...props }) {
  return (
    <li
      className={
        "my-8 mr-0 cursor-pointer rounded p-4 hover:bg-stone-600 " +
        (isActive ? "bg-stone-500" : undefined)
      }
      {...props}
    >
      {title}
    </li>
  );
}

export default ProjectItem;
