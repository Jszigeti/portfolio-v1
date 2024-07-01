import { ReactNode } from "react";

// Components
import Button from "./Button";

type ModalProps = {
  show: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export default function Modal({ show, onClose, title, children }: ModalProps) {
  // Displaying modal based on show value
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 text-foreground z-40">
      <div className="bg-primary p-6 rounded-md shadow-lg w-3/4 lg:w-1/3 z-50">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        {/* Modal close button */}
        <Button onClickFunction={onClose} content="Fermer" />
      </div>
    </div>
  );
}
