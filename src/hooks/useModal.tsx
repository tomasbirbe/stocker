import { useState } from "react";

export const useModal = (initialValue = false): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState(initialValue);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return [isOpen, openModal, closeModal];
};
