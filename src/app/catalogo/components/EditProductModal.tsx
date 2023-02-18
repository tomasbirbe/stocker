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
      <div className="fixed inset-0 m-auto cursor-pointer bg-black/60" onClick={onClose} />
      <div className="fixed inset-0 m-auto h-fit w-[90%] transform rounded-[4px] border py-6 shadow-xl dark:border-backfill-dark-400 dark:bg-backfill-dark-500">
        <form
          className="mx-auto flex w-[250px] flex-col items-center gap-[30px]"
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
          <div className="flex w-full flex-row justify-between">
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
