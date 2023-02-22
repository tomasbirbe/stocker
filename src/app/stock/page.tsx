"use client";
import React, { useEffect, useState } from "react";
import Portal from "@/components/Portal";
import { NewProductModal } from "./components/NewProductModal";
import type { Product } from "@/app/types";
import { EditProductModal } from "./components/EditProductModal";
import { clearInputValues, getInputValuesFromEvent } from "../utils";
import { useModal } from "@/hooks/useModal";
import { ConfirmModal } from "./components/ConfirmModal";
import { Input } from "@/components/Input";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

enum MovementType {
  ADD,
  REMOVE,
}

type Movement = {
  id: string;
  product: Product;
  type: MovementType;
  amount: number;
};

const catalogue: Product[] = [
  {
    id: "1",
    description: "Tomas",
    barcode: "Birbe",
    amount: 0,
  },
  {
    id: "2",
    description: "Caterina",
    barcode: "Banda",
    amount: 0,
  },
  {
    id: "3",
    description: "Facundo",
    barcode: "Nardone",
    amount: 0,
  },
  {
    id: "4",
    description: "Julieta",
    barcode: "Vega",
    amount: 0,
  },
];

export default function StockPage() {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [stock, setStock] = useState<Product[]>(catalogue);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const lastMovement = movements[movements.length - 1];

    if (lastMovement) {
      if (lastMovement.type === MovementType.ADD) {
        setStock((prevStock) =>
          prevStock.map((product) => {
            if (lastMovement.product.id === product.id) {
              return { ...product, amount: product.amount + lastMovement.amount };
            }

            return product;
          }),
        );
      }

      if (lastMovement.type === MovementType.REMOVE) {
        const productToUpdate = stock.find((product) => product.id === lastMovement.product.id);

        if (productToUpdate === undefined) {
          throw new Error("That product doesn't exist");
        }

        if (lastMovement.product.amount > productToUpdate.amount) {
          throw new Error("There aren't enough amount of that product to remove");
        }

        setStock((prevStock) =>
          prevStock.map((product) => {
            if (lastMovement.product.id === product.id) {
              return { ...product, amount: product.amount - lastMovement.amount };
            }

            return product;
          }),
        );
      }
    }
  }, [movements]);

  function handleMovementSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { barcode, amount } = getInputValuesFromEvent(event);
    const product = catalogue.find((product) => product.barcode === barcode);

    if (product === undefined) {
      setIsError(true);

      return null;
    }

    const newMovement = {
      id: self.crypto.randomUUID().toString(),
      product,
      type: MovementType.ADD,
      amount: Number(amount),
    };

    setMovements((prevMovements) => [...prevMovements, newMovement]);
    clearInputValues(event, ["amount"]);
    setIsError(false);
  }

  return (
    <main className="relative flex flex-col gap-[30px]">
      <h1 className="bold w-full py-4 text-center text-[24px]">Catalogo</h1>
      <form
        className="mx-auto flex w-[300px] flex-col items-center justify-center gap-[25px]"
        onSubmit={handleMovementSubmit}
      >
        <div>
          <div className="flex w-full justify-between">
            <Input autoFocus required className="w-[70%]" id="barcode" label="Codigo de barras" />
            <Input required className="w-[20%]" defaultValue={1} id="amount" label="Cantidad" />
          </div>
          {isError && <small className="text-[14px] text-red-500">Ese producto no existe</small>}
        </div>
        <PrimaryButton className="w-full" type="submit">
          Agregar
        </PrimaryButton>
      </form>
      <ul className="flex flex-col justify-center gap-1 p-2">
        {movements.map((movement) => (
          <li
            key={movement.id}
            className="flex justify-between rounded-[2px] py-4 px-2 dark:bg-backfill-dark-400"
          >
            <p className="overflow-hidden pr-2">
              {movement.product.description} X {movement.amount}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
