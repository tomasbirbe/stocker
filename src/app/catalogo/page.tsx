import { Input } from "@/components/Input";

export default function CatalogoPage() {
  return (
    <main className="pt-[70px]">
      <form className="mx-auto w-[200px] flex flex-col items-center gap-[30px]">
        <Input label="Codigo de barras" />
        <Input label="Descripcion del producto" />
        <button className="dark:bg-primary-dark-500 px-2 py-2 rounded-[4px] dark:text-text-color-light">
          Agregar al catalogo
        </button>
      </form>
    </main>
  );
}
