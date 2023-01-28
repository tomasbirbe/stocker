import { Input } from "@/components/Input";
import { PrimaryButton } from "@/components/PrimaryButton";

type Catalogue = {
  barcode: string;
  description: string;
};

const catalogue = [{ barcode: "13241234", description: "monitor" }];

export default function CatalogoPage() {
  return (
    <main className="pt-[70px]">
      <form className="mx-auto w-[250px] flex flex-col items-center gap-[30px]">
        <Input autoFocus label="Codigo de barras" />
        <Input label="Descripcion del producto" />
        <PrimaryButton>Agregar al catalogo</PrimaryButton>
      </form>
      <ul>
        {catalogue.map((product) => (
          <li key={product.barcode}>{product.description}</li>
        ))}
      </ul>
    </main>
  );
}
