"use client";
import React, { useState } from "react";
import { Input } from "@/components/Input";
import { PrimaryButton } from "@/components/PrimaryButton";
import Portal from "@/components/Portal";

type Catalogue = {
  barcode: string;
  description: string;
};

export default function CatalogoPage() {
  const [catalogue, setCatalogue] = useState<Catalogue[]>([]);
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal((prevState) => !prevState);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { barcode_input, description_input } = event.target as HTMLFormElement;

    toggleModal();

    const barcode = barcode_input.value;
    const description = description_input.value;

    setCatalogue((prevCatalogue) => [...prevCatalogue, { barcode, description }]);
  }

  return (
    <main className="relative">
      {showModal && (
        <Portal>
          <div className="fixed inset-0 m-auto bg-black/60" onClick={toggleModal} />
          <div className="fixed h-fit inset-0 m-auto transform shadow-xl w-[90%] py-6 rounded-[4px] border dark:bg-backfill-dark-500 dark:border-backfill-dark-400">
            <form
              className="mx-auto w-[250px] flex flex-col items-center gap-[30px]"
              onSubmit={handleSubmit}
            >
              <Input autoFocus id="description_input" label="Descripcion del producto" />
              <Input id="barcode_input" label="Codigo de barras" />
              <div className="flex flex-row justify-between w-full">
                <PrimaryButton onClick={toggleModal}>Cancelar</PrimaryButton>
                <PrimaryButton>Agregar</PrimaryButton>
              </div>
            </form>
          </div>
        </Portal>
      )}
      <ul>
        {catalogue.map((product) => (
          <li key={product.barcode}>{product.description}</li>
        ))}
      </ul>
      <button onClick={toggleModal}>Agregar</button>
    </main>
  );
}
