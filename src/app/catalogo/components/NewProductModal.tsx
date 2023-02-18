import { Input } from "@/components/Input";
import Portal from "@/components/Portal";
import { PrimaryButton } from "@/components/PrimaryButton";
import { useState } from "react";

type Props = {
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
};

export const NewProductModal: React.FC<Props> = ({ onSubmit, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Portal>
      <div className="fixed inset-0 m-auto bg-black/60 cursor-pointer" onClick={onClose} />
      <div className="fixed h-fit inset-0 m-auto transform shadow-xl w-[90%] py-6 rounded-[4px] border dark:bg-backfill-dark-500 dark:border-backfill-dark-400">
        <form
          className="mx-auto w-[250px] flex flex-col items-center gap-[30px]"
          onSubmit={onSubmit}
        >
          <Input autoFocus required id="description" label="Descripcion del producto" />
          <Input required id="barcode" label="Codigo de barras" />
          <div className="flex flex-row justify-between w-full">
            <PrimaryButton type="button" onClick={onClose}>
              Cancelar
            </PrimaryButton>
            <PrimaryButton type="submit">Agregar</PrimaryButton>
          </div>
        </form>
      </div>
    </Portal>
  );
};
