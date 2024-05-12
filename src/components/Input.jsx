import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const inputClasses =
    "w-full rounded border-2 border-stone-200 bg-stone-200 p-1 text-stone-600 focus:border-stone-600 focus:outline-none";
  return (
    <div className="text-left">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
        {textarea ? (
          <textarea
            ref={ref}
            className={inputClasses}
            required
            rows={4}
            {...props}
          />
        ) : (
          <input
            ref={ref}
            className={inputClasses}
            required
            type="text"
            {...props}
          />
        )}
      </label>
    </div>
  );
});

export default Input;
