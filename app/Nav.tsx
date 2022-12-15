import NavSubMenu from "./NavSubMenu";
import NavLink from "./NavLink";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    console.log(isNavOpen);
    setIsNavOpen((prevState) => !prevState);
  }

  return (
    <>
      {isNavOpen ? (
        <nav className="w-[200px] absolute h-full top-0 left-0">
          <div className="w-full h-[50px] bg-red-500 flex justify-end">
            <button onClick={toggleNav}>Back</button>
          </div>
          <ul>
            <NavLink href="/catalogue">Catalogo</NavLink>
            <NavSubMenu>
              <NavLink href="/catalogue/add">Agregar</NavLink>
              <NavLink href="/catalogue/delete">Borrar</NavLink>
            </NavSubMenu>
            <NavLink href="/stock">Stock</NavLink>
            <NavSubMenu>
              <NavLink href="/stock/add">Agregar</NavLink>
              <NavLink href="/stock/delete">Borrar</NavLink>
            </NavSubMenu>
          </ul>
        </nav>
      ) : (
        <button className="absolute top-5 left-4 h-fit w-fit" onClick={toggleNav}>
          <Image alt="menu icon" height={25} src="/icons/menu.svg" width={25} />
        </button>
      )}
    </>
  );
}
