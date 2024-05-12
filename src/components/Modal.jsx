import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="rounded-md bg-stone-200 p-6 backdrop:bg-stone-900/90"
    >
      {children}
      <form method="dialog" className="text-right">
        <button className="mt-6 rounded-md bg-stone-600 px-4 py-1">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default Modal;
