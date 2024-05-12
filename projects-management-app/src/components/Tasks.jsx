function Tasks() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
      {!true ? (
        <ul></ul>
      ) : (
        <p className="mb-4 text-stone-800">No tasks available</p>
      )}
    </section>
  );
}

export default Tasks;
