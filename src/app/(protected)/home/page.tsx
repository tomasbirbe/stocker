import { redirect } from "next/navigation";
import React from "react";
const fetchAuth = () => fetch("http:/localhost:3000/api/auth", { cache: "no-cache" });

export default async function HomePage({ children }: { children: React.ReactNode }) {
  // const res = await fetchAuth();

  // if (!res.ok) {
  //   const data = await res.json();

  //   if (data.msg.includes("auth/missing-email")) {
  //     console.log("Redireccionando...");

  //     return redirect("/");
  //   }
  // }

  return <h1>Stocker</h1>;
}
