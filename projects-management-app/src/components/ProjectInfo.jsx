function ProjectInfo({
  project: { id, title, description, dueDate },
  onDelete,
}) {
  return (
    <section className="flex h-2/3 flex-col justify-around gap-4 px-4 text-left">
      <div className="flex flex-col gap-4">
        <h2 className="text-[2rem] font-bold">{title}</h2>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
        <p>
          <strong>Due Date: </strong>
          {dueDate}
        </p>
      </div>

      <button
        onClick={() => onDelete(id)}
        className="mr-auto rounded-2xl border-4 border-black bg-black px-3 py-2 font-extrabold text-red-500 hover:border-red-500"
      >
        Delete
      </button>
    </section>
  );
}

export default ProjectInfo;
