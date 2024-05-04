import Input from "./Input";

function NewProject() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="mt-8 flex h-full flex-col justify-start gap-8 py-8 pl-8 pr-40"
    >
      <span className="flex">
        <button className="ml-auto rounded px-12 py-2 text-[2rem]">
          Cancel
        </button>
        <button className="rounded bg-stone-900 px-12 py-2 text-[2rem] text-stone-300">
          Save
        </button>
      </span>
      <Input label="Title" type="text" />
      <Input label="Description" type="text" />
      <Input label="Due Date" type="date" />
    </form>
  );
}

export default NewProject;
