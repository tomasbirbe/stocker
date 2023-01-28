"use client";

import "@/firebase/app";
import { Input } from "@/components/Input";
import { PrimaryButton } from "@/components/PrimaryButton";
import { FormEvent } from "react";
import { login } from "@/firebase/login";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { email_input, password_input } = event.target as HTMLFormElement;

    login(email_input.value, password_input.value)
      .then((token) => {
        if (token) {
          redirect("/home");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <main className="grid place-items-center h-full">
      <form className="flex flex-col w-[250px] gap-[20px] items-center" onSubmit={handleSubmit}>
        <h1 className="font-semibold text-[24px]">Ingresa con tu cuenta!</h1>
        <Input id="email_input" label="Usuario" />
        <Input id="password_input" label="Clave" type="password" />
        <div className="flex pt-[15px] justify-between w-full">
          <button>Registrarse</button>
          <PrimaryButton>Ingresar</PrimaryButton>
        </div>
      </form>
    </main>
  );
}
