function Input({ label, ...props }) {
  return (
    <span className="flex flex-col">
      <label className="text-left text-[2rem] font-semibold uppercase text-stone-600">
        {label}
      </label>
      <input className="border bg-stone-300 p-4" {...props} />
    </span>
  );
}

export default Input;
