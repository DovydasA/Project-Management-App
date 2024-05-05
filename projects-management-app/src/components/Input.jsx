import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, type, ...props }, ref) {
  return (
    <span className="flex flex-col">
      <label className="text-left text-[1.5rem] font-semibold uppercase text-stone-600">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          ref={ref}
          className="border bg-stone-300 p-4"
          required
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className="border bg-stone-300 p-4"
          required
          type={type}
          {...props}
        />
      )}
    </span>
  );
});

export default Input;
