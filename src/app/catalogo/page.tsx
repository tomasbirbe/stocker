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
  const [editFormData, setEditFormData] = useState<Product>({
    id: "",
    barcode: "",
    description: "",
  });

  function handleEdit(product: Product) {
    openEditModal();
    setEditFormData(product);
  }

  function handleEditSubmit(event: React.FormEvent) {
    event.preventDefault();

    const { description, barcode } = getInputValuesFromEvent(event);

    setCatalogue((prevCatalogue) =>
      prevCatalogue.map((product) => {
        if (product.id === editFormData.id) {
          return { ...editFormData, description, barcode };
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
          product={editFormData}
          onClose={closeEditModal}
          onSubmit={handleEditSubmit}
        />
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
          onClick={openModal}
        >
          +
        </button>
      </Portal>
    </main>
  );
}
