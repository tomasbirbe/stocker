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

function checkAmount(description: string, products: Product[]) {
  const productFinded = products.find((product) => product.description === description);

  return productFinded?.amount;
}

function exist(description: string, products: Product[]) {
  if (products.find((product) => description === product.description)) {
    return true;
  }

  return false;
}

export default function Catalogue() {
  const [products, setProducts] = useState<Product[]>([]);
  const [mode, setMode] = useState<Mode>(Mode.ADD);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const input = (event.target as HTMLFormElement).input.value;

    if (input.trim() === "agregar") {
      setMode(Mode.ADD);
      (event.target as HTMLFormElement).input.value = "";

      return undefined;
    }

    if (input.trim() === "borrar") {
      setMode(Mode.REMOVE);
      (event.target as HTMLFormElement).input.value = "";

      return undefined;
    }

    if (mode === Mode.ADD) {
      if (exist(input, products)) {
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
      if (exist(input, products)) {
        const productSearched = products.find((product) => product.description === input.trim());

        if (productSearched && productSearched.amount > 1) {
          setProducts((prevProducts) =>
            prevProducts.map((product) => {
              if (product.description === productSearched.description) {
                return {
                  ...product,
                  amount: product.amount - 1,
                };
              }

              return product;
            }),
          );
        } else if (productSearched) {
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.description !== productSearched?.description),
          );
        }
      }
    }

    (event.target as HTMLFormElement).input.value = "";
  }

  return (
    <main>
      {/* <button onClick={toggleMode}>{mode === Mode.ADD ? "Remover" : "Agregar"}</button> */}
      <div className="mt-[60px]">
        <div className="flex flex-col items-center gap-[15px] justify-center mb-[20px]">
          <p>{mode === Mode.REMOVE ? "Borrando" : "Agregando"}</p>
          <form onSubmit={handleSubmit}>
            <input autoFocus className="bg-black border-white border" id="input" type="text" />
            <button type="submit" />
          </form>
        </div>
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
