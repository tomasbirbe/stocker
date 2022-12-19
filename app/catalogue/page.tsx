"use client";
import { useState } from "react";

type Product = {
  id: number;
  description: string;
  amount: number;
};

enum Mode {
  ADD,
  REMOVE,
}

export default function Catalogue() {
  const [products, setProducts] = useState<Product[]>([]);
  const [mode, setMode] = useState<Mode>(Mode.ADD);

  function toggleMode() {
    setMode((mode) => {
      if (mode === Mode.ADD) {
        return Mode.REMOVE;
      }

      return Mode.ADD;
    });
  }

  function addMode() {
    setMode(Mode.ADD);
  }

  function removeMode() {
    setMode(Mode.REMOVE);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const input = (event.target as HTMLFormElement).input.value;

    if (mode === Mode.ADD) {
      if (exist(input)) {
        setProducts((prevState) =>
          prevState.map((product) => {
            if (input.trim() === product.description) {
              return {
                id: product.id,
                description: product.description,
                amount: product.amount + 1,
              };
            }

            return product;
          }),
        );
      } else {
        setProducts((prevState) => [
          ...prevState,
          { id: Math.random() * new Date().getDate(), description: input, amount: 1 },
        ]);
      }
    } else {
      if (exist(input)) {
        setProducts((prevProducts) => prevProducts.map((product) => {
          if(product.description === input.trim()) {
            
          }
        }));
      }
    }

    (event.target as HTMLFormElement).input.value = "";
  }

  function exist(description: string) {
    if (products.find((product) => description === product.description)) {
      return true;
    }

    return false;
  }

  return (
    <main>
      <button onClick={toggleMode}>{mode === Mode.ADD ? "Remover" : "Agregar"}</button>
      <form onSubmit={handleSubmit}>
        <input autoFocus className="bg-black" id="input" type="text" />
        <button type="submit">Enviar</button>
      </form>
      <div className="mt-[60px]">
        <ul className="grid grid-cols-12 " id="theader">
          <li className="border-red-500 border col-span-9 text-center">Producto</li>
          <li className="border-green-500 border col-span-3 text-center">Cantidad</li>
        </ul>
        {products.map((product) => (
          <ul key={product.id} className="grid grid-cols-12" id="tbody">
            <li className="border-red-500 border col-span-9">{product.description}</li>
            <li className="border-green-500 border col-span-3 text-center">{product.amount}</li>
          </ul>
        ))}
      </div>
    </main>
  );
}
