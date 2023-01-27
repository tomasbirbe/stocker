import { Input } from "@/components/Input";
import { PrimaryButton } from "@/components/PrimaryButton";

export default function LoginPage() {
  return (
    <main className="grid place-items-center h-full">
      <form className="flex flex-col w-[250px] gap-[20px] items-center">
        <h1 className="font-semibold text-[24px]">Ingresa con tu cuenta!</h1>
        <Input label="Usuario" />
        <Input label="Clave" />
        <div className="flex pt-[15px] justify-between w-full">
          <button>Registrarse</button>
          <PrimaryButton>Ingresar</PrimaryButton>
        </div>
      </form>
    </main>
  );
}
