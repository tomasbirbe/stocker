import { Product } from "@/app/types";
import { Input } from "@/components/Input";
import Portal from "@/components/Portal";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

type Props = {
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  product: Product;
};

export const EditProductModal: React.FC<Props> = ({ onSubmit, onClose, product }) => {
  return (
    <Portal>
      <div className="fixed inset-0 m-auto bg-black/60 cursor-pointer" onClick={onClose} />
      <div className="fixed h-fit inset-0 m-auto transform shadow-xl w-[90%] py-6 rounded-[4px] border dark:bg-backfill-dark-500 dark:border-backfill-dark-400">
        <form
          className="mx-auto w-[250px] flex flex-col items-center gap-[30px]"
          onSubmit={onSubmit}
        >
          <Input
            autoFocus
            required
            defaultValue={product.description}
            id="description"
            label="Descripcion del producto"
          />
          <Input required defaultValue={product.barcode} id="barcode" label="Codigo de barras" />
          <div className="flex flex-row justify-between w-full">
            <SecondaryButton type="button" onClick={onClose}>
              Cancelar
            </SecondaryButton>
            <PrimaryButton type="submit">Agregar</PrimaryButton>
          </div>
        </form>
      </div>
    </Portal>
  );
};
