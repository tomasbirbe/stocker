"use client";
import React, { useState } from "react";
import Portal from "@/components/Portal";
import { NewProductModal } from "./components/NewProductModal";
import type { Product } from "@/app/types";
import { EditProductModal } from "./components/EditProductModal";
import { getInputValuesFromEvent } from "../utils";
import { useModal } from "@/hooks/useModal";

export default function CatalogoPage() {
  const [catalogue, setCatalogue] = useState<Product[]>([]);
  const [showModal, openModal, closeModal] = useModal(false);
  const [showEditModal, openEditModal, closeEditModal] = useModal(false);
  const [productToEdit, setProductToEdit] = useState<Product>({
    id: "",
    barcode: "",
    description: "",
  });

  function handleEdit(product: Product) {
    openEditModal();
    setProductToEdit(product);
  }

  function handleEditSubmit(event: React.FormEvent) {
    event.preventDefault();

    const { description, barcode } = getInputValuesFromEvent(event);

    setCatalogue((prevCatalogue) =>
      prevCatalogue.map((product) => {
        if (product.id === productToEdit.id) {
          return { ...productToEdit, description, barcode };
        }

        return product;
      }),
    );
    closeEditModal();
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { description, barcode } = getInputValuesFromEvent(event);

    setCatalogue((prevCatalogue) => [
      ...prevCatalogue,
      { id: self.crypto.randomUUID().toString(), barcode, description },
    ]);
    closeModal();
  }

  function handleDelete(barcode: string) {
    setCatalogue((prevCatalogue) => prevCatalogue.filter((product) => product.barcode !== barcode));
  }

  return (
    <main className="relative">
      {showModal && <NewProductModal onClose={closeModal} onSubmit={handleSubmit} />}
      {showEditModal && (
        <EditProductModal
          product={productToEdit}
          onClose={closeEditModal}
          onSubmit={handleEditSubmit}
        />
      )}
      <h1 className="bold w-full py-4 text-center text-[24px]">Catalogo</h1>
      <ul className="flex flex-col justify-center gap-1 p-2">
        {catalogue.map((product) => (
          <li
            key={product.barcode}
            className="flex justify-between rounded-[2px] py-4 px-2 dark:bg-backfill-dark-400"
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
          className="fixed bottom-5 right-5 h-[45px] w-[45px] rounded-full text-black dark:bg-primary-dark-500"
          onClick={openModal}
        >
          +
        </button>
      </Portal>
    </main>
  );
}
