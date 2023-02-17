"use client";
import React, { useState } from "react";
import { Input } from "@/components/Input";
import { PrimaryButton } from "@/components/PrimaryButton";
import Portal from "@/components/Portal";
import { randomUUID } from "crypto";

type Product = {
  id: string;
  barcode: string;
  description: string;
};

export default function CatalogoPage() {
  const [catalogue, setCatalogue] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState<Product>({
    id: "",
    barcode: "",
    description: "",
  });

  function toggleShowEditModal() {
    setShowEditModal((prevState) => !prevState);
  }

  function handleEdit(product: Product) {
    setShowEditModal(true);
    setEditFormData(product);
  }

  function handleEditSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { barcode_input, description_input } = event.target as HTMLFormElement;

    const barcode = barcode_input.value;
    const description = description_input.value;

		console.log(barcode, description)
    setCatalogue((prevCatalogue) =>
      prevCatalogue.map((product) => {
        if (product.id === editFormData.id) {
          return { ...editFormData, description, barcode };
        }

        return product;
      }),
    );
    toggleShowEditModal();
  }

  function toggleModal() {
    setShowModal((prevState) => !prevState);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { barcode_input, description_input } = event.target as HTMLFormElement;

    const barcode = barcode_input.value;
    const description = description_input.value;

    setCatalogue((prevCatalogue) => [
      ...prevCatalogue,
      { id: self.crypto.randomUUID().toString(), barcode, description },
    ]);
    toggleModal();
  }

  function handleDelete(barcode: string) {
    setCatalogue((prevCatalogue) => prevCatalogue.filter((product) => product.barcode !== barcode));
  }

  return (
    <main className="relative">
      {showModal && (
        <Portal>
          <div className="fixed inset-0 m-auto bg-black/60 cursor-pointer" onClick={toggleModal} />
          <div className="fixed h-fit inset-0 m-auto transform shadow-xl w-[90%] py-6 rounded-[4px] border dark:bg-backfill-dark-500 dark:border-backfill-dark-400">
            <form
              className="mx-auto w-[250px] flex flex-col items-center gap-[30px]"
              onSubmit={handleSubmit}
            >
              <Input autoFocus id="description_input" label="Descripcion del producto" />
              <Input id="barcode_input" label="Codigo de barras" />
              <div className="flex flex-row justify-between w-full">
                <PrimaryButton type="button" onClick={toggleModal}>
                  Cancelar
                </PrimaryButton>
                <PrimaryButton type="submit">Agregar</PrimaryButton>
              </div>
            </form>
          </div>
        </Portal>
      )}
      {showEditModal && (
        <Portal>
          <div
            className="fixed inset-0 m-auto bg-black/60 cursor-pointer"
            onClick={toggleShowEditModal}
          />
          <div className="fixed h-fit inset-0 m-auto transform shadow-xl w-[90%] py-6 rounded-[4px] border dark:bg-backfill-dark-500 dark:border-backfill-dark-400">
            <form
              className="mx-auto w-[250px] flex flex-col items-center gap-[30px]"
              onSubmit={handleEditSubmit}
            >
              <Input
                autoFocus
                defaultValue={editFormData.description}
                id="description_input"
                label="Descripcion del producto"
              />
              <Input
                defaultValue={editFormData.barcode}
                id="barcode_input"
                label="Codigo de barras"
              />
              <div className="flex flex-row justify-between w-full">
                <PrimaryButton type="button" onClick={toggleShowEditModal}>
                  Cancelar
                </PrimaryButton>
                <PrimaryButton type="submit">Agregar</PrimaryButton>
              </div>
            </form>
          </div>
        </Portal>
      )}
      <h1 className="text-center w-full text-[24px] bold py-4">Catalogo</h1>
      <ul className="flex flex-col justify-center p-2 gap-1">
        {catalogue.map((product) => (
          <li
            key={product.barcode}
            className="dark:bg-backfill-dark-400 py-4 px-2 rounded-[2px] flex justify-between"
          >
            <p className="overflow-hidden pr-2">{product.description}</p>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(product)}>Editar</button>
              <button onClick={() => handleDelete(product.barcode)}>Borrar</button>
            </div>
          </li>
        ))}
      </ul>
      <Portal>
        <button
          className="dark:bg-primary-dark-500 rounded-full w-[45px] h-[45px] fixed bottom-5 right-5 text-black"
          onClick={toggleModal}
        >
          +
        </button>
      </Portal>
    </main>
  );
}
