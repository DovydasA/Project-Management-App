function NewProjectButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="rounded-md bg-stone-700 px-4 py-2 text-base font-semibold text-stone-400 hover:bg-stone-600 hover:text-stone-100"
    >
      {children}
    </button>
  );
}

export default NewProjectButton;
