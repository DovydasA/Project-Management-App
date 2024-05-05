function ProjectInfo({ project: { title, description, dueDate } }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{dueDate}</p>
    </section>
  );
}

export default ProjectInfo;
