import { twMerge } from "tailwind-merge";

function ProjectItem({ title, isActive, ...props }) {
  const c = twMerge(
    "mr-0 w-full cursor-pointer rounded px-4 py-1 text-left text-lg text-stone-200 hover:bg-stone-800 hover:text-stone-100 ",
    isActive && "bg-stone-600",
  );
  return (
    <li>
      <button className={c} {...props}>
        {title}
      </button>
    </li>
  );
}

export default ProjectItem;
