import Portal from "@/components/Portal";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

type Props = {
  onCancel: () => void;
  productDescription: string;
  onConfirm: () => void;
};

export const ConfirmModal: React.FC<Props> = ({ onCancel, onConfirm, productDescription }) => {
  return (
    <Portal>
      <div className="fixed inset-0 m-auto cursor-pointer bg-black/60" onClick={onCancel} />
      <div className="fixed inset-0 m-auto h-fit w-[90%] transform rounded-[4px] border py-6 shadow-xl dark:border-backfill-dark-400 dark:bg-backfill-dark-500">
        <form className="mx-auto flex w-[250px] flex-col items-center gap-[30px]">
          <p>
            Estas a punto de eliminar el producto <i>{productDescription}</i>, queres eliminarlo?
          </p>
          <div className="flex w-full flex-row justify-between">
            <SecondaryButton type="button" onClick={onCancel}>
              Cancelar
            </SecondaryButton>
            <PrimaryButton type="button" onClick={onConfirm}>
              Eliminar
            </PrimaryButton>
          </div>
        </form>
      </div>
    </Portal>
  );
};
